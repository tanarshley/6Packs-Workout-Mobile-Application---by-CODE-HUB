import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MerlinScissorChopsPage } from './merlin-scissor-chops.page';

describe('MerlinScissorChopsPage', () => {
  let component: MerlinScissorChopsPage;
  let fixture: ComponentFixture<MerlinScissorChopsPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MerlinScissorChopsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MerlinScissorChopsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
