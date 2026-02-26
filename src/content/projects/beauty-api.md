---
title: "Beauty API"
description: "Desarrollo de un backend monolítico en Java 17 para la gestión integral de un salón de belleza. Implementa un motor de reservas, seguridad avanzada con Spring Security (JWT/RBAC) y documentación interactiva de endpoints."
image: "../../assets/images/beauty-api.png"
projectUrl: "https://github.com/LugoDv/beauty-api"
technologies: ["Java 17", "Spring Boot", "MySQL", "JWT", "Swagger"]
featured: true
publishedDate: 2025-01-10
order: 3
icon: "message"
---

# Motor de Reservas y Gestión Empresarial (Spring Boot)

Una API RESTful robusta diseñada bajo los estándares de la industria corporativa, enfocada en resolver la lógica de negocio compleja de un sistema de citas y la gestión jerárquica de usuarios.

## 🎯 El Reto

El sector de servicios requiere sistemas infalibles para la gestión del tiempo. El desafío era construir un núcleo central (Core Backend) que manejara catálogos de servicios, disponibilidad de empleados y programación de citas, con una regla de negocio crítica: **prevenir absolutamente los conflictos de horarios**. Además, el sistema debía diferenciar estrictamente los permisos entre Administradores, Empleados y Clientes.

## 💡 La Solución y Arquitectura

Opté por una **arquitectura monolítica en capas** utilizando el ecosistema Spring, ideal para aplicaciones empresariales con modelos de datos altamente relacionales.

1. **Capa de Dominio y Persistencia:** Modelado de una base de datos relacional (MySQL) mapeada a través de Spring Data JPA e Hibernate, estableciendo relaciones complejas (OneToMany, ManyToMany) entre Usuarios, Servicios y Citas.
2. **Capa de Seguridad (RBAC):** Implementación de Spring Security acoplado a JSON Web Tokens (JWT) sin estado. Cada petición es interceptada y validada, asegurando que un Cliente solo vea sus citas, mientras un Administrador tiene control total (CRUD) sobre el sistema.
3. **Capa de Presentación (Controladores):** Endpoints RESTful estandarizados, con validación de datos de entrada estricta (Bean Validation) y un sistema centralizado de manejo de excepciones (Global Exception Handler) para devolver respuestas HTTP predecibles y limpias.

## ⚙️ Aspectos Técnicos Destacados

- **Java 17 & Spring Boot 3:** Aprovechamiento de las últimas características del lenguaje y el framework para un código más limpio y eficiente, reduciendo el _boilerplate_ mediante **Lombok**.
- **Lógica de Prevención de Conflictos:** Algoritmos a nivel de servicio que consultan la disponibilidad (slots) en tiempo real antes de confirmar una transacción de reserva en la base de datos.
- **Documentación Interactiva:** Integración de **SpringDoc OpenAPI (Swagger UI)**. Todos los endpoints, modelos de datos (DTOs) y esquemas de autenticación están documentados automáticamente, permitiendo probar la API directamente desde el navegador.
- **Encriptación de Datos:** Uso de BCrypt para el hashing seguro de contraseñas antes de su persistencia en la base de datos.

## 📈 Resultados e Impacto

- **Integración Frontend Acelerada:** Gracias a la documentación exhaustiva en Swagger, cualquier equipo de desarrollo Frontend (React, Angular, móvil) puede consumir la API inmediatamente sin necesidad de leer el código fuente.
- **Integridad de Datos Garantizada:** Las validaciones a nivel de DTO y las restricciones de base de datos aseguran que no ingrese información corrupta al sistema.
- **Base Escalable:** El diseño modularizado por dominios (Auth, Users, Services, Appointments) permite que, si el negocio crece, ciertas partes del monolito puedan extraerse fácilmente a microservicios independientes.
