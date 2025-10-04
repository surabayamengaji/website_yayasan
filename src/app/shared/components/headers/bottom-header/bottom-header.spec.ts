import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomHeader } from './bottom-header';

describe('BottomHeader', () => {
  let component: BottomHeader;
  let fixture: ComponentFixture<BottomHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BottomHeader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottomHeader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
