import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinstonComponent } from './winston.component';

describe('WinstonComponent', () => {
  let component: WinstonComponent;
  let fixture: ComponentFixture<WinstonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WinstonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WinstonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
