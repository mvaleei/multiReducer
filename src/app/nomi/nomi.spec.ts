import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nomi } from './nomi';

describe('Nomi', () => {
  let component: Nomi;
  let fixture: ComponentFixture<Nomi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Nomi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nomi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
