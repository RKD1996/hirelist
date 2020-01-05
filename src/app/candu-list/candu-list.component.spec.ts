import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanduListComponent } from './candu-list.component';

describe('CanduListComponent', () => {
  let component: CanduListComponent;
  let fixture: ComponentFixture<CanduListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanduListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanduListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
