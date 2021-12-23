import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PushUpShoulderTapsPage } from './push-up-shoulder-taps.page';

describe('PushUpShoulderTapsPage', () => {
  let component: PushUpShoulderTapsPage;
  let fixture: ComponentFixture<PushUpShoulderTapsPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PushUpShoulderTapsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PushUpShoulderTapsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
