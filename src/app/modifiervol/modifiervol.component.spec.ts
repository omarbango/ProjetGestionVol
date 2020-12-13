import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifiervolComponent } from './modifiervol.component';

describe('ModifiervolComponent', () => {
  let component: ModifiervolComponent;
  let fixture: ComponentFixture<ModifiervolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifiervolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifiervolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
