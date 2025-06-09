import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularItensComponent } from './popular-itens.component';

describe('PopularItensComponent', () => {
  let component: PopularItensComponent;
  let fixture: ComponentFixture<PopularItensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PopularItensComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopularItensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
