import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-details',
  standalone: true,
  imports: [],
  templateUrl: './parent-details.component.html',
  styleUrl: './parent-details.component.css'
})
export class ParentDetailsComponent {
  profile = {
    name: 'Jessia Rose',
    description: 'Aliquam erat volutpat. Curabiene natis massa sedde lacu stiquen sodale word moun taiery.Aliquam erat volutpaturabiene natis massa sedde sodale word moun taiery.',
    gender: 'Female',
    fatherName: 'Steve Jones',
    motherName: 'Naomi Rose',
    dateOfBirth: '07.08.2016',
    religion: 'Islam',
    fatherOccupation: 'Graphic Designer',
    email: 'jessiarose@gmail.com',
    admissionDate: '07.08.2019',
    class: '2',
    section: 'Pink',
    roll: '10005',
    address: 'House #10, Road #6, Australia',
    phone: '+ 88 98568888418'
  };
}
