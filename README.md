Here is a **README.md** tailored to your project with only three folders: `controllers`, `models`, and `routes`.

---

## **User CRUD Application (MEN Stack)**

This is a simple **User Management** application built using the **MEN stack** (MongoDB, Express, and Node.js). It provides API endpoints to perform **create**, **read**, **update**, and **delete** (CRUD) operations on user data.

---

### **Project Structure**

```
Microproject2/
│
├── controllers/
│   └── userController.js  # Business logic for handling requests
│
├── models/
│   └── userModel.js       # Mongoose schema definition for User
│
├── routes/
│   └── userRoutes.js      # User-related API routes
│
├── .env                   # Environment variables
├── package.json           # Project dependencies and scripts
├── server.js              # Entry point of the application
└── README.md              # Project documentation
```

---

### **Technologies Used**

- **Node.js**: Server-side JavaScript runtime.
- **Express.js**: Web framework for building RESTful APIs.
- **MongoDB**: NoSQL database for storing user data.
- **Mongoose**: ODM library for MongoDB.
- **dotenv**: For managing environment variables.

---

### **Installation**

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd Microproject2
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:  
   Create a `.env` file in the root directory:
   ```env
   MONGO_URI="mongodb+srv://<username>:<password>@cluster.mongodb.net/<dbname>"
   PORT=3000
   ```

4. **Run the server**:
   ```bash
   npm start
   ```

   Or, for development with auto-restart:
   ```bash
   npm run dev
   ```

---

### **API Endpoints**

| **Method** | **Endpoint**     | **Description**        | **Example Request Body**                       |
|------------|------------------|------------------------|-----------------------------------------------|
| POST       | `/api/users`     | Create a new user      | `{ "name": "Simran", "email": "simran@mail.com", "age": 30 }` |
| GET        | `/api/users`     | Get all users          | N/A                                           |
| GET        | `/api/users/:id` | Get a user by ID       | N/A                                           |
| PUT        | `/api/users/:id` | Update user by ID      | `{ "name": "Updated Name", "age": 31 }`       |
| DELETE     | `/api/users/:id` | Delete user by ID      | N/A                                           |

---

### **Testing the API**

Use **Postman** or any REST client to test the API:

1. **POST** - Create User  
   Endpoint: `http://localhost:3000/api/users`  
   Body:
   ```json
   {
     "name": "Simran",
     "email": "simran@gmail.com",
     "age": 30
   }
   ```

2. **GET** - Retrieve All Users  
   Endpoint: `http://localhost:3000/api/users`

3. **GET** - Retrieve User by ID  
   Endpoint: `http://localhost:3000/api/users/<user-id>`

4. **PUT** - Update User by ID  
   Endpoint: `http://localhost:3000/api/users/<user-id>`  
   Body:
   ```json
   {
     "name": "Updated Name",
     "age": 31
   }
   ```

5. **DELETE** - Delete User by ID  
   Endpoint: `http://localhost:3000/api/users/<user-id>`

---

### **User Schema**

The `User` schema is defined as:

| Field       | Type    | Validation                |
|-------------|---------|---------------------------|
| `name`      | String  | Required, trimmed         |
| `email`     | String  | Required, unique, valid   |
| `age`       | Number  | Optional, min value: `0`  |
| `createdAt` | Date    | Defaults to current date  |

---

### **Sample Responses**

**Success - User Created**:
```json
{
  "success": true,
  "data": {
    "_id": "60d5f484f8c2e12345678901",
    "name": "Simran",
    "email": "simran@gmail.com",
    "age": 30,
    "createdAt": "2024-06-15T14:22:35.873Z"
  }
}
```

**Validation Error**:
```json
{
  "success": false,
  "error": "User validation failed: name: Name is required, email: Email is required"
}
```

---

### **Run in Development**

To run the application with **Nodemon** for auto-reload:

```bash
npm run dev
```

---
