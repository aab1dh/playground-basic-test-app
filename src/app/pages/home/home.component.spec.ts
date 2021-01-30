import { ApiService } from './../../services/api-service.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, tick, fakeAsync, getTestBed } from '@angular/core/testing';
import { MatTableModule } from '@angular/material/table';
import { By } from '@angular/platform-browser';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let de: DebugElement;
  let injector: TestBed;
  let service: ApiService;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [HttpClientTestingModule, MatTableModule],
      providers: [ApiService]
    })
      .compileComponents();
    injector = getTestBed();
    service = injector.get(ApiService);
    httpMock = injector.get(HttpTestingController);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    de = fixture.debugElement;
    component = fixture.componentInstance;
    fixture.detectChanges();
    service.getPatients();
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test the table ', async (done) => {


    fixture.detectChanges();
    fixture.whenStable().then(fakeAsync(() => {

      fixture.detectChanges();
      tick(1000)
      fixture.detectChanges();
      // expect(component.patientData).toBeTruthy();
      let tableRows = fixture.nativeElement.querySelectorAll('tr');
      expect(tableRows.length).toBe(0);

      // Header row
      let headerRow = tableRows[0];
      expect(headerRow.cells[0].innerHTML).toBe('Patient ID');
      expect(headerRow.cells[1].innerHTML).toBe('Gender');
      expect(headerRow.cells[2].innerHTML).toBe('Resource Type');

      // Data rows
      let row1 = tableRows[1];
      expect(row1.cells[0].innerHTML).toBe('1659476');
      expect(row1.cells[1].innerHTML).toBe('male');
      expect(row1.cells[2].innerHTML).toBe('Patient');



      // Test more rows here..

      done();
    }));
  });
});
