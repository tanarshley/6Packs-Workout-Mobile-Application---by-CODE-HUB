import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WideSquatCalfRaisePage } from './wide-squat-calf-raise.page';

describe('WideSquatCalfRaisePage', () => {
  let component: WideSquatCalfRaisePage;
  let fixture: ComponentFixture<WideSquatCalfRaisePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WideSquatCalfRaisePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WideSquatCalfRaisePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
