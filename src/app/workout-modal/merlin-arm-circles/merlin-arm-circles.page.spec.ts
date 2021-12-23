import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MerlinArmCirclesPage } from './merlin-arm-circles.page';

describe('MerlinArmCirclesPage', () => {
  let component: MerlinArmCirclesPage;
  let fixture: ComponentFixture<MerlinArmCirclesPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MerlinArmCirclesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MerlinArmCirclesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
