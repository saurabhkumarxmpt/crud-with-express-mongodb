Bilkul bhai! Niche main poora **`README.md`** content de raha hoon **single file ke format me** — isse seedha copy karo aur apne project ke root me `README.md` file bana ke paste kar do.

---

### ✅ Final `README.md` content (single file):

```markdown
# CRUD with Express and MongoDB 🛠️

A simple RESTful API built using **Express.js** and **MongoDB** that performs full **CRUD operations** (Create, Read, Update, Delete). It also features an **auto-incrementing userId** field using a counter mechanism, in addition to MongoDB’s default `_id`.

---

## 📂 Project Structure

```

crud-with-express-mongodb/
├── models/
│   ├── counterModel.js       # For auto-incrementing userId
│   └── userModel.js          # User schema with userId, name, email, age
├── routes/
│   └── userRoutes.js         # All user-related routes
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

### 3. Create a `.env` File

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/crud-app
```

> 💡 Replace `MONGODB_URI` with your actual MongoDB connection string.

### 4. Start the Server

```bash
npm start
```

The server will run on: `http://localhost:5000`

---

## 📬 API Endpoints

| Method | Endpoint     | Description          |
| ------ | ------------ | -------------------- |
| GET    | `/users`     | Get all users        |
| GET    | `/users/:id` | Get user by userId   |
| POST   | `/users`     | Create new user      |
| PUT    | `/users/:id` | Update existing user |
| DELETE | `/users/:id` | Delete user          |

---

## 🧪 Sample Request Body (POST /users)

```json
{
  "name": "Saurabh Kumar",
  "email": "saurabh@example.com",
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

---

## 📄 License

This project is open-source and free to use under the [MIT License](LICENSE).

````

---

Bas bhai isse copy karo, `README.md` file banao, paste karo, phir:

```bash
git add README.md
git commit -m "Add complete README file"
git push
````

Agar chaho to main ek Postman collection bhi bana ke du test karne ke liye?

