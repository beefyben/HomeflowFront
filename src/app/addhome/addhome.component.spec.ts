import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddhomeComponent } from './addhome.component';

describe('AddhomeComponent', () => {
  let component: AddhomeComponent;
  let fixture: ComponentFixture<AddhomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddhomeComponent]
    });
    fixture = TestBed.createComponent(AddhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
