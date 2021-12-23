import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MerlinArmScissorPage } from './merlin-arm-scissor.page';

describe('MerlinArmScissorPage', () => {
  let component: MerlinArmScissorPage;
  let fixture: ComponentFixture<MerlinArmScissorPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MerlinArmScissorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MerlinArmScissorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
