import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-expenses',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './expenses.component.html',
  styleUrl: './expenses.component.css'
})
export class ExpensesComponent {
  students = [
    { id: '#0021', photo: 'assets/student1.jpg', name: 'Mark Willy',  expensetype: 'Salary', class: '2', section: 'A',   expense: 'class test', amount: '$5,00,000', status: 'paid', phone: '+ 123 9988568', email: 'kazifahim93@gmail.com' },
    { id: '#0022', photo: 'assets/student2.jpg', name: 'Jessia Rose', expensetype: 'Transport', class: '1', section: 'A', expense: 'class test', amount: '$5,00,000', status: 'paid', phone: '+ 123 9988568', email: 'kazifahim93@gmail.com' },
    { id: '#0022', photo: 'assets/student2.jpg', name: 'Jessia Rose', expensetype: 'Utilities', class: '1', section: 'A', expense: 'class test', amount: '$5,00,000', status: 'paid', phone: '+ 123 9988568', email: 'kazifahim93@gmail.com' },
    { id: '#0022', photo: 'assets/student2.jpg', name: 'Jessia Rose', expensetype: 'Salary', class: '1', section: 'A', expense: 'class test', amount: '$5,00,000', status: 'paid', phone: '+ 123 9988568', email: 'kazifahim93@gmail.com' },
    { id: '#0022', photo: 'assets/student2.jpg', name: 'Jessia Rose', expensetype: 'Transport', class: '1', section: 'A', expense: 'class test', amount: '$5,00,000', status: 'unpaid', phone: '+ 123 9988568', email: 'kazifahim93@gmail.com' },
    { id: '#0022', photo: 'assets/student2.jpg', name: 'Jessia Rose', expensetype: 'Utilities', class: '1', section: 'A', expense: 'class test', amount: '$5,00,000', status: 'unpaid', phone: '+ 123 9988568', email: 'kazifahim93@gmail.com' },
    { id: '#0022', photo: 'assets/student2.jpg', name: 'Jessia Rose', expensetype: 'Salary', class: '1', section: 'A', expense: 'class test', amount: '$5,00,000', status: 'paid', phone: '+ 123 9988568', email: 'kazifahim93@gmail.com' },
    { id: '#0022', photo: 'assets/student2.jpg', name: 'Jessia Rose', expensetype: 'Transport', class: '1', section: 'A', expense: 'class test', amount: '$5,00,000', status: 'paid', phone: '+ 123 9988568', email: 'kazifahim93@gmail.com' },
    { id: '#0022', photo: 'assets/student2.jpg', name: 'Jessia Rose', expensetype: 'Utilities', class: '1', section: 'A', expense: 'class test', amount: '$5,00,000', status: 'unpaid', phone: '+ 123 9988568', email: 'kazifahim93@gmail.com' },

    // Add more student objects here...
  ];
}
