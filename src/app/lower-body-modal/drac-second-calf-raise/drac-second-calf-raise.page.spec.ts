import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DracSecondCalfRaisePage } from './drac-second-calf-raise.page';

describe('DracSecondCalfRaisePage', () => {
  let component: DracSecondCalfRaisePage;
  let fixture: ComponentFixture<DracSecondCalfRaisePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DracSecondCalfRaisePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DracSecondCalfRaisePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
