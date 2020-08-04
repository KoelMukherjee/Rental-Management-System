import { Component, OnInit } from '@angular/core';
import {DropdownDataService} from  '../services/dropdown-data.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  equipments: any =[];
  equipmentsLength: number = 0;
  subCategory: any = [];
  constructor(private dropdown : DropdownDataService, private router: Router) { }

  ngOnInit(): void {
    this.equipments.length = 0;
    this.equipments = this.dropdown.getEquipmentList();
    this.equipmentsLength = Object.keys(this.equipments[0]).length;
  }
  subCategories(category) {
    this.subCategory.length = 0;
    if(category.subcategories.length != 0){
      category.subcategories.map(item => {
        this.subCategory.push(item);
      });
      this.dropdown.setEquipmentList(this.subCategory);
     }
    this.router.navigate(['/subcategories/'], { queryParams: { key: category.name }});
   
  }
}
