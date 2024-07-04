import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-teachers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './teachers.component.html',
  styleUrl: './teachers.component.css'
})
export class TeachersComponent {
  windowScrolled = true;

  stats = [
    { icon: 'fas fa-users', bgColor: 'bg-light-purple', value: '35000', label: 'Total Students' },
    { icon: 'fas fa-clipboard-list', bgColor: 'bg-light-blue', value: '19050', label: 'Total Exams' },
    { icon: 'fas fa-graduation-cap', bgColor: 'bg-light-yellow', value: '23890', label: 'Graduate Studies' },
    { icon: 'fas fa-dollar-sign', bgColor: 'bg-light-red', value: '$2102050', label: 'Total Income' }
  ];

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

  ngOnInit() {
    this.createChart();
  }

  createChart() {
    const ctx = document.getElementById('studentsChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Female Students', 'Male Students'],
        datasets: [{
          data: [10500, 24500],
          backgroundColor: ['#007bff', '#ffc107']
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false
          }
        }
      }
    });
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
