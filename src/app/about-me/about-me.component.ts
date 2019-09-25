import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: string;
  weight: string;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: '2018.08 ~ 2019. 09', name: 'AppDynamics Ltd', weight: 'Associate Consultant', symbol: 'EMEA'},
  {position: '2017.07 ~ 2018. 08', name: 'Huawei Düsseldorf GmbH', weight: 'Digital Marketing Manager', symbol: 'Germany'},
  {position: '2010.07 ~ 2015. 03', name: 'National Taiwan University', weight: 'Senior Consultant', symbol: 'Taiwan'},
  {position: '2008.08 ~ 2010. 06', name: 'The church in Taipei', weight: 'Volunteer Website Administrator', symbol: 'Taiwan'}
];

const ELEMENT_DATA1: PeriodicElement[] = [
  {position: '2015.10 ~ 2018. 01', name: 'Techniches Universität München', weight: 'Research on Teaching and Learning (Expertise: Computer Education)', symbol: 'Germany'},
  {position: '2003.09 ~ 2007. 6', name: 'National Taiwan Normal University', weight: 'Civic Education and Leadership', symbol: 'Taiwan'}
];

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  dataSource1 = ELEMENT_DATA1;
  constructor() { }

  ngOnInit() {
  }

}
