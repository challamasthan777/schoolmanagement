import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-student-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-dashboard.component.html',
  styleUrl: './student-dashboard.component.css'
})
export class StudentDashboardComponent {
  windowScrolled = false;

  @ViewChild('attendanceChart') attendanceChartRef: ElementRef | null = null;

  studentInfo = {
    name: "Jessia Rose",
    gender: "Female",
    fatherName: "Fahim Rahman",
    motherName: "Jannatul Kazi",
    dateOfBirth: "07.08.2006",
    religion: "Islam",
    fatherOccupation: "Graphic Designer",
    email: "jessiarose@gmail.com",
    admissionDate: "05.01.2019",
    class: "2",
    section: "Pink",
    roll: "10005",
    address: "House #10, Road #6, Australia",
    phone: "+ 88 9856418"
  };

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


  attendanceData = {
    absent: 28.2,
    present: 65.8
  };

  currentDate = new Date(2024, 6, 1); // July 2024
  calendarDays: number[][] = [];
  viewMode: 'day' | 'week' | 'month' = 'month';

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
    // Add more notifications to demonstrate scrolling
    // ...
  ];

  ngOnInit() {
    this.generateCalendar();
  }

  ngAfterViewInit() {
    if (this.attendanceChartRef) {
      const ctx = this.attendanceChartRef.nativeElement.getContext('2d');
      new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: ['Absent', 'Present'],
          datasets: [{
            data: [this.attendanceData.absent, this.attendanceData.present],
            backgroundColor: ['#4169e1', '#ffa500'],
            borderWidth: 0
          }]
        },
        options: {
          cutout: '70%',
          plugins: {
            legend: {
              display: false
            }
          }
        }
      });
    }
  }

  
  generateCalendar() {
    const year = this.currentDate.getFullYear();
    const month = this.currentDate.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    this.calendarDays = [];
    let week: number[] = Array(firstDay).fill(0);

    for (let day = 1; day <= daysInMonth; day++) {
      week.push(day);
      if (week.length === 7) {
        this.calendarDays.push(week);
        week = [];
      }
    }

    if (week.length > 0) {
      while (week.length < 7) {
        week.push(0);
      }
      this.calendarDays.push(week);
    }
  }

  changeMonth(delta: number) {
    this.currentDate.setMonth(this.currentDate.getMonth() + delta);
    this.generateCalendar();
  }

  setViewMode(mode: 'day' | 'week' | 'month') {
    this.viewMode = mode;
  }

  get currentMonthYear(): string {
    return this.currentDate.toLocaleString('default', { month: 'long', year: 'numeric' });
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


