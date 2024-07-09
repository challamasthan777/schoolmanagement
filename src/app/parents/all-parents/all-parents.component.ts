import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-all-parents',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './all-parents.component.html',
  styleUrl: './all-parents.component.css'
})
export class AllParentsComponent {
  students = [
    { id: '#0021', photo: 'assets/student1.jpg', name: 'Mark Willy',  gender: 'Male', class: '2', occupation: 'business', section: 'Jack Sparrow', address: 'TA-107 Newyork', dateOfBirth: '02/05/2001', phone: '+ 123 9988568', email: 'kazifahim93@gmail.com' },
    { id: '#0022', photo: 'assets/student2.jpg', name: 'Jessia Rose', gender: 'Female', class: '1', occupation: 'banker', section: 'Maria Jamans', address: '59 Australia, Sydney', dateOfBirth: '02/05/2001', phone: '+ 123 9988568', email: 'kazifahim93@gmail.com' },
    { id: '#0022', photo: 'assets/student2.jpg', name: 'Jessia Rose', gender: 'Female', class: '1', occupation: 'business', section: 'Maria Jamans', address: '59 Australia, Sydney', dateOfBirth: '02/05/2001', phone: '+ 123 9988568', email: 'kazifahim93@gmail.com' },
    { id: '#0022', photo: 'assets/student2.jpg', name: 'Jessia Rose', gender: 'Female', class: '1', occupation: 'business', section: 'Maria Jamans', address: '59 Australia, Sydney', dateOfBirth: '02/05/2001', phone: '+ 123 9988568', email: 'kazifahim93@gmail.com' },
    { id: '#0022', photo: 'assets/student2.jpg', name: 'Jessia Rose', gender: 'Female', class: '1', occupation: 'banker', section: 'Maria Jamans', address: '59 Australia, Sydney', dateOfBirth: '02/05/2001', phone: '+ 123 9988568', email: 'kazifahim93@gmail.com' },
    { id: '#0022', photo: 'assets/student2.jpg', name: 'Jessia Rose', gender: 'Female', class: '1', occupation: 'banker', section: 'Maria Jamans', address: '59 Australia, Sydney', dateOfBirth: '02/05/2001', phone: '+ 123 9988568', email: 'kazifahim93@gmail.com' },
    { id: '#0022', photo: 'assets/student2.jpg', name: 'Jessia Rose', gender: 'Female', class: '1', occupation: 'business', section: 'Maria Jamans', address: '59 Australia, Sydney', dateOfBirth: '02/05/2001', phone: '+ 123 9988568', email: 'kazifahim93@gmail.com' },
    { id: '#0022', photo: 'assets/student2.jpg', name: 'Jessia Rose', gender: 'Female', class: '1', occupation: 'business', section: 'Maria Jamans', address: '59 Australia, Sydney', dateOfBirth: '02/05/2001', phone: '+ 123 9988568', email: 'kazifahim93@gmail.com' },
    { id: '#0022', photo: 'assets/student2.jpg', name: 'Jessia Rose', gender: 'Female', class: '1', occupation: 'business', section: 'Maria Jamans', address: '59 Australia, Sydney', dateOfBirth: '02/05/2001', phone: '+ 123 9988568', email: 'kazifahim93@gmail.com' },

    // Add more student objects here...
  ];
}
