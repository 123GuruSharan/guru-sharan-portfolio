---
title: "Airport Lost & Found System"
description: "I developed a backend-driven system to manage lost and found items at airports using C++ and the Crow framework. The system handles efficient request processing and provides a structured way to track, manage, and retrieve lost items."
image: "../../assets/images/beauty-api.png"
projectUrl: "https://github.com/LugoDv/beauty-api"
technologies: ["C++", "Crow", "REST API"]
featured: true
publishedDate: 2025-01-10
order: 3
icon: "message"
---

# Booking Engine and Business Management (Spring Boot)

A robust RESTful API designed under corporate industry standards, focused on solving complex business logic for an appointment system and hierarchical user management.

## 🎯 The Challenge

The service sector requires infallible systems for time management. The challenge was to build a central core (Core Backend) that handled service catalogs, employee availability and appointment scheduling, with a critical business rule: **absolutely prevent scheduling conflicts**. Additionally, the system had to strictly differentiate permissions between Administrators, Employees and Clients.

## 💡 The Solution and Architecture

I opted for a **layered monolithic architecture** using the Spring ecosystem, ideal for enterprise applications with highly relational data models.

1. **Domain and Persistence Layer:** Modeling of a relational database (MySQL) mapped through Spring Data JPA and Hibernate, establishing complex relationships (OneToMany, ManyToMany) between Users, Services and Appointments.
2. **Security Layer (RBAC):** Implementation of Spring Security coupled with stateless JSON Web Tokens (JWT). Each request is intercepted and validated, ensuring that a Client only sees their appointments, while an Administrator has full control (CRUD) over the system.
3. **Presentation Layer (Controllers):** Standardized RESTful endpoints, with strict input data validation (Bean Validation) and a centralized exception handling system (Global Exception Handler) to return predictable and clean HTTP responses.

## ⚙️ Outstanding Technical Aspects

- **Java 17 & Spring Boot 3:** Leveraging the latest language and framework features for cleaner and more efficient code, reducing _boilerplate_ through **Lombok**.
- **Conflict Prevention Logic:** Service-level algorithms that query availability (slots) in real-time before confirming a booking transaction in the database.
- **Interactive Documentation:** Integration of **SpringDoc OpenAPI (Swagger UI)**. All endpoints, data models (DTOs) and authentication schemas are automatically documented, allowing the API to be tested directly from the browser.
- **Data Encryption:** Use of BCrypt for secure password hashing before persistence in the database.

## 📈 Results and Impact

- **Accelerated Frontend Integration:** Thanks to exhaustive Swagger documentation, any Frontend development team (React, Angular, mobile) can consume the API immediately without needing to read the source code.
- **Guaranteed Data Integrity:** DTO-level validations and database constraints ensure no corrupt information enters the system.
- **Scalable Foundation:** The modularized design by domains (Auth, Users, Services, Appointments) allows that, if the business grows, certain parts of the monolith can be easily extracted to independent microservices.
