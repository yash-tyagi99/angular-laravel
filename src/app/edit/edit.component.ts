import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../service/data.service';
import { Employee } from '../employee/employee.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id:any;
  employee=new Employee();
  data: any;
  constructor(
    private route:ActivatedRoute,
    private dataservice:DataService
  ) { }

  ngOnInit() {
    this.id=this.route.snapshot.params.id;
    this.getData();
  }
  
  getData()
  {
    this.dataservice.getOneEmployee(this.id).subscribe(res=>{
      this.data=res;
      this.employee=this.data;
    })
  };

  updateData()
  {
    this.dataservice.updateData(this.id,this.employee).subscribe(res=>{

    })
  }
  
}
