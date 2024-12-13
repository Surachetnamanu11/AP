import { Route, Router } from '@angular/router';
import { DataapiService } from './../dataapi.service';
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  //ประกาศตัวแปรเพื่อรับค่าจากหน้า home.page.html
  dataMember:any={};
  txtidstu:any;
  txtname:any;
  txtnname:any;
  txtpag:any;
  txtphone:any;
  txtaddress:any;
  txtstatus:any;

  //ตัวแปรที่ส่งไปยัง api
  postidstu:any;
  postname:any;
  postnname:any;
  postage:any;
  postphone:any;
  postaddress:any;
  poststatus:any;
txtage: any;

  constructor(
    public dataapi:DataapiService,
    private route:Router
  ) {}
  //ฟังก์ชันเพิ่มข้อมูล

  addmember() {
    let data = {
      id_stu: this.txtidstu,
      name: this.txtname,
      nname: this.txtnname,
      age: this.txtage,
      phone: this.txtphone,
      address: this.txtaddress,
      status: this.txtstatus,
    }
    this.dataapi.addMember(data).subscribe({
      next: (res) => {
        console.log("ข้อมูลถูกเพิ่ม" ,res);
        this.route.navigateByUrl ('/show');
      },
      error: (err) => {
        console.log("ข้อมูลไม่ถูกเพิ่ม", err);
      }
    });

    this.clearForm();
  }
  //ฟังก์ชันสำหรับล้างข้อมูล
  clearForm(){
    this.txtidstu = '';
    this.txtname = '';
    this.txtnname = '';
    this.txtage = '';
    this.txtphone = '';
    this.txtaddress = '';
    this.txtstatus = '';
  }
showdata(){
    this.route.navigate(['/show']);
  }

}
