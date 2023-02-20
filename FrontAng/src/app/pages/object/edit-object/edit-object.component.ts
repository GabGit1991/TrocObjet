import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Object } from 'src/app/models/object';
import { objectService } from 'src/app/models/object.service';

@Component({
  selector: 'app-edit-object',
  templateUrl: './edit-object.component.html',
  styleUrls: ['./edit-object.component.scss']
})
export class EditObjectComponent implements OnInit{
  constructor(private objectService:objectService, private activatedRoute: ActivatedRoute,
    private router:Router){
      
    }
  
    // object:Object;

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
