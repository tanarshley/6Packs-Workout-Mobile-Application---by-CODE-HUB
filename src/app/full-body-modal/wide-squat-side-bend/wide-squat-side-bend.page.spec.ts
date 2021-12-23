import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WideSquatSideBendPage } from './wide-squat-side-bend.page';

describe('WideSquatSideBendPage', () => {
  let component: WideSquatSideBendPage;
  let fixture: ComponentFixture<WideSquatSideBendPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WideSquatSideBendPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WideSquatSideBendPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
