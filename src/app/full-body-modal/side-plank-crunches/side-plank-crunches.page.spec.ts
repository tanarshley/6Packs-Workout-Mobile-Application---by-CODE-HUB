import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SidePlankCrunchesPage } from './side-plank-crunches.page';

describe('SidePlankCrunchesPage', () => {
  let component: SidePlankCrunchesPage;
  let fixture: ComponentFixture<SidePlankCrunchesPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SidePlankCrunchesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SidePlankCrunchesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
