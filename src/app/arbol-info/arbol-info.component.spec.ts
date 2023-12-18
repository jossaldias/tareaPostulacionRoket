import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArbolInfoComponent } from './arbol-info.component';

describe('ArbolInfoComponent', () => {
  let component: ArbolInfoComponent;
  let fixture: ComponentFixture<ArbolInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArbolInfoComponent]
    });
    fixture = TestBed.createComponent(ArbolInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
