# ✅ Secure Todo Application — Vue 3 Frontend

A production-style Todo application built using **Vue 3**, consuming a secure **FastAPI REST API** with JWT authentication.

This project demonstrates **enterprise-grade frontend architecture**, secure API communication, and best practices expected from modern frontend engineers.

---

## 🚀 Tech Stack

- Vue 3 (Composition API)
- Pinia (State Management)
- Vue Router
- Axios
- TailwindCSS
- JWT Authentication
- RESTful API Integration

---

## 🎯 Project Goal

This project focuses on demonstrating:

✅ Secure communication with REST APIs  
✅ Authentication handling in frontend applications  
✅ Proper separation of concerns  
✅ Enterprise frontend folder architecture  
✅ Token lifecycle management  
✅ API abstraction patterns  

---

## 🔐 Security Implementation

### 1. Authentication
- JWT-based login system
- Access token stored securely in memory/localStorage
- Protected routes using navigation guards
- Automatic logout on token expiration

---

### 2. Encryption
- All communication occurs via HTTPS-ready API requests
- Authorization headers sent using:
    Authorization: Bearer <JWT_TOKEN>
    Axios interceptors automatically attach tokens.
---

### 3. Validation
Frontend validation includes:

- Required fields
- Input sanitization
- Prevent invalid API requests
- Server validation fallback handling

---

## 🧱 Frontend Architecture
src/
│
├── api/ # REST API abstraction
├── stores/ # Pinia state management
├── router/ # Route guards
├── views/ # Page-level components
├── components/ # Reusable UI components
├── layouts/ # Application layout
└── assets/

---

## 🔄 REST API Endpoints Consumed

| Method | Endpoint | Description |
|------|------------|------------|
| POST | /register | User registration |
| POST | /login | Authentication |
| GET | /todos | Get all todos |
| GET | /todos/{id} | Get todo |
| POST | /todos | Create todo |
| PUT | /todos/{id} | Update todo |
| DELETE | /todos/{id} | Delete todo |

Backend repository:

👉 https://github.com/widdruid/secure-todo-fastapi-api

---

## ⚙️ Setup Instructions

### 1. Install Dependencies

```bash
npm install
.env
VITE_API_URL=http://localhost:8000
npm run dev
http://localhost:5173

