import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BallCanvasComponent } from './ball-canvas.component';

describe('BallCanvasComponent', () => {
  let component: BallCanvasComponent;
  let fixture: ComponentFixture<BallCanvasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BallCanvasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BallCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
