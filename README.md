# 🍽️ FoodHub Backend

A production-style REST API for restaurant management built using Node.js, Express.js, MongoDB, and Mongoose following the MVC Architecture.

---

## 📖 Project Overview

FoodHub Backend is a RESTful API designed for managing restaurants, menus, categories, and customer reviews.

The project demonstrates backend engineering concepts including:

- Modular MVC Architecture
- MongoDB Relationships
- Centralized Error Handling
- Reusable Utilities
- Dynamic Filtering
- Sorting
- Pagination
- Soft Delete
- Data Validation
- Statistics Management

This project was built as part of my Backend Developer learning journey.

---
## 📬 Postman Collection

Import the included Postman collection.

Create an environment variable:

```text
Variable Name : base_url
Value         : http://localhost:2000
```

Use:

```
{{base_url}}
```

for all requests.

## ✨ Features

- Restaurant Management
- Menu Management
- Category Management
- Review Management
- Dynamic Filtering
- Sorting
- Pagination
- Soft Delete
- Centralized Error Handling
- MongoDB Relationships using References
- Restaurant Statistics Management
- Modular MVC Architecture

---

## 🛠 Tech Stack

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

### Development Tools
- dotenv
- Nodemon

---

## 🏗 Architecture

The project follows the MVC (Model-View-Controller) architecture.

- Models → Database Schemas
- Controllers → Business Logic
- Routes → API Endpoints
- Middleware → Centralized Error Handling
- Utils → Reusable Helper Functions
- Config → Database Configuration

---

## 📂 Folder Structure

```text
FoodHub-Backend
│
├── config/
├── controllers/
├── middleware/
├── models/
├── routes/
├── utils/
├── server.js
├── package.json
├── README.md
└── .env
```

---

## 🗄 Database Design

### Collections

- Restaurants
- Categories
- Menus
- Reviews

### Relationships

Category (1) ─────────▶ (Many) Restaurants

Restaurant (1) ───────▶ (Many) Menus

Restaurant (1) ───────▶ (Many) Reviews

---

## 📡 API Endpoints

### 🍽 Restaurants

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/restaurants` | Create Restaurant |
| GET | `/restaurants` | Search Restaurants |
| GET | `/restaurants/:id` | Get Restaurant by ID |
| PATCH | `/restaurants/:id` | Update Restaurant |
| DELETE | `/restaurants/:id` | Soft Delete Restaurant |

---

### 📂 Categories

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/categories` | Create Category |
| GET | `/categories` | Get All Categories |
| GET | `/categories/:id` | Get Category by ID |
| PATCH | `/categories/:id` | Update Category |
| DELETE | `/categories/:id` | Soft Delete Category |
| GET | `/categories/:name/restaurants`* | Get Restaurants by Category |

---

### 🍔 Menus

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/menus` | Create Menu Item |
| GET | `/menus` | Search Menu Items |
| GET | `/menus/:id` | Get Menu Item by ID |
| PATCH | `/menus/:id` | Update Menu Item |
| DELETE | `/menus/:id` | Soft Delete Menu Item |

---

### ⭐ Reviews

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/reviews` | Create Review |
| GET | `/reviews/:id` | Get Review by ID |
| GET | `/reviews/restaurant/:id` | Get Reviews of Restaurant |
| PATCH | `/reviews/:id` | Update Review Comment |
| DELETE | `/reviews/:id` | Soft Delete Review |

---

## ⚙ Installation

```bash
git clone https://github.com/rohith9u/FoodHub-Backend.git

cd FoodHub-Backend

npm install
```

---

## 🌱 Environment Variables

Create a `.env` file.

```env
PORT=2000

MONGO_URL=mongodb://localhost:27017/RestaurantDB
```

---

## 🚀 Run Project

```bash
npm run dev
```

---

## 🎯 Learning Outcomes

This project helped me learn:

- Express.js API Development
- MongoDB & Mongoose
- MVC Architecture
- REST API Design
- CRUD Operations
- MongoDB Relationships
- Dynamic Filtering
- Pagination & Sorting
- Centralized Error Handling
- Soft Delete
- Modular Backend Design

---

## 🔮 Future Improvements

- JWT Authentication
- Role Based Authorization
- MongoDB Aggregation Pipeline
- MongoDB Indexing
- Swagger API Documentation
- Image Upload
- Cloudinary Integration
- Redis Caching
- Docker Deployment

---

## 👨‍💻 Author

Rohith

Backend Developer Learner
