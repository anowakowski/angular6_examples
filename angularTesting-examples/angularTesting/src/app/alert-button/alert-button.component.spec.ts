/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AlertButtonComponent } from './alert-button.component';

describe('AlertButtonComponent', () => {
  let component: AlertButtonComponent;
  let fixture: ComponentFixture<AlertButtonComponent>;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertButtonComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a message with `warm`', () => {
    expect(component.content).toContain('warn');
  });

  it('should have severity grater than 2', () => {
    expect(component.severity).toBeGreaterThan(2);
  });

  it('should have an H1 tag of `Alert button`', () => {
    expect(de.query(By.css('h1')).nativeElement.innerText).toBe('Alert button');
  });
  it('should have an H1 tag of `Alert button test other way`', () => {
    const compiled = de.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Alert button');
  });

  it('should toggle the message boolean', () => {
    expect(component.hidenConent).toBeTruthy();
    component.toggle();
    expect(component.hidenConent).toBeFalsy();
  });

});
