import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BBsingleLegBridgesPage } from './bbsingle-leg-bridges.page';

describe('BBsingleLegBridgesPage', () => {
  let component: BBsingleLegBridgesPage;
  let fixture: ComponentFixture<BBsingleLegBridgesPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BBsingleLegBridgesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BBsingleLegBridgesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
