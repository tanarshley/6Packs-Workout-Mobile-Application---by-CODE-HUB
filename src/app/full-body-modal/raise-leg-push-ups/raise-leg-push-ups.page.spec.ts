import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RaiseLegPushUpsPage } from './raise-leg-push-ups.page';

describe('RaiseLegPushUpsPage', () => {
  let component: RaiseLegPushUpsPage;
  let fixture: ComponentFixture<RaiseLegPushUpsPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RaiseLegPushUpsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RaiseLegPushUpsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
