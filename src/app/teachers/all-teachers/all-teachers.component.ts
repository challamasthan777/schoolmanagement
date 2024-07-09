import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-all-teachers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './all-teachers.component.html',
  styleUrl: './all-teachers.component.css'
})
export class AllTeachersComponent {
  students = [
    { id: '#0021', photo: 'assets/student1.jpg', name: 'Mark Willy',  gender: 'Male', class: '2', subject: 'A', section: 'Jack Sparrow', address: 'TA-107 Newyork', dateOfBirth: '02/05/2001', phone: '+ 123 9988568', email: 'kazifahim93@gmail.com' },
    { id: '#0022', photo: 'assets/student2.jpg', name: 'Jessia Rose', gender: 'Female', class: '1', subject: 'A', section: 'Maria Jamans', address: '59 Australia, Sydney', dateOfBirth: '02/05/2001', phone: '+ 123 9988568', email: 'kazifahim93@gmail.com' },
    { id: '#0022', photo: 'assets/student2.jpg', name: 'Jessia Rose', gender: 'Female', class: '1', subject: 'A', section: 'Maria Jamans', address: '59 Australia, Sydney', dateOfBirth: '02/05/2001', phone: '+ 123 9988568', email: 'kazifahim93@gmail.com' },
    { id: '#0022', photo: 'assets/student2.jpg', name: 'Jessia Rose', gender: 'Female', class: '1', subject: 'A', section: 'Maria Jamans', address: '59 Australia, Sydney', dateOfBirth: '02/05/2001', phone: '+ 123 9988568', email: 'kazifahim93@gmail.com' },
    { id: '#0022', photo: 'assets/student2.jpg', name: 'Jessia Rose', gender: 'Female', class: '1', subject: 'A', section: 'Maria Jamans', address: '59 Australia, Sydney', dateOfBirth: '02/05/2001', phone: '+ 123 9988568', email: 'kazifahim93@gmail.com' },
    { id: '#0022', photo: 'assets/student2.jpg', name: 'Jessia Rose', gender: 'Female', class: '1', subject: 'A', section: 'Maria Jamans', address: '59 Australia, Sydney', dateOfBirth: '02/05/2001', phone: '+ 123 9988568', email: 'kazifahim93@gmail.com' },
    { id: '#0022', photo: 'assets/student2.jpg', name: 'Jessia Rose', gender: 'Female', class: '1', subject: 'A', section: 'Maria Jamans', address: '59 Australia, Sydney', dateOfBirth: '02/05/2001', phone: '+ 123 9988568', email: 'kazifahim93@gmail.com' },
    { id: '#0022', photo: 'assets/student2.jpg', name: 'Jessia Rose', gender: 'Female', class: '1', subject: 'A', section: 'Maria Jamans', address: '59 Australia, Sydney', dateOfBirth: '02/05/2001', phone: '+ 123 9988568', email: 'kazifahim93@gmail.com' },
    { id: '#0022', photo: 'assets/student2.jpg', name: 'Jessia Rose', gender: 'Female', class: '1', subject: 'A', section: 'Maria Jamans', address: '59 Australia, Sydney', dateOfBirth: '02/05/2001', phone: '+ 123 9988568', email: 'kazifahim93@gmail.com' },

    // Add more student objects here...
  ];
}
