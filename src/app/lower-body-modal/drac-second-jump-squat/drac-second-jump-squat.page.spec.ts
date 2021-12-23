import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DracSecondJumpSquatPage } from './drac-second-jump-squat.page';

describe('DracSecondJumpSquatPage', () => {
  let component: DracSecondJumpSquatPage;
  let fixture: ComponentFixture<DracSecondJumpSquatPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DracSecondJumpSquatPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DracSecondJumpSquatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
