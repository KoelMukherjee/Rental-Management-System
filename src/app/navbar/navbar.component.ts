import { Component, OnInit, Output } from '@angular/core';
import {DropdownDataService} from  '../services/dropdown-data.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  dropdownOptions: any;
  selectedCountry: any;
  selectedCountryName: any = null;
  showCountry: boolean = false;
  showBranch: boolean = false;
  category: any = [];

  constructor(private dropdown : DropdownDataService, private router: Router) { }

  ngOnInit(): void {
    this.dropdown.getDropdownData().subscribe(res =>  {
      console.log(res);
      this.dropdownOptions = res;
      console.log(this.dropdownOptions.data.locations);
      this.dropdownOptions = this.dropdownOptions.data.locations;
    });
   
  }
  showCountries() {
    this.showCountry = (this.showCountry == true) ? false : true;
  }
  showBranches(country) {
    if(this.selectedCountryName != null) {
      document.getElementById(this.selectedCountryName).style.color = "#447DBD";
    }
    this.selectedCountry = country;
    this.selectedCountryName = country.name;
    this.showBranch = true;
    document.getElementById(country.name).style.color = "red";
  }
  showCategory(branch) {
    this.category.length = 0;
    if(branch.categories.length != 0){
      branch.categories.map(item => {
        this.category.push(item);
      });
      this.dropdown.setEquipmentList(this.category);
     }
    this.showCountry = false;
    this.router.navigate(['categories'], { queryParams: {country: this.selectedCountryName , branch: branch.name}});
   
  }

}
