import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { delay, of } from 'rxjs';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})

export class OrderComponent {

  orderForm!: FormGroup;
  showPopup = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.orderForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern(/^[^\.]+$/)]],
      address: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(/^\+?[0-9]{7,15}$/)]]
    });
  }

  blockDots(event: KeyboardEvent) {
    if (event.key === '.') {
      event.preventDefault();
    }
  }

  submitOrder() {
    if (this.orderForm.valid) {
      const orderData = this.orderForm.value;
      console.log('Отправляем заказ:', orderData);

      of(orderData)
        .pipe(delay(1000))
        .subscribe(() => {
          this.showPopup = true;
          this.orderForm.reset();
        });
    } else {
      this.orderForm.markAllAsTouched();
    }
  }

  closePopup() {
    this.showPopup = false;
  }

}
