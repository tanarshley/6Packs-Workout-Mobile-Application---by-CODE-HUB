import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BBlungeStepUpsPage } from './bblunge-step-ups.page';

describe('BBlungeStepUpsPage', () => {
  let component: BBlungeStepUpsPage;
  let fixture: ComponentFixture<BBlungeStepUpsPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BBlungeStepUpsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BBlungeStepUpsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
