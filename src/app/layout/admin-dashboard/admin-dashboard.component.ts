import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {
  windowScrolled = false;
  @ViewChild('attendanceChart') attendanceChartRef: ElementRef | null = null;

  stats = [
    { title: 'Students', value: '150000', icon: 'bi-people-fill' },
    { title: 'Teachers', value: '2250', icon: 'bi-person-video3' },
    { title: 'Parents', value: '5690', icon: 'bi-people' },
    { title: 'Earnings', value: '$193000', icon: 'bi-currency-dollar' }
  ];

  earnings = [
    { day: 'Mon', total: 30000, fees: 15000 },
    { day: 'Tue', total: 25000, fees: 10000 },
    { day: 'Wed', total: 40000, fees: 20000 },
    { day: 'Thu', total: 45000, fees: 25000 },
    { day: 'Fri', total: 55000, fees: 35000 },
    { day: 'Sat', total: 65000, fees: 45000 },
    { day: 'Sun', total: 75000, fees: 55000 }
  ];

  earningsPath1 = 'M0,200 L100,150 L200,50 L300,25 L400,75 L500,0 L600,50 L700,75 L700,200 Z';
  earningsPath2 = 'M0,200 L100,100 L200,175 L300,150 L400,25 L500,100 L600,175 L700,150 L700,200 Z';

  expenses = [
    { month: 'Jan 2019', amount: 15000 },
    { month: 'Feb 2019', amount: 10000 },
    { month: 'Mar 2019', amount: 8000 }
  ];

  students = [
    { type: 'Female Students', count: 45000, color: 'bg-primary' },
    { type: 'Male Students', count: 105000, color: 'bg-warning' }
  ];

  attendanceData = {
    absent: 28.2,
    present: 65.8
  };

  getMaxEarning(): number {
    return Math.max(...this.earnings.map(e => Math.max(e.total, e.fees)));
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
  getPercentage(value: number): number {
    return (value / this.getMaxEarning()) * 100;
  }

  currentMonth = 'July 2024';
  websiteTraffic = {
    uniqueVisitors: 2590,
    trafficSources: [
      { name: 'Direct', value: 12890, percentage: 50 },
      { name: 'Search', value: 7245, percentage: 27 },
      { name: 'Referrals', value: 4256, percentage: 8 },
      { name: 'Social', value: 500, percentage: 7 }
    ]
  };
  notices = [
    { date: '16 June, 2019', content: 'Great School manag mene esom text of the printing.', author: 'Jennyfar Lopez', time: '5 min ago' },
    { date: '16 June, 2019', content: 'Great School manag printing.', author: 'Jennyfar Lopez', time: '5 min ago' },
    { date: '16 June, 2019', content: 'Great School manag meneesom', author: 'Jennyfar Lopez', time: '5 min ago' }
  ];
  socialMedia = [
    { platform: 'facebook', followers: 30000, color: '#3b5998' },
    { platform: 'twitter', followers: 1110000, color: '#1da1f2' },
    { platform: 'google', followers: 19000, color: '#db4437' },
    { platform: 'linkedin', followers: 45000, color: '#0077b5' }
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
    // Add more notifications to demonstrate scrolling
    // ...
  ];

  currentDate = new Date(2024, 6, 1); // July 2024
  calendarDays: number[][] = [];
  viewMode: 'day' | 'week' | 'month' = 'month';

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