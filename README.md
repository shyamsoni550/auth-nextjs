# UserHub

A modern, secure authentication system built with Next.js 15, featuring user registration, login, email verification, password reset, and profile management.

![UserHub](https://img.shields.io/badge/UserHub-Authentication-blue?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square)

## 🚀 Features

- **User Registration & Login** - Secure signup and authentication
- **Email Verification** - Account activation via email
- **Password Reset** - Forgot password functionality with email reset
- **Profile Management** - User dashboard and profile viewing
- **JWT Authentication** - Secure token-based authentication
- **Responsive Design** - Mobile-friendly UI with Tailwind CSS
- **Middleware Protection** - Route protection and access control
- **MongoDB Integration** - NoSQL database for user data
- **Email Notifications** - SMTP email sending via Mailtrap

## 🛠️ Tech Stack

- **Frontend:** Next.js 15, React, TypeScript, Tailwind CSS
- **Backend:** Next.js API Routes
- **Database:** MongoDB with Mongoose
- **Authentication:** JWT, bcryptjs
- **Email:** Nodemailer with Mailtrap
- **Styling:** Tailwind CSS
- **Deployment:** Vercel (recommended)

## 📋 Prerequisites

Before running this application, make sure you have:

- Node.js 18+ installed
- MongoDB database (local or cloud)
- Mailtrap account for email testing

## 🔧 Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd userhub
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Environment Setup:**
   Create a `.env` file in the root directory with the following variables:

   ```env
   # Database
   MONGODB_URI=mongodb://localhost:27017/userhub

   # JWT Secret
   JWT_SECRET=your-super-secret-jwt-key

   # Domain
   DOMAIN=http://localhost:3000

   # Email Configuration (Mailtrap)
   MAILTRAP_HOST=smtp.mailtrap.io
   MAILTRAP_PORT=2525
   MAILTRAP_USER=your-mailtrap-user
   MAILTRAP_PASS=your-mailtrap-password
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📖 Usage

### User Flow

1. **Registration:** Users can sign up with username, email, and password
2. **Email Verification:** Users receive verification email and must verify their account
3. **Login:** Verified users can log in with email and password
4. **Profile:** Users can view their profile information
5. **Password Reset:** Users can reset password via email if forgotten

### API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/users/signup` | User registration |
| POST | `/api/users/login` | User login |
| GET | `/api/users/logout` | User logout |
| GET | `/api/users/me` | Get current user info |
| POST | `/api/users/verifyemail` | Email verification |
| POST | `/api/users/forgotpassword` | Request password reset |
| POST | `/api/users/resetpassword` | Reset password |

## 🏗️ Project Structure

```
userhub/
├── src/
│   ├── app/
│   │   ├── api/users/          # API routes
│   │   ├── login/              # Login page
│   │   ├── signup/             # Signup page
│   │   ├── profile/            # Profile pages
│   │   ├── verifyemail/        # Email verification
│   │   ├── forgotpassword/     # Password reset request
│   │   ├── resetpassword/      # Password reset form
│   │   └── layout.tsx          # Root layout
│   ├── dbconfig/               # Database configuration
│   ├── helpers/                # Utility functions
│   ├── middleware.ts           # Route protection
│   └── models/                 # MongoDB models
├── public/                     # Static assets
├── .env                        # Environment variables
└── README.md
```

## 🔒 Security Features

- Password hashing with bcryptjs
- JWT token authentication
- Email verification for account activation
- Route protection with middleware
- Secure password reset tokens with expiration
- Input validation and sanitization

## 🚀 Deployment

### Vercel Deployment

1. **Connect your repository to Vercel**
2. **Add environment variables** in Vercel dashboard
3. **Deploy** - Vercel will handle the build process

### Manual Deployment

```bash
npm run build
npm start
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📧 Contact

For questions or support, please open an issue on GitHub.

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Vercel for hosting and deployment
- MongoDB for the database
- Tailwind CSS for styling
- All contributors and open-source projects used

---

**Built with ❤️ using Next.js**
