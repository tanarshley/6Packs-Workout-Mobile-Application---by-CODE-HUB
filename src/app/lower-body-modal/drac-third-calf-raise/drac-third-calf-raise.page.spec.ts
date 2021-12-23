import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DracThirdCalfRaisePage } from './drac-third-calf-raise.page';

describe('DracThirdCalfRaisePage', () => {
  let component: DracThirdCalfRaisePage;
  let fixture: ComponentFixture<DracThirdCalfRaisePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DracThirdCalfRaisePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DracThirdCalfRaisePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
