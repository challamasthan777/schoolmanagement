import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-all-students',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './all-students.component.html',
  styleUrl: './all-students.component.css'
})
export class AllStudentsComponent {
  students = [
    { roll: '#0021', photo: 'assets/student1.jpg', name: 'Mark Willy', gender: 'Male', class: '2', section: 'A', parents: 'Jack Sparrow', address: 'TA-107 Newyork', dateOfBirth: '02/05/2001', phone: '+ 123 9988568', email: 'kazifahim93@gmail.com' },
    { roll: '#0022', photo: 'assets/student2.jpg', name: 'Jessia Rose', gender: 'Female', class: '1', section: 'A', parents: 'Maria Jamans', address: '59 Australia, Sydney', dateOfBirth: '02/05/2001', phone: '+ 123 9988568', email: 'kazifahim93@gmail.com' },
    { roll: '#0022', photo: 'assets/student2.jpg', name: 'Jessia Rose', gender: 'Female', class: '1', section: 'A', parents: 'Maria Jamans', address: '59 Australia, Sydney', dateOfBirth: '02/05/2001', phone: '+ 123 9988568', email: 'kazifahim93@gmail.com' },
    { roll: '#0022', photo: 'assets/student2.jpg', name: 'Jessia Rose', gender: 'Female', class: '1', section: 'A', parents: 'Maria Jamans', address: '59 Australia, Sydney', dateOfBirth: '02/05/2001', phone: '+ 123 9988568', email: 'kazifahim93@gmail.com' },
    { roll: '#0022', photo: 'assets/student2.jpg', name: 'Jessia Rose', gender: 'Female', class: '1', section: 'A', parents: 'Maria Jamans', address: '59 Australia, Sydney', dateOfBirth: '02/05/2001', phone: '+ 123 9988568', email: 'kazifahim93@gmail.com' },
    { roll: '#0022', photo: 'assets/student2.jpg', name: 'Jessia Rose', gender: 'Female', class: '1', section: 'A', parents: 'Maria Jamans', address: '59 Australia, Sydney', dateOfBirth: '02/05/2001', phone: '+ 123 9988568', email: 'kazifahim93@gmail.com' },
    { roll: '#0022', photo: 'assets/student2.jpg', name: 'Jessia Rose', gender: 'Female', class: '1', section: 'A', parents: 'Maria Jamans', address: '59 Australia, Sydney', dateOfBirth: '02/05/2001', phone: '+ 123 9988568', email: 'kazifahim93@gmail.com' },
    { roll: '#0022', photo: 'assets/student2.jpg', name: 'Jessia Rose', gender: 'Female', class: '1', section: 'A', parents: 'Maria Jamans', address: '59 Australia, Sydney', dateOfBirth: '02/05/2001', phone: '+ 123 9988568', email: 'kazifahim93@gmail.com' },
    { roll: '#0022', photo: 'assets/student2.jpg', name: 'Jessia Rose', gender: 'Female', class: '1', section: 'A', parents: 'Maria Jamans', address: '59 Australia, Sydney', dateOfBirth: '02/05/2001', phone: '+ 123 9988568', email: 'kazifahim93@gmail.com' },

    // Add more student objects here...
  ];

  
}
