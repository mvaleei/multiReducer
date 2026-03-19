import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Variacontatore } from './variacontatore';

describe('Variacontatore', () => {
  let component: Variacontatore;
  let fixture: ComponentFixture<Variacontatore>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Variacontatore]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Variacontatore);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
