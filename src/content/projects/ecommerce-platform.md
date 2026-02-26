---
title: "GlobalLeaders USA"
description: "Desarrollé una solución integral que incluye la maquetación del chat, la lógica conversacional en Python y su integración como plugin. Implementé un sistema multi-idioma y me encargué del despliegue profesional mediante Docker en el servidor del cliente, asegurando un entorno estable y escalable."
image: "../../assets/images/global-leaders.png"
projectUrl: "https://regalexia.com/trabaja-campamento-verano-eeuu-global-leaders-usa/"
technologies: ["Python", "FastAPI", "PHP", "Docker"]
featured: true
publishedDate: 2025-10-20
order: 1
icon: "code"
---

# Microservicio Conversacional Bilingüe para Captación de Leads

Un asistente virtual inteligente diseñado para integrarse nativamente en un entorno WordPress, enfocado en automatizar la atención al cliente y aumentar la tasa de conversión de usuarios interesados en programas de intercambio en EE. UU.

## El Reto

El cliente (Regalexia / GlobalLeaders USA) necesitaba una forma interactiva y escalable de atender a los visitantes de su landing page en tiempo real, resolviendo dudas frecuentes en múltiples idiomas y capturando datos de contacto (leads) sin saturar al equipo humano de soporte. La solución debía integrarse sin fricción en su ecosistema web existente basado en PHP/WordPress.

## La Solución y Arquitectura

En lugar de sobrecargar el servidor principal con lógica pesada, diseñé una **arquitectura desacoplada**:

1. **Microservicio Backend (FastAPI):** Desarrollé una API REST ultrarrápida y asíncrona en Python utilizando FastAPI. Este microservicio actúa como el "cerebro" del chatbot, procesando la lógica conversacional, el manejo del estado y la detección del idioma del usuario.
2. **Integración Frontend (PHP/JavaScript):** Creé un plugin personalizado y ligero para WordPress que inyecta la interfaz de usuario (UI) del chat y se comunica de forma asíncrona con el microservicio a través de peticiones HTTP.
3. **Contenerización y Despliegue:** Para garantizar que la aplicación funcionara exactamente igual en desarrollo que en producción, dockericé el backend y lo desplegué de forma independiente en el servidor del cliente.

## Aspectos Técnicos Destacados

- **FastAPI & Python:** Uso de programación asíncrona (`async/await`) para manejar múltiples conexiones concurrentes sin bloqueo.
- **Seguridad Perimetral:** Implementación de políticas **CORS** estrictas (limitadas al dominio del cliente) y **Rate Limiting** para prevenir ataques de denegación de servicio (DDoS) o abuso del endpoint por bots maliciosos.
- **Soporte Multi-idioma:** Lógica de enrutamiento dinámico que adapta las respuestas del bot según las preferencias del navegador del usuario o su selección explícita.
- **Docker:** Creación de un `Dockerfile` optimizado (multietapa) para reducir el peso de la imagen y aislar las dependencias de Python del resto del servidor.

## Resultados e Impacto en el Negocio

- **Aumento de la conversión:** La implementación del bot logró incrementar significativamente la convergencia de leads (usuarios que dejan sus datos tras interactuar con el asistente).
- **Estabilidad garantizada:** Gracias a la arquitectura contenerizada y las políticas de Rate Limiting, el servicio mantiene un _uptime_ impecable incluso durante picos de tráfico generados por campañas publicitarias.
- **Desacoplamiento:** Al separar la lógica conversacional del CMS, el cliente ahora tiene un microservicio que puede reutilizar o escalar independientemente de su página web principal.
