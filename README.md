# 🏡 Wanderlust

Wanderlust is a full-stack web application inspired by Airbnb that allows users to discover, create, edit, review, and manage travel listings. It provides secure authentication, image uploads, authorization, and a responsive user interface built using the MERN backend ecosystem.

---

## 🚀 Features

* 🔐 User Authentication (Sign Up, Login & Logout)
* 🏠 Create, Read, Update & Delete Listings
* 📍 Add listing details including title, description, location, country and price
* 🖼️ Image upload and storage using Cloudinary
* ⭐ Users can write and delete reviews
* 👤 Authorization so only listing owners can edit or delete their listings
* 💬 Flash messages for user feedback
* ✅ Server-side validation using Joi
* 🔒 Secure password hashing with Passport.js
* 📱 Responsive UI using Bootstrap

---

## 🛠️ Tech Stack

### Frontend

* HTML
* CSS
* Bootstrap 5
* EJS

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

### Authentication

* Passport.js
* Passport Local
* Passport Local Mongoose
* Express Session

### Image Storage

* Cloudinary
* Multer
* Multer Storage Cloudinary

### Validation & Utilities

* Joi
* Method Override
* Connect Flash
* Dotenv

---

## 📂 Project Structure

```
Wanderlust/
│── controllers/
│── models/
│── routes/
│── views/
│── public/
│── middleware.js
│── cloudConfig.js
│── schema.js
│── app.js
│── package.json
│── README.md
```

---

## ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/your-username/wanderlust.git
```

Move into the project directory

```bash
cd wanderlust
```

Install dependencies

```bash
npm install
```

Create a `.env` file in the root directory and add:

```env
ATLASDB_URL=your_mongodb_connection_string

CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret

SECRET=your_session_secret
```

Start the development server

```bash
node app.js
```

or

```bash
nodemon app.js
```

Open your browser and visit

```
http://localhost:8080
```

---

## 📸 Main Functionalities

### Authentication

* User Registration
* Secure Login
* Logout
* Password encryption using Passport Local Mongoose

### Listings

* View all listings
* Create new listing
* Edit listing
* Delete listing
* Upload listing image

### Reviews

* Add reviews
* Give ratings
* Delete own reviews

---

## 🔒 Authorization

* Only authenticated users can create listings.
* Only the owner can edit or delete their listing.
* Only logged-in users can add reviews.
* Users can delete only their own reviews.

---

## 📦 Dependencies

* express
* mongoose
* ejs
* ejs-mate
* passport
* passport-local
* passport-local-mongoose
* express-session
* connect-flash
* joi
* multer
* cloudinary
* multer-storage-cloudinary
* method-override
* dotenv

---

## 💡 Future Enhancements

* Wishlist/Favorites
* Booking System
* Search and Filters
* Google Maps Integration
* Payment Gateway
* User Profile Page
* Email Verification
* Password Reset
* Responsive Dark Mode

---

## 👩‍💻 Author

**Palak Srivastava**

Electronics & Communication Engineering Undergraduate at KNIT Sultanpur with an interest in Full Stack Web Development and Data Structures & Algorithms.

---

## 📄 License

This project is developed for educational purposes and learning full-stack web development.
