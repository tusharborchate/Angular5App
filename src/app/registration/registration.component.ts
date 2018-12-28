import { Component, OnInit, Input, inject, Inject } from '@angular/core';
import { RegistrationModel } from '../models/RegistrationModel';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AccountService } from '../account.service';
import { NgbModalConfig, NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../modal/modal.component';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';
import { LoginModel } from '../models/LoginModel';





@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  registrationForm: FormGroup;
  registerfalse: boolean = false;
  register: boolean = false;
  userData:LoginModel[];
  message:string;

  modalcontent: ModalComponent;
  text = "New";
  email: string;
  index: number;
  registerData = [];
  ngOnInit() {
  }

  constructor(@Inject(LOCAL_STORAGE) private localstorage: WebStorageService, private router: Router, private route: ActivatedRoute,
    config: NgbModalConfig, private modalService: NgbModal,

    private registrationModel: RegistrationModel, private formBuilder: FormBuilder, private accountService: AccountService) {

    this.registerData = this.localstorage.get("registerData");
    this.userData = this.localstorage.get("users");
 if(this.userData==null)
 {
   this.userData=[];
   this.registerData=[];
 }
    this.route.params.subscribe(param => {
      this.email = param["email"];
      if (this.email != null && this.email!=undefined) {
        this.text = "Update";

        for (let i = 0; i < this.registerData.length; i++) {

          if (this.registerData[i].EmailId == this.email) {
            this.registrationModel = this.registerData[i];
            this.index = i;
            break;
          }
        }
      }
    }
    );
    
    
    this.registrationForm = this.formBuilder.group({
      EmailId: [this.registrationModel.EmailId, Validators.compose([Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$")])],
      Password: [this.registrationModel.Password, Validators.required],
      Name: [this.registrationModel.Name, Validators.required],
      Weight: [this.registrationModel.Weight, Validators.required]
    });

  }

  async Register() {
    try {
      if (this.email == null || this.email==undefined) {
        this.accountService.Registration(this.registrationModel).then(data => {
          if (data == true) {
            this.register = true;
            this.registerfalse = false;
            var login = new LoginModel();
            login.EmailId = this.registrationModel.EmailId;
            login.Password = this.registrationModel.Password;
            this.userData.push(login);
            
            this.registerData.push(this.registrationModel);
            this.localstorage.set("users", this.userData);
            this.localstorage.set("registerData", this.registerData);
            this.registrationForm.reset();

            this.router.navigate(["users"]);
            // const modalRef = this.modalService.open(this.modalcontent);
          }
          else {
            this.registerfalse = true;
            return  false;
          }

        });
      }
      else {
        this.registerData.splice(this.index, 1);
        this.registerData.push(this.registrationModel);
        this.localstorage.set("registerData", this.registerData);
        var userData = this.localstorage.get("users");
        for (let i = 0; i < userData.length; i++) {

          if (userData[i].EmailId == this.email) {
            this.index = i;
            break;
          }
        }

        userData.splice(this.index, 1);
        var login = new LoginModel();
        login.EmailId = this.registrationModel.EmailId;
        login.Password = this.registrationModel.Password;

        userData.push(login);

        this.localstorage.set("users", userData);
        this.registrationForm.reset();

      }         
       this.message="Data saved";

    }
    catch (e) {
      this.message="Error occured";

    }
  }

  back()
  {
    this.router.navigate(['users']);
  }



}
