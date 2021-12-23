import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MerlinChestExpansionPage } from './merlin-chest-expansion.page';

describe('MerlinChestExpansionPage', () => {
  let component: MerlinChestExpansionPage;
  let fixture: ComponentFixture<MerlinChestExpansionPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MerlinChestExpansionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MerlinChestExpansionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
