import { ApiService } from './../../services/api-service.service';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { map, take, tap } from 'rxjs/operators';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  patientData: MatTableDataSource<any>;
  tableColumns: string[] = ['id', 'gender', 'resourceType'];
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.apiService.getPatients().pipe(tap(console.log), take(1), map((data: any) => data.entry.map((entry: any) => entry.resource))).pipe(tap(console.log)).subscribe((data: any) => this.patientData = new MatTableDataSource(data))
    }, 0);

  }

}
