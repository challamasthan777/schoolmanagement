import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent {
  expenses = [
    { id: '#0021', type: 'Exam Fees', amount: 150.00, status: 'Paid', email: 'akkhorschool@gmail.com', date: '22/02/2019' },
    { id: '#0022', type: 'Semister Fees', amount: 350.00, status: 'Due', email: 'akkhorschool@gmail.com', date: '22/02/2019' },
    { id: '#0023', type: 'Exam Fees', amount: 150.00, status: 'Paid', email: 'akkhorschool@gmail.com', date: '22/02/2019' },
    { id: '#0024', type: 'Exam Fees', amount: 150.00, status: 'Due', email: 'akkhorschool@gmail.com', date: '22/02/2019' },
    { id: '#0025', type: 'Exam Fees', amount: 150.00, status: 'Paid', email: 'akkhorschool@gmail.com', date: '22/02/2019' },
    { id: '#0026', type: 'Semister Fees', amount: 350.00, status: 'Due', email: 'akkhorschool@gmail.com', date: '22/02/2019' },
    { id: '#0027', type: 'Exam Fees', amount: 150.00, status: 'Paid', email: 'akkhorschool@gmail.com', date: '22/02/2019' },
  ];
}
