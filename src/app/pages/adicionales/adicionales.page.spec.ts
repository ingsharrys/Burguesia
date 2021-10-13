import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdicionalesPage } from './adicionales.page';

describe('AdicionalesPage', () => {
  let component: AdicionalesPage;
  let fixture: ComponentFixture<AdicionalesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdicionalesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdicionalesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
