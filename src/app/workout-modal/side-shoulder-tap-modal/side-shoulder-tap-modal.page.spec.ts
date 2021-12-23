import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SideShoulderTapModalPage } from './side-shoulder-tap-modal.page';

describe('SideShoulderTapModalPage', () => {
  let component: SideShoulderTapModalPage;
  let fixture: ComponentFixture<SideShoulderTapModalPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SideShoulderTapModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SideShoulderTapModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
