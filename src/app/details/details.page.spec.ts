import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';

import { DetailsPage } from './details.page';
import { Router } from '@angular/router';


class RouterStub{
  getCurrentNavigation(){
    return {
       extras: {
          state:{
            id : "1234"
          }
        }
      }
    }
 }

describe('DetailsPage', () => {
  let component: DetailsPage;
  let fixture: ComponentFixture<DetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsPage ],
      imports: [IonicModule.forRoot(),RouterTestingModule],
      providers: [ {provide: Router, useClass: RouterStub}]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
