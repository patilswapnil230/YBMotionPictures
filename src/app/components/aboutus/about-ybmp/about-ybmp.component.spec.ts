import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutYbmpComponent } from './about-ybmp.component';

describe('AboutYbmpComponent', () => {
  let component: AboutYbmpComponent;
  let fixture: ComponentFixture<AboutYbmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutYbmpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutYbmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
