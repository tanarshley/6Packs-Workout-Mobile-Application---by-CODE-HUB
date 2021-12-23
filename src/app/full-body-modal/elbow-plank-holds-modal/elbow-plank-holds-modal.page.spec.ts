import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ElbowPlankHoldsModalPage } from './elbow-plank-holds-modal.page';

describe('ElbowPlankHoldsModalPage', () => {
  let component: ElbowPlankHoldsModalPage;
  let fixture: ComponentFixture<ElbowPlankHoldsModalPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ElbowPlankHoldsModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ElbowPlankHoldsModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
