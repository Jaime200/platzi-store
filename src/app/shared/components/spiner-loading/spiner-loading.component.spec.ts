import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinerLoadingComponent } from './spiner-loading.component';

describe('SpinerLoadingComponent', () => {
  let component: SpinerLoadingComponent;
  let fixture: ComponentFixture<SpinerLoadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpinerLoadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinerLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
