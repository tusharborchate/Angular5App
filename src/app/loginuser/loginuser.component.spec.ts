import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginuserComponent } from './loginuser.component';

import { AppComponent } from '../app.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { HomeComponent } from '../home/home.component';
import { AppModule } from '../app.module';

describe('LoginuserComponent', () => {
  let component: LoginuserComponent;
  let fixture: ComponentFixture<LoginuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ],
      imports: [AppModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  // it('should contain h2',async(()=>{

  //   fixture.detectChanges();
  //  const el=fixture.nativeElement.querySelector('h2');
  //  expect(el.innerText).toContain("Welcome");
  // }))


  it('should be create h2 tag', async(() => {
  

    const fixture= TestBed.createComponent(LoginuserComponent);
    fixture.detectChanges();
    const compiled=fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').innerText).toContain("Welcome");
  }));
});
