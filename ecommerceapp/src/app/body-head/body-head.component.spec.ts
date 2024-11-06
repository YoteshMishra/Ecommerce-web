import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyHeadComponent } from './body-head.component';

describe('BodyHeadComponent', () => {
  let component: BodyHeadComponent;
  let fixture: ComponentFixture<BodyHeadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BodyHeadComponent]
    });
    fixture = TestBed.createComponent(BodyHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
