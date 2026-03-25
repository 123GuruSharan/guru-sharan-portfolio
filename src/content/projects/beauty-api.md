---
title: "Airport Lost & Found System"
description: "I developed a backend-driven system to manage lost and found items at airports using C++ and the Crow framework. The system handles efficient request processing and provides a structured way to track, manage, and retrieve lost items."
image: "../../assets/images/airport-lost-found.png"
projectUrl: "https://123gurusharan.github.io/airport-lost-found-frontend/"
github: "https://github.com/123GuruSharan/airport-lost-found-frontend.git"
live: "https://123gurusharan.github.io/airport-lost-found-frontend/"
technologies: ["C++", "Crow", "REST API"]
featured: true
publishedDate: 2025-06-10
order: 3
icon: "message"
---

# ✈️ **Airport Lost & Found Management System (C++ Crow Backend + Web UI)**

A lightweight yet efficient RESTful system designed to manage lost and found items within an airport environment, focusing on fast retrieval, structured data handling, and real-time interaction through a custom-built backend.

---

## 🎯 **The Challenge**

Airports handle a high volume of misplaced items daily, requiring a system that can:

* Efficiently store and retrieve item records
* Allow quick reporting of lost and found items
* Enable fast search based on identifiers
* Maintain structured and collision-free data handling

The challenge was to build a backend system capable of handling these operations with **minimal latency and clear data organization**, while ensuring simplicity and scalability.

---

## 💡 **The Solution and Architecture**

I implemented a **custom backend system in C++ using the Crow framework**, paired with a static frontend interface for user interaction.

The architecture follows a **modular monolithic approach**, ensuring separation of concerns while keeping deployment simple and lightweight.

---

### 🔹 **Core Data Layer**

* Implemented a **custom Hash Table** using chaining (vector + linked list)
* Enables efficient:

  * Insertion of items
  * Retrieval of all records
  * Search by unique ID
* Ensures fast lookup and optimized memory usage

---

### 🔹 **Backend Layer (C++ Crow API)**

* Developed RESTful endpoints using Crow:

  * `POST /add` → Add lost/found item
  * `GET /items` → Retrieve all items
  * `GET /search/<id>` → Search by ID
* Implemented JSON-based request/response handling
* Configured dynamic port binding for cloud deployment (Render-compatible)

---

### 🔹 **Presentation Layer (Frontend UI)**

* Built using HTML, CSS, and JavaScript
* Provides:

  * Item reporting form
  * Search functionality
  * Display of all items
* Integrated with backend using Fetch API for real-time interaction

---

## ⚙️ **Outstanding Technical Aspects**

* **Custom Data Structure Implementation:**
  Designed and implemented a hash table from scratch instead of using STL maps, demonstrating strong understanding of data structures.

* **Lightweight Backend (C++ Crow):**
  High-performance REST API without heavy frameworks, ensuring minimal resource usage.

* **Cloud Deployment:**
  Successfully containerized using Docker and deployed on Render with proper environment handling.

* **API-Driven Architecture:**
  Clear separation between frontend and backend, enabling scalability and independent deployment.

---

## 📈 **Results and Impact**

* **Fast Data Retrieval:**
  Hash-based lookup ensures efficient search operations even with multiple records.

* **Real-Time Interaction:**
  Users can instantly report and search items via the web interface.

* **Scalable Design:**
  Backend can be extended with database integration (MySQL/MongoDB) or authentication features.

* **Production Deployment Experience:**
  Hands-on experience with Docker, cloud hosting (Render), and frontend deployment (Vercel).

---

## 🚀 **Future Enhancements**

* Database integration for persistent storage
* User authentication system
* Image upload for items
* Advanced filtering (date, location, category)
* Admin dashboard
