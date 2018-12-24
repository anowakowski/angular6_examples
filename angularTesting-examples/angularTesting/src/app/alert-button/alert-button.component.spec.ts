/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Observable, of } from 'rxjs';

import { AlertButtonComponent } from './alert-button.component';
import { MessageService } from '../message.service';

describe('AlertButtonComponent', () => {
  let component: AlertButtonComponent;
  let fixture: ComponentFixture<AlertButtonComponent>;
  let de: DebugElement;

  let serviceStub: any;

  beforeEach(async(() => {

    serviceStub = {
      getContent: () => of('you have been warned')
    };

    TestBed.configureTestingModule({
      declarations: [ AlertButtonComponent ],
      providers: [ {provide: MessageService, useValue: serviceStub} ]

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

  // it('should have a message with `warm`', () => {
  //   expect(component.content).toContain('warn');
  // });

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

  it('should have message content defined from an observable', () => {
    component.content.subscribe(content => {
      expect(content).toBeDefined();
      expect(content).toBe('you have been warned');
    });
  });

});
