# User Management API

This is a backend API for user authentication built with Node.js, Express, and MongoDB.  
The project focuses on implementing secure authentication and a clean project structure.

## Features

- User registration
- User login
- Password hashing using bcrypt
- JWT-based authentication
- Protected routes using middleware

## Tech Stack

- Node.js
- Express
- MongoDB (Mongoose)
- JSON Web Token (JWT)
- bcrypt

## Project Structure

src/
- config/        (database connection)
- controllers/   (business logic)
- models/        (database schemas)
- routes/        (API routes)
- middleware/    (authentication middleware)

server.js        (entry point)

## Getting Started

1. Install dependencies:
npm install

2. Run the server:
node server.js

## API Endpoints

POST /api/users/register  
POST /api/users/login  
GET /api/users/profile (protected route)

## Authentication

After logging in, the API returns a JWT token.  
This token must be included in the Authorization header for protected routes:

Authorization: Bearer <token>

## Notes

This project is part of my backend development learning process and demonstrates basic authentication and API design.
