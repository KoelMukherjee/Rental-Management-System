import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient }from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DropdownDataService {
  equipment;
  private _JSON = "assets/dropdownData.json";

  constructor(private http: HttpClient) {}
  getDropdownData() {
    return this.http.get(this._JSON);
  }
  setEquipmentList(category) {
    this.equipment = category;
    console.log(this.equipment);
  }
  getEquipmentList() {
    console.log(this.equipment);
    return this.equipment;
  }
}
