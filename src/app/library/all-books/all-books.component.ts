import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-all-books',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './all-books.component.html',
  styleUrl: './all-books.component.css'
})
export class AllBooksComponent {
  allBooks = [
    { id: '#0021', bookname: 'English Grammar', subject: 'English ', writter: 'David Morgan', class: '2', published: '2019', parents: 'Jack Sparrow', address: 'TA-107 Newyork', creatingdate: '02/05/2001', phone: '+ 123 9988568', email: 'kazifahim93@gmail.com' },
    { id: '#0022', bookname: 'English Grammar', subject: 'English', writter: 'David Morgan', class: '1', published: '2019', parents: 'Maria Jamans', address: '59 Australia, Sydney', creatingdate: '02/05/2001', phone: '+ 123 9988568', email: 'kazifahim93@gmail.com' },
    { id: '#0022', bookname: 'English Grammar', subject: 'English', writter: 'David Morgan', class: '1', published: '2019', parents: 'Maria Jamans', address: '59 Australia, Sydney', creatingdate: '02/05/2001', phone: '+ 123 9988568', email: 'kazifahim93@gmail.com' },
    { id: '#0022', bookname: 'English Grammar', subject: 'English', writter: 'John Robert', class: '1', published: '2019', parents: 'Maria Jamans', address: '59 Australia, Sydney', creatingdate: '02/05/2001', phone: '+ 123 9988568', email: 'kazifahim93@gmail.com' },
    { id: '#0022', bookname: 'English Grammar', subject: 'English', writter: 'David Morgan', class: '1', published: '2019', parents: 'Maria Jamans', address: '59 Australia, Sydney', creatingdate: '02/05/2001', phone: '+ 123 9988568', email: 'kazifahim93@gmail.com' },
    { id: '#0022', bookname: 'English Expert', subject: 'Maths', writter: 'John Robert', class: '1', published: '2019', parents: 'Maria Jamans', address: '59 Australia, Sydney', creatingdate: '02/05/2001', phone: '+ 123 9988568', email: 'kazifahim93@gmail.com' },
    { id: '#0022', bookname: 'English Grammar', subject: 'English', writter: 'David Morgan', class: '1', published: '2019', parents: 'Maria Jamans', address: '59 Australia, Sydney', creatingdate: '02/05/2001', phone: '+ 123 9988568', email: 'kazifahim93@gmail.com' },
    { id: '#0022', bookname: 'English Grammar', subject: 'Maths', writter: 'John Robert', class: '1', published: '2019', parents: 'Maria Jamans', address: '59 Australia, Sydney', creatingdate: '02/05/2001', phone: '+ 123 9988568', email: 'kazifahim93@gmail.com' },
    { id: '#0022', bookname: 'English Grammar', subject: 'Maths', writter: 'John Robert', class: '1', published: '2019', parents: 'Maria Jamans', address: '59 Australia, Sydney', creatingdate: '02/05/2001', phone: '+ 123 9988568', email: 'kazifahim93@gmail.com' },

    // Add more student objects here...
  ];
}
