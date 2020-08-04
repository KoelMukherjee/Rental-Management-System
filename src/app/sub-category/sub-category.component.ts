import { Component, OnInit } from '@angular/core';
import {DropdownDataService} from  '../services/dropdown-data.service'
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.scss']
})
export class SubCategoryComponent implements OnInit {
  subCategoryEquipments: any;
  catType: any;
  constructor(private dropdown : DropdownDataService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.subCategoryEquipments = this.dropdown.getEquipmentList();
    this.activatedRoute.queryParams.subscribe(params => {
    this.catType = params['key'];
});
  }

}
