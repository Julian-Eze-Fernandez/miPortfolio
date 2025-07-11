import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  emailSent = false;
  emailError = false;
  formInvalidAttempt = false;

  sendEmail(form: NgForm) {
    if (!form.valid) {
      this.formInvalidAttempt = true;

      setTimeout(() => {
        this.formInvalidAttempt = false;
      }, 3000);
      return;
    }

    this.formInvalidAttempt = false;

    emailjs
      .send('service_wqw48rv', 'template_zvqfkr8', form.value, 'ewqVkhgT7BOJntbck')
      .then(() => {
        this.emailSent = true;
        this.emailError = false;
        form.resetForm();

        setTimeout(() => {
          this.emailSent = false;
        }, 3000);
      })
      .catch((error) => {
        console.error('Error al enviar el correo:', error);
        this.emailSent = false;
        this.emailError = true;

        setTimeout(() => {
          this.emailError = false;
        }, 3000);
      });
  }
}
