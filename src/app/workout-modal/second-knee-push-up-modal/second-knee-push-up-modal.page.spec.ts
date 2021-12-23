import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SecondKneePushUpModalPage } from './second-knee-push-up-modal.page';

describe('SecondKneePushUpModalPage', () => {
  let component: SecondKneePushUpModalPage;
  let fixture: ComponentFixture<SecondKneePushUpModalPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondKneePushUpModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SecondKneePushUpModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
