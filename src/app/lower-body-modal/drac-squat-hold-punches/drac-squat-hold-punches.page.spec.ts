import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DracSquatHoldPunchesPage } from './drac-squat-hold-punches.page';

describe('DracSquatHoldPunchesPage', () => {
  let component: DracSquatHoldPunchesPage;
  let fixture: ComponentFixture<DracSquatHoldPunchesPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DracSquatHoldPunchesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DracSquatHoldPunchesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
