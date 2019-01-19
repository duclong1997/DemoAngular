import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InforHeroComponent } from './infor-hero.component';

describe('InforHeroComponent', () => {
  let component: InforHeroComponent;
  let fixture: ComponentFixture<InforHeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InforHeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InforHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
