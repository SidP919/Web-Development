import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowToastComponentComponent } from './show-toast-component.component';

describe('ShowToastComponentComponent', () => {
  let component: ShowToastComponentComponent;
  let fixture: ComponentFixture<ShowToastComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowToastComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowToastComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
