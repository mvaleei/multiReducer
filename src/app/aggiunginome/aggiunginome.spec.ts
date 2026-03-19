import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aggiunginome } from './aggiunginome';

describe('Aggiunginome', () => {
  let component: Aggiunginome;
  let fixture: ComponentFixture<Aggiunginome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Aggiunginome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aggiunginome);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
