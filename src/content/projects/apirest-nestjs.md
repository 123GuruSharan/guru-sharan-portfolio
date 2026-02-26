---
title: "Cloud API RESTful - NestJS & AWS"
description: "Diseño y desarrollo de una API segura con TypeScript y NestJS. Implementación de control de roles (RBAC) y un pipeline CI/CD completo con GitHub Actions y Docker para su despliegue automatizado en AWS EC2."
image: "../../assets/images/nestjs.png"
projectUrl: "https://github.com/LugoDv/apirest-nestj-auth-roles"
technologies: ["TypeScript", "NestJS", "AWS", "Docker", "PostgreSQL"]
featured: true
publishedDate: 2026-02-20
order: 2
icon: "code"
---

# Arquitectura Backend Escalable y Despliegue Automatizado (CI/CD)

Una API RESTful empresarial construida desde cero con el ecosistema de Node.js, diseñada no solo para gestionar datos de forma segura, sino para demostrar un dominio completo de las prácticas modernas de DevOps y arquitecturas Cloud.

## 🎯 El Reto

El objetivo principal de este proyecto era construir una base backend sólida que pudiera servir como plantilla para futuras aplicaciones escalables. El sistema necesitaba un tipado estricto, una capa de seguridad impenetrable mediante roles de usuario, y lo más importante: **eliminar por completo el trabajo manual de despliegue** llevando la aplicación a la nube de forma automatizada y sin fricciones.

## 💡 La Solución y Arquitectura

Para lograr un entorno robusto y preparado para producción, dividí el proyecto en dos fases clave: el desarrollo del software y la ingeniería de la infraestructura.

1. **Desarrollo Backend (NestJS):** Utilicé el framework NestJS por su arquitectura nativa basada en inyección de dependencias y modularidad. Implementé un sistema de autenticación por tokens (JWT) y construí Guards personalizados para restringir el acceso a los endpoints según el rol del usuario (ADMIN vs USER).
2. **Contenerización (Docker):** Aislé la aplicación y su base de datos (PostgreSQL) utilizando `Dockerfile` y `docker-compose.yml`. Esto garantiza que el proyecto funcione de manera idéntica en cualquier máquina o servidor.
3. **Pipeline CI/CD y Nube (AWS):** Diseñé un flujo de trabajo (workflow) en GitHub Actions que, ante cada nuevo `push` a la rama principal, construye automáticamente la imagen del contenedor y la despliega en una instancia de Amazon EC2.

## ⚙️ Aspectos Técnicos Destacados

- **TypeScript & TypeORM:** Código 100% tipado, utilizando TypeORM para la persistencia de datos relacionales, asegurando consultas seguras y migraciones estructuradas.
- **Seguridad (AuthGuard & RolesGuard):** Protección perimetral de las rutas a través de decoradores personalizados (`@Roles()`), validando la firma del JWT en cada petición.
- **Integración Continua (CI/CD):** Creación del archivo `main.yml` en GitHub Actions para orquestar la construcción y el despliegue automático hacia AWS, minimizando el riesgo de errores humanos en el servidor.
- **Infraestructura como Código (IaC):** Todo el entorno de ejecución está documentado y versionado mediante Docker, lo que permite levantar toda la arquitectura en minutos.

## 📈 Resultados e Impacto

- **Despliegues con Cero Fricción:** El equipo (o el desarrollador) puede enfocarse 100% en escribir código; al hacer un _merge_, la plataforma se actualiza sola en producción en cuestión de minutos.
- **Arquitectura Enterprise:** Al seguir los principios SOLID y la estructura modular de NestJS, el código base está preparado para escalar, permitiendo agregar nuevos módulos y microservicios sin romper la funcionalidad existente.
- **Documentación Integral:** Se elaboró una guía técnica detallada (`CI-CD-GUIDE.md`) que sirve como manual operativo para cualquier desarrollador que se una al proyecto, estandarizando el proceso de autenticación y despliegue.
