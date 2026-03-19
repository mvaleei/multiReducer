import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Variastore } from './variastore';

describe('Variastore', () => {
  let component: Variastore;
  let fixture: ComponentFixture<Variastore>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Variastore]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Variastore);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
