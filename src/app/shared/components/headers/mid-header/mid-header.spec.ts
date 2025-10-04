import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MidHeader } from './mid-header';

describe('MidHeader', () => {
  let component: MidHeader;
  let fixture: ComponentFixture<MidHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MidHeader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MidHeader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
