import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TresEnLineaComponent } from './tres-en-linea.component';

describe('TresEnLineaComponent', () => {
  let component: TresEnLineaComponent;
  let fixture: ComponentFixture<TresEnLineaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TresEnLineaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TresEnLineaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
