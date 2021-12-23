import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ThirdKneePushUpModalPage } from './third-knee-push-up-modal.page';

describe('ThirdKneePushUpModalPage', () => {
  let component: ThirdKneePushUpModalPage;
  let fixture: ComponentFixture<ThirdKneePushUpModalPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirdKneePushUpModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ThirdKneePushUpModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
