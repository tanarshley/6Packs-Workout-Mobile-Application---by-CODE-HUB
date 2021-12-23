import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ThirdFlutterKickslModalPage } from './third-flutter-kicksl-modal.page';

describe('ThirdFlutterKickslModalPage', () => {
  let component: ThirdFlutterKickslModalPage;
  let fixture: ComponentFixture<ThirdFlutterKickslModalPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirdFlutterKickslModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ThirdFlutterKickslModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
