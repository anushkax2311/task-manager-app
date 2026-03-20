# 🚀 Task Manager Application (Full Stack)

## 📌 Overview

This project is a full-stack Task Management Application built to demonstrate secure, scalable backend system design along with frontend integration.

The backend is developed using **Spring Boot** with **JWT-based authentication** and **role-based access control**, while the frontend is built using **React.js** for user interaction.

---

## 🛠️ Tech Stack

### 🔹 Backend

* Spring Boot
* Spring Security
* JWT Authentication
* Hibernate / JPA
* MySQL

### 🔹 Frontend

* React.js
* Fetch API

---

## 🔐 Features

### ✅ Authentication & Authorization

* User Registration & Login
* Password hashing using BCrypt
* JWT-based authentication
* Role-based access (USER / ADMIN)

### ✅ Task Management (CRUD)

* Create Task
* Get All Tasks (user-specific)
* Get Task by ID
* Update Task
* Delete Task (authorized user only)

### ✅ Security

* Protected APIs using JWT
* Input validation using annotations
* Unauthorized access handling

### ✅ Frontend Integration

* Login & Register UI
* Dashboard for task management
* API integration with backend
* Token-based request handling

---

## 📂 Project Structure

```
assignment/
 ├── Taskmanager/   # Spring Boot Backend
 ├── frontend/      # React Frontend
 └── README.md
```

---

## 🔗 API Endpoints

### 🔹 Auth APIs

| Method | Endpoint              | Description     |
| ------ | --------------------- | --------------- |
| POST   | /api/v1/auth/register | Register user   |
| POST   | /api/v1/auth/login    | Login & get JWT |

### 🔹 Task APIs (Protected)

| Method | Endpoint           | Description    |
| ------ | ------------------ | -------------- |
| POST   | /api/v1/tasks      | Create task    |
| GET    | /api/v1/tasks      | Get all tasks  |
| GET    | /api/v1/tasks/{id} | Get task by ID |
| PUT    | /api/v1/tasks/{id} | Update task    |
| DELETE | /api/v1/tasks/{id} | Delete task    |

---

## ▶️ How to Run

### 🔹 Backend

```bash
cd Taskmanager
mvn spring-boot:run
```

### 🔹 Frontend

```bash
cd frontend
npm install
npm start
```

---

## 🔑 Authentication Flow

1. Register user
2. Login → Receive JWT token
3. Use token in headers:

```
Authorization: Bearer <token>
```

4. Access protected APIs

---

## 🧪 Testing (Postman)

1. Register user
2. Login → Copy token
3. Add token in Authorization header
4. Test CRUD APIs

---

## 📊 Evaluation Criteria Covered

### ✅ API Design

* RESTful endpoints
* Proper HTTP methods & status codes
* Versioning (/api/v1)

### ✅ Database Design

* User ↔ Task relationship
* JPA/Hibernate ORM

### ✅ Security

* JWT authentication
* Password hashing (BCrypt)
* Input validation

### ✅ Frontend Integration

* React UI connected with APIs
* Token-based authentication

### ✅ Scalability

* Layered architecture
* Modular structure
* Easily extendable for microservices

---

## 🚀 Future Improvements

* Role-based admin dashboard
* Redis caching
* Docker deployment
* Microservices architecture
* CI/CD pipeline

---

## 💡 Key Highlights

* Secure authentication using JWT
* Clean architecture (Controller → Service → Repository)
* Full-stack integration
* Production-ready structure

---

## 👩‍💻 Author

Anushka Patel

---

## ⭐ Conclusion

This project demonstrates practical backend engineering skills including API design, security implementation, and scalable system architecture along with frontend integration.
