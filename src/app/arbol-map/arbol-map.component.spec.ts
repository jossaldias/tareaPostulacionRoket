import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArbolMapComponent } from './arbol-map.component';

describe('ArbolMapComponent', () => {
  let component: ArbolMapComponent;
  let fixture: ComponentFixture<ArbolMapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArbolMapComponent]
    });
    fixture = TestBed.createComponent(ArbolMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
