import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-student-promotion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-promotion.component.html',
  styleUrl: './student-promotion.component.css'
})
export class StudentPromotionComponent {
  promotionForm: FormGroup;
   items = ['Please Select *', 'Play', 'Nursery', 'One', 'Two'];
  selectedItem = 'Please Select *';
  isOpen = false;
  openDropdownId: string = ''; // Track the ID of the currently open dropdown
  
  constructor(private fb: FormBuilder) {
    this.promotionForm = this.fb.group({
      currentSession: ['2017-2018'],
      promoteSession: ['2017-2018'],
      promotionFromClass: [''],
      promotionToClass: ['']
    });
  }

  onSubmit() {
    if (this.promotionForm.valid) {
      console.log(this.promotionForm.value);
      // Handle form submission
    }
  }

  onReset() {
    this.promotionForm.reset({
      currentSession: '2017-2018',
      promoteSession: '2017-2018',
      promotionFromClass: '',
      promotionToClass: ''
    });
  }

 

  toggleDropdown(dropdownId: string) {
    if (this.openDropdownId === dropdownId) {
      this.openDropdownId = ''; // Close the dropdown if it's already open
    } else {
      this.openDropdownId = dropdownId; // Open the clicked dropdown
    }
  }

  isDropdownOpen(dropdownId: string): boolean {
    return this.openDropdownId === dropdownId;
  }

  selectItem(item: string) {
    this.selectedItem = item;
    this.isOpen = false;
  }
}
