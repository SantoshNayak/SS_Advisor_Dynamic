import { Component, OnInit } from '@angular/core';
import { NotifcationService } from 'src/app/services/notifcation.service';

@Component({
  selector: 'app-who-we-are',
  templateUrl: './who-we-are.component.html',
  styleUrls: ['./who-we-are.component.scss']
})
export class WhoWeAreComponent implements OnInit {

  constructor(private notificationServie:NotifcationService) { }

  allNotifcations=[]
  ngOnInit(): void {
    this.getNotifcations()
  }

  getNotifcations(){
    this.notificationServie.getNotifications().subscribe((data:any)=>{
      this.allNotifcations=data.data
    })
  }

}
