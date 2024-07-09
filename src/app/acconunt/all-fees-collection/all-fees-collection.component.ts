import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-all-fees-collection',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './all-fees-collection.component.html',
  styleUrl: './all-fees-collection.component.css'
})
export class AllFeesCollectionComponent {
  students = [
    { id: '#0021', photo: 'assets/student1.jpg', name: 'Mark Willy',  gender: 'Male', class: '2', section: 'A',   expense: 'class test', amount: '$5,00,000', status: 'paid', phone: '+ 123 9988568', email: 'kazifahim93@gmail.com' },
    { id: '#0022', photo: 'assets/student2.jpg', name: 'Jessia Rose', gender: 'Female', class: '1', section: 'A', expense: 'class test', amount: '$5,00,000', status: 'paid', phone: '+ 123 9988568', email: 'kazifahim93@gmail.com' },
    { id: '#0022', photo: 'assets/student2.jpg', name: 'Jessia Rose', gender: 'Female', class: '1', section: 'A', expense: 'class test', amount: '$5,00,000', status: 'paid', phone: '+ 123 9988568', email: 'kazifahim93@gmail.com' },
    { id: '#0022', photo: 'assets/student2.jpg', name: 'Jessia Rose', gender: 'Female', class: '1', section: 'A', expense: 'class test', amount: '$5,00,000', status: 'paid', phone: '+ 123 9988568', email: 'kazifahim93@gmail.com' },
    { id: '#0022', photo: 'assets/student2.jpg', name: 'Jessia Rose', gender: 'Female', class: '1', section: 'A', expense: 'class test', amount: '$5,00,000', status: 'unpaid', phone: '+ 123 9988568', email: 'kazifahim93@gmail.com' },
    { id: '#0022', photo: 'assets/student2.jpg', name: 'Jessia Rose', gender: 'Female', class: '1', section: 'A', expense: 'class test', amount: '$5,00,000', status: 'unpaid', phone: '+ 123 9988568', email: 'kazifahim93@gmail.com' },
    { id: '#0022', photo: 'assets/student2.jpg', name: 'Jessia Rose', gender: 'Female', class: '1', section: 'A', expense: 'class test', amount: '$5,00,000', status: 'paid', phone: '+ 123 9988568', email: 'kazifahim93@gmail.com' },
    { id: '#0022', photo: 'assets/student2.jpg', name: 'Jessia Rose', gender: 'Female', class: '1', section: 'A', expense: 'class test', amount: '$5,00,000', status: 'paid', phone: '+ 123 9988568', email: 'kazifahim93@gmail.com' },
    { id: '#0022', photo: 'assets/student2.jpg', name: 'Jessia Rose', gender: 'Female', class: '1', section: 'A', expense: 'class test', amount: '$5,00,000', status: 'unpaid', phone: '+ 123 9988568', email: 'kazifahim93@gmail.com' },

    // Add more student objects here...
  ];

}
