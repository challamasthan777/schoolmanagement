import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-parents-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './parents-dashboard.component.html',
  styleUrl: './parents-dashboard.component.css'
})
export class ParentsDashboardComponent implements OnInit {
  windowScrolled = true;

  statistics = [
    { title: 'Due Fees', value: '$4503', icon: 'bi bi-cash', bgColor: 'bg-light-danger', iconColor: 'red' },
    { title: 'Notifications', value: '12', icon: 'bi bi-clipboard-check', bgColor: 'bg-light-primary', iconColor: 'purple' },
    { title: 'Result', value: '16', icon: 'bi bi-mortarboard', bgColor: 'bg-light-success', iconColor: 'orange' },
    { title: 'Expenses', value: '$193000', icon: 'bi bi-cash-stack', bgColor: 'bg-light-info', iconColor: 'blue' }
  ];

  kids = [
    { name: 'Jessia Rose', gender: 'Female', class: '2', roll: '#2225', section: 'A', admissionId: '#0021', admissionDate: '07.08.2017', avatar: 'assets/img/figure/student2.png' },
    { name: 'Jack Steve', gender: 'Male', class: '3', roll: '#2205', section: 'A', admissionId: '#0045', admissionDate: '07.08.2017', avatar: 'assets/img/figure/student3.png' }
  ];

  expenses = [
    { id: '#0021', type: 'Exam Fees', amount: 150.00, status: 'Paid', email: 'akkhorschool@gmail.com', date: '22/02/2019' },
    { id: '#0022', type: 'Semister Fees', amount: 350.00, status: 'Due', email: 'akkhorschool@gmail.com', date: '22/02/2019' },
    { id: '#0023', type: 'Exam Fees', amount: 150.00, status: 'Paid', email: 'akkhorschool@gmail.com', date: '22/02/2019' },
    { id: '#0024', type: 'Exam Fees', amount: 150.00, status: 'Due', email: 'akkhorschool@gmail.com', date: '22/02/2019' },
    { id: '#0025', type: 'Exam Fees', amount: 150.00, status: 'Paid', email: 'akkhorschool@gmail.com', date: '22/02/2019' },
    { id: '#0026', type: 'Semister Fees', amount: 350.00, status: 'Due', email: 'akkhorschool@gmail.com', date: '22/02/2019' },
    { id: '#0027', type: 'Exam Fees', amount: 150.00, status: 'Paid', email: 'akkhorschool@gmail.com', date: '22/02/2019' },
  ];

  examResults = [
    { id: "#0021", name: "Class Test", subject: "English", grade: "A", percent: "99.00 > 100", date: "22/02/2019" },
    { id: "#0022", name: "Class Test", subject: "English", grade: "A", percent: "99.00 > 100", date: "22/02/2019" },
    { id: "#0023", name: "Class Test", subject: "Chemistry", grade: "A", percent: "99.00 > 100", date: "22/02/2019" },
    { id: "#0024", name: "Class Test", subject: "English", grade: "A", percent: "99.00 > 100", date: "22/02/2019" },
    { id: "#0025", name: "Class Test", subject: "Chemistry", grade: "A", percent: "99.00 > 100", date: "22/02/2019" },
    { id: "#0025", name: "Class Test", subject: "Chemistry", grade: "D", percent: "70.00 > 100", date: "22/02/2019" },
    { id: "#0025", name: "Class Test", subject: "English", grade: "C", percent: "80.00 > 100", date: "22/02/2019" },
    { id: "#0025", name: "Class Test", subject: "English", grade: "B", percent: "99.00 > 100", date: "22/02/2019" },
    { id: "#0025", name: "First Semester", subject: "English", grade: "A", percent: "99.00 > 100", date: "22/02/2019" },
  ];


  notifications = [
    {
      date: '16 June, 2019',
      message: 'Great School manag mene esom tus eleifend lectus sed maximus mi faucibusnting.',
      author: 'Jennyfar Lopez',
      time: '5 min ago',
      color: '#40e0d0'
    },
    {
      date: '16 June, 2019',
      message: 'Great School manag printing.',
      author: 'Jennyfar Lopez',
      time: '5 min ago',
      color: '#ffd700'
    },
    {
      date: '16 June, 2019',
      message: 'Another notification example.',
      author: 'John Doe',
      time: '10 min ago',
      color: '#ff69b4'
    },
    {
      date: '16 June, 2019',
      message: 'Great School manag mene esom tus eleifend lectus sed maximus mi faucibusnting.',
      author: 'Jennyfar Lopez',
      time: '5 min ago',
      color: '#40e0d0'
    },
    {
      date: '16 June, 2019',
      message: 'Great School manag printing.',
      author: 'Jennyfar Lopez',
      time: '5 min ago',
      color: '#ffd700'
    },
    {
      date: '16 June, 2019',
      message: 'Another notification example.',
      author: 'John Doe',
      time: '10 min ago',
      color: '#ff69b4'
    },
    // Add more notifications to demonstrate scrolling
    // ...
  ];

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) {
      this.windowScrolled = true;
    } else if (this.windowScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {
      this.windowScrolled = false;
    }
  }

  scrollToTop() {
    (function smoothscroll() {
      var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
        window.requestAnimationFrame(smoothscroll);
        window.scrollTo(0, currentScroll - (currentScroll / 1));
      }
    })();
  }
}
