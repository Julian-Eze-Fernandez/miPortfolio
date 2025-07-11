import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  selectedProject: any = null;
  selectedImageIndex: number = 0;

  projects = [
    {
      title: 'Lucybell',
      description: 'E-commerce de bijouterie',
      images: [
        'assets/images/lucybell.jpeg',
        'assets/images/lucybell2.jpeg',
        'assets/images/lucybell3.jpeg'
      ],
      technologies: ['cSharp', 'net', 'efCore', 'html5' , 'css', 'angular', 'tailwind'],
      link: 'https://lucybell-deploy.vercel.app/',
      linkGit: 'https://github.com/Julian-Eze-Fernandez/LucyBell',
      moreInfo: 'Desarrollé una aplicación web de e-commerce responsiva utilizando Angular y Tailwind CSS, con un diseño optimizado para dispositivos móviles. Implementé un backend en ASP.NET Core con Entity Framework y SQL Server, creando una API RESTful segura para la gestión de productos, usuarios y ventas. La app incluye funcionalidades CRUD completas, autenticación con ASP.NET Identity, carruseles interactivos con Swiper.js y un panel de administración para el control de inventario y pedidos. Se aplicaron buenas prácticas de UX/UI y la solución fue entregada con documentación para su implementación local.'
    },
    {
      title: 'Portfolio',
      description: 'Portfolio personal',
      images: [
        'assets/images/portfolio.jpg',
        'assets/images/portfolio2.jpg'
      ],
      technologies: ['html5', 'css', 'angular', 'tailwind'],
      link: 'https://github.com/Julian-Eze-Fernandez/miPortfolio',
      linkGit: 'https://github.com/Julian-Eze-Fernandez/miPortfolio',
      moreInfo: 'Porftolio personal responsivo realizado con Angular y Tailwind. Para el formulario de contacto se utilizo Emailjs que permite hacer uso de mensajeria.'
    },
  ];

  openModal(project: any) {
    this.selectedProject = project;
    this.selectedImageIndex = 0;
  }

  closeModal() {
    this.selectedProject = null;
  }

  nextImage() {
    if (this.selectedImageIndex < this.selectedProject.images.length - 1) {
      this.selectedImageIndex++;
    }
  }

  prevImage() {
    if (this.selectedImageIndex > 0) {
      this.selectedImageIndex--;
    }
  }
}
