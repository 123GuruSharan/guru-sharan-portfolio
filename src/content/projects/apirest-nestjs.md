---
title: "Bookstore Web Application"
description: "I built an interactive bookstore web application with advanced search, filtering, and rating features. The platform focuses on clean UI/UX design and responsiveness, allowing users to easily browse, explore, and discover books in an intuitive way."
image: "../../assets/images/nestjs.png"
projectUrl: "https://github.com/LugoDv/apirest-nestj-auth-roles"
technologies: ["HTML", "CSS", "JavaScript"]
featured: true
publishedDate: 2026-02-20
order: 2
icon: "code"
---

# Scalable Backend Architecture and Automated Deployment (CI/CD)

A RESTful enterprise API built from scratch with the Node.js ecosystem, designed not only to securely manage data, but to demonstrate complete mastery of modern DevOps practices and Cloud architectures.

## 🎯 The Challenge

The main objective of this project was to build a solid backend foundation that could serve as a template for future scalable applications. The system needed strict typing, an impenetrable security layer through user roles, and most importantly: **completely eliminate manual deployment work** by taking the application to the cloud in an automated and frictionless way.

## 💡 The Solution and Architecture

To achieve a robust and production-ready environment, I divided the project into two key phases: software development and infrastructure engineering.

1. **Backend Development (NestJS):** I used the NestJS framework for its native dependency injection architecture and modularity. I implemented a token-based authentication system (JWT) and built custom Guards to restrict access to endpoints based on user role (ADMIN vs USER).
2. **Containerization (Docker):** I isolated the application and its database (PostgreSQL) using `Dockerfile` and `docker-compose.yml`. This ensures the project works identically on any machine or server.
3. **CI/CD Pipeline and Cloud (AWS):** I designed a workflow in GitHub Actions that, upon each new `push` to the main branch, automatically builds the container image and deploys it to an Amazon EC2 instance.

## ⚙️ Outstanding Technical Aspects

- **TypeScript & TypeORM:** 100% typed code, using TypeORM for relational data persistence, ensuring safe queries and structured migrations.
- **Security (AuthGuard & RolesGuard):** Perimeter protection of routes through custom decorators (`@Roles()`), validating the JWT signature on each request.
- **Continuous Integration (CI/CD):** Creation of the `main.yml` file in GitHub Actions to orchestrate automatic build and deployment to AWS, minimizing the risk of human errors on the server.
- **Infrastructure as Code (IaC):** The entire runtime environment is documented and versioned through Docker, allowing the entire architecture to be deployed in minutes.

## 📈 Results and Impact

- **Frictionless Deployments:** The team (or developer) can focus 100% on writing code; upon merging, the platform updates itself in production in a matter of minutes.
- **Enterprise Architecture:** By following SOLID principles and NestJS's modular structure, the codebase is ready to scale, allowing new modules and microservices to be added without breaking existing functionality.
- **Comprehensive Documentation:** A detailed technical guide (`CI-CD-GUIDE.md`) was created that serves as an operational manual for any developer joining the project, standardizing the authentication and deployment process.
