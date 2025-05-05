
# CRUD with Express and MongoDB 🛠️

A simple RESTful API built using **Express.js** and **MongoDB** that performs full **CRUD operations** (Create, Read, Update, Delete). It also features an **auto-incrementing userId** field using a counter mechanism, in addition to MongoDB’s default `_id`.


## 📂 Project Structure


```markdown
crud-with-express-mongodb/
├── models/
│   ├── counterModel.js       # For auto-incrementing userId
│   └── User.js               # User schema with userId, name, email, age
├── routes/
│   └── users.js              # All user-related routes
├── server.js                 # Main entry point
├── .gitignore
├── package.json
└── README.md

````

---

## 📌 Features

- ✅ Create a new user
- ✅ Read all users or a single user
- ✅ Update user information
- ✅ Delete a user
- ✅ Auto-incremented userId (1, 2, 3...) for easier reference

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/saurabhkumarxmpt/crud-with-express-mongodb.git
cd crud-with-express-mongodb
````

### 2. Install Dependencies

```bash
npm install
```


### 3. Start the Server

```bash
nodemon server.js
```

The server will run on: `http://localhost:3000`

---

## 📬 API Endpoints

| Method | Endpoint     | Description          |
| ------ | ------------ | -------------------- |
| GET    | `/allusers`  | Get all users        |
| GET    | `/find/:id`  | Get user by userId   |
| POST   | `/adduser`   | Create new user      |
| PUT    | `/update/:id`| Update existing user |
| DELETE | `/delete/:id`| Delete user          |

---

## 🧪 Sample Request Body (POST /users)

```json
{
  "name": "adom Kumar",
  "email": "adom@xyz.com",
  "age": 25
}
```

---

## 📦 Technologies Used

* Node.js
* Express.js
* MongoDB
* Mongoose

---

## 🙌 Author

Made with ❤️ by [Saurabh Kumar](https://github.com/saurabhkumarxmpt)




