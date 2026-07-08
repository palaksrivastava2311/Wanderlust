# 🏡 Wanderlust

Wanderlust is a full-stack Airbnb-inspired web application where users can explore, create, edit, and review travel accommodations. The application follows the MVC architecture and includes secure authentication, authorization, cloud-based image storage, and a responsive user interface.

---

## 🚀 Features

### 👤 User Authentication
- User Registration (Sign Up)
- User Login & Logout
- Secure password hashing using Passport.js
- Session-based authentication

### 🏠 Listing Management
- View all listings
- View detailed information about a listing
- Create new listings
- Edit existing listings
- Delete listings
- Upload listing images

### ☁️ Image Upload
- Upload listing images using Multer
- Store images securely on Cloudinary
- Automatically manage uploaded image URLs

### ⭐ Review System
- Add reviews and ratings
- View reviews for each listing
- Delete your own reviews

### 🔒 Authorization
- Only authenticated users can create listings.
- Only listing owners can edit or delete their listings.
- Only authenticated users can write reviews.
- Users can delete only their own reviews.

### ✅ Validation & Error Handling
- Server-side validation using Joi
- Custom error handling
- Flash messages for user feedback
- Route protection using custom middleware

---

# 🛠 Tech Stack

## Frontend
- HTML5
- CSS3
- Bootstrap 5
- EJS

## Backend
- Node.js
- Express.js

## Database
- MongoDB
- Mongoose

## Authentication
- Passport.js
- Passport Local
- Passport Local Mongoose
- Express Session

## Cloud Storage
- Cloudinary
- Multer
- Multer Storage Cloudinary

## Validation & Utilities
- Joi
- Connect Flash
- Method Override
- Dotenv

---

# 📂 Project Structure

```text
Wanderlust/
│
├── controllers/
│   ├── listing.js
│   ├── review.js
│   └── user.js
│
├── models/
│   ├── listing.js
│   ├── review.js
│   └── user.js
│
├── routes/
│   ├── listing.js
│   ├── review.js
│   └── user.js
│
├── public/
│   ├── css/
│   ├── js/
│   └── uploads/
│
├── views/
│   ├── includes/
│   ├── layouts/
│   ├── listings/
│   ├── users/
│   └── error.ejs
│
├── utils/
│   ├── ExpressError.js
│   └── wrapAsync.js
│
├── middleware.js
├── cloudConfig.js
├── schema.js
├── app.js
├── package.json
├── .env
└── README.md
```

---

# ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/palaksrivastava2311/Wanderlust.git
```

### Move into the project directory

```bash
cd Wanderlust
```

### Install dependencies

```bash
npm install
```

### Create a `.env` file

```env
ATLASDB_URL=your_mongodb_connection_string

SECRET=your_session_secret

CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret
```

### Start the development server

```bash
npm start
```

or

```bash
npm run dev
```

Open your browser:

```
http://localhost:8080
```

---

# 📸 Screenshots

Screenshots will be added after project completion.

---

# 📦 Main Dependencies

- express
- mongoose
- ejs
- ejs-mate
- passport
- passport-local
- passport-local-mongoose
- express-session
- connect-flash
- joi
- multer
- cloudinary
- multer-storage-cloudinary
- method-override
- dotenv

---

# 📌 Key Concepts Implemented

- MVC Architecture
- RESTful Routing
- Authentication & Authorization
- Session Management
- Flash Messages
- Middleware
- Server-side Validation
- Image Uploads
- Cloud Storage
- CRUD Operations
- MongoDB Relationships

---

# 🎯 Future Enhancements

- 🔍 Search and filter listings
- 🗺️ Google Maps integration
- ❤️ Wishlist/Favorites
- 📅 Booking functionality
- 👤 User profile page
- 🌙 Dark mode
- 📱 Enhanced mobile responsiveness
- 🚀 Live deployment

---

# 👩‍💻 Author

**Palak Srivastava**

Electronics & Communication Engineering Undergraduate  
KNIT Sultanpur

Passionate about Full Stack Web Development, Backend Development, and Data Structures & Algorithms.

---

# 📄 License

This project is developed for learning and educational purposes.
