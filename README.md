# Lead Generation CRM

A full stack lead generation and CRM project built using the MERN stack.

The project allows users to submit leads through a landing page while the admin can manage those leads from a dashboard.
Integrated email automation, WhatsApp automation and Meta Pixel tracking.

---

## Features

* Lead form submission
* MongoDB lead storage
* Admin dashboard
* Search and filter leads
* Update lead status
* Delete leads
* Email automation using Nodemailer
* WhatsApp automation using Twilio
* Meta Pixel lead tracking

---

## Tech Stack

### Frontend

* React
* Vite
* Tailwind CSS
* Axios

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* Nodemailer
* Twilio

---

## Folder Structure

```bash
backend/
│
├── config/
├── controllers/
├── middleware/
├── models/
├── routes/
├── utility/
├── .env
└── server.js

frontend/
│
├── src/
│   ├── components/
│   ├── pages/
│   ├── App.jsx
│   └── main.jsx
```

---

## Backend Setup

Install dependencies:

```bash
npm install
```

Run server:

```bash
node server.js
```

---

## Frontend Setup

Install dependencies:

```bash
npm install
```

Start frontend:

```bash
npm run dev
```

---

## Environment Variables

Create a `.env` file inside backend folder.

```env
MONGO_URL=your_mongodb_url

MAIL=your_email

PASSWORD=your_gmail_app_password

ACC_SID=your_twilio_sid

AUTH_TOKEN=your_twilio_auth_token

PH_NO=whatsapp:+14155238886
```

---

## API Routes

### Create Lead

```http
POST /api/data/lead
```

### Get All Leads

```http
GET /api/data/leads
```

### Update Lead Status

```http
PUT /api/data/lead/:id
```

### Delete Lead

```http
DELETE /api/data/lead/:id
```

---

## Current Features Added

* Landing page
* Lead form
* Admin dashboard
* Lead status management
* Search and filtering
* Email integration
* WhatsApp sandbox integration
* Meta Pixel basics

---

## Future Improvements

* JWT Authentication
* Protected admin routes
* Charts and analytics
* CSV export
* Notes system
* Real Facebook Ads integration
* Deployment

---

## Workflow

```text
Facebook Ad
   ↓
Landing Page
   ↓
Lead Form
   ↓
MongoDB
   ↓
Admin Dashboard
   ↓
Email + WhatsApp Automation
```

---

## Project Goal

The main goal of this project was to understand how real lead generation systems work behind the scenes and how businesses manage leads using CRM workflows.

This project helped in learning:

* MERN stack architecture
* API handling
* MongoDB CRUD operations
* Email automation
* WhatsApp automation
* Basic performance marketing concepts

---
