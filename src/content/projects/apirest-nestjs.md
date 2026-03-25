---
title: "Automated regression testing"
description: "A Java-based backend system built using Spring Boot to automate regression testing for web and API applications—managing and executing test cases with REST APIs, Selenium, and REST-Assured in a scalable, layered architecture."
image: "../../assets/images/automate.png"
projectUrl: "https://github.com/123GuruSharan/automation-framework-infosys"
github: "https://github.com/123GuruSharan/automation-framework-infosys.git"
technologies: ["Java", "Spring Boot", "MySQL", "Selenium", "REST-Assured", "JPA"]
featured: true
publishedDate: 2026-02-20
order: 2
icon: "code"
---

# 🚀 Automated Regression Test Suite Framework with Scalable Test Execution

A Java-based backend system built using Spring Boot, designed to automate regression testing for web and API applications. The framework not only manages and executes test cases but also demonstrates strong understanding of backend architecture, automation testing, and scalable system design.

---

## 🎯 The Challenge

The primary objective of this project was to design a centralized system that can:

* Automate regression testing for both UI and API layers
* Reduce manual testing effort and human errors
* Provide a structured approach for managing and executing test cases
* Build a scalable backend that can handle multiple test executions

Additionally, the system needed to integrate automation tools and expose REST APIs for test management.

---

## 💡 The Solution and Architecture

To build a robust and modular system, the project was divided into backend architecture and automation execution layers:

### Backend Development (Spring Boot)

I developed a RESTful backend using Spring Boot with a layered architecture:

* Controller → Handles API requests
* Service → Contains business logic
* Repository → Handles database operations using JPA
* Model → Represents entities like TestCase

This ensures clean code and scalability.

---

### Database Integration (MySQL + JPA/Hibernate)

* Used MySQL for persistent storage of test cases and results
* Integrated using Spring Data JPA (Hibernate)
* Eliminated the need for manual SQL queries through ORM

---

### Automation Integration

* Integrated **REST-Assured** for API testing
* Integrated **Selenium WebDriver** for UI testing
* Implemented execution logic to dynamically trigger tests based on type (API/UI)

---

### Execution Flow

The system follows a structured flow:

```text
Client → REST API → Controller → Service → Test Execution → Database → Response
```

---

## ⚙️ Outstanding Technical Aspects

### Layered Architecture

* Proper separation of concerns (Controller, Service, Repository)
* Easy to maintain and extend

---

### ORM with JPA & Hibernate

* Automatic mapping of Java objects to database tables
* Simplified database operations using JpaRepository

---

### Automation Testing Integration

* API testing using REST-Assured with status validation
* UI testing using Selenium for browser automation
* Ability to simulate real-world test scenarios

---

### Dynamic Test Execution

* System decides execution path based on test type
* Supports flexible and extendable test execution logic

---

## 📈 Results and Impact

### Automated Testing Workflow

* Eliminates manual testing effort
* Enables faster and repeatable regression testing

---

### Scalable Backend Design

* Modular architecture allows easy addition of new features
* Ready for enhancements like parallel execution and reporting

---

### Industry-Relevant Implementation

* Combines backend development with automation testing
* Reflects real-world QA automation frameworks

---

### Improved Reliability

* Supports failure simulation and validation
* Helps detect defects early in development lifecycle

---

## Presentation summary

> This project is a scalable backend-driven automation framework that manages and executes test cases using Spring Boot, Selenium, and REST-Assured.
