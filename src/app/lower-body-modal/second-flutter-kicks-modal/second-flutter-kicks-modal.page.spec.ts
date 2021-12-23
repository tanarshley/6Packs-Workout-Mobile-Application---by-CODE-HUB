import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SecondFlutterKicksModalPage } from './second-flutter-kicks-modal.page';

describe('SecondFlutterKicksModalPage', () => {
  let component: SecondFlutterKicksModalPage;
  let fixture: ComponentFixture<SecondFlutterKicksModalPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondFlutterKicksModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SecondFlutterKicksModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
