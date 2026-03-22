# 🚀 SaaS Analytics Platform

A **full-stack, multi-tenant analytics platform** that tracks user behavior and visualizes insights in real-time — similar to tools like Google Analytics, Mixpanel, and Amplitude.

---

## 🔥 Key Features

### 🔐 Authentication & Security

* JWT-based authentication system
* Secure login/signup flow
* Protected API routes using middleware

---

### 🏢 Multi-Tenant Architecture

* Each organization has isolated data
* Users belong to specific organizations
* Scalable SaaS-ready backend design

---

### 📊 Event Tracking Engine

* Track any user activity dynamically:

  * `login`
  * `logout`
  * `page_view`
  * `button_click`
  * custom events
* Events stored with:

  * user_id
  * organization_id
  * timestamp

---

### ⚡ Automatic Event Tracking (Frontend)

* Tracks:

  * Page visits automatically
  * Button clicks
  * Login & logout events
* No manual API testing required

---

### 📈 Analytics Dashboard

* Visual representation using charts
* Event counts grouped by type
* Real-time insights into user behavior

---

### 🎨 Modern UI

* Dark/light mode toggle
* Sidebar navigation (Dashboard / Settings)
* Responsive layout
* Clean SaaS-style design

---

## 🧠 How It Works

1. User logs in → JWT token generated
2. Token stored in frontend (localStorage)
3. Every request attaches token via Axios interceptor
4. Events are sent to backend
5. Backend stores events in PostgreSQL
6. Analytics API aggregates data
7. Dashboard visualizes insights

---

## 🛠 Tech Stack

### 💻 Frontend

* React (Vite)
* Axios
* Chart.js
* React Router

---

### ⚙️ Backend

* Node.js
* Express.js
* JWT Authentication
* Middleware-based architecture

---

### 🗄 Database

* PostgreSQL
* Relational schema with:

  * users
  * organizations
  * events

---

## 📊 Example Analytics Output

| Event Type   | Count |
| ------------ | ----- |
| login        | 3     |
| page_view    | 10    |
| button_click | 5     |
| logout       | 2     |

---

## 🚀 Why This Project Stands Out

### ✅ Real SaaS Architecture

* Not just CRUD — includes multi-tenancy + analytics

### ✅ Industry-Relevant

* Mimics real-world tools like Mixpanel

### ✅ Full-Stack Depth

* Covers frontend, backend, database, and auth

### ✅ Event-Driven Design

* Tracks behavior instead of static data

### ✅ Scalable Structure

* Can be extended to:

  * real-time analytics
  * AI insights
  * user segmentation

---

## ⚡ Advantages Over Basic Projects

| Basic Projects ❌ | This Project ✅        |
| ---------------- | --------------------- |
| Simple CRUD      | Event-driven system   |
| No analytics     | Real-time insights    |
| No auth          | JWT security          |
| Single user      | Multi-tenant SaaS     |
| Static UI        | Interactive dashboard |

---

## 🔐 Environment Variables

Create `.env` in **server folder**:

```
DB_USER=postgres
DB_PASSWORD=yourpassword
DB_NAME=saas_db
JWT_SECRET=yoursecret
PORT=5000
```

---

## 🚀 Run Locally

### 🔹 Backend

```
cd server
npm install
node index.js
```

---

### 🔹 Frontend

```
cd client
npm install
npm run dev
```

---

## 📸 Screenshots
<img width="1789" height="1074" alt="image" src="https://github.com/user-attachments/assets/cf568925-e5eb-42ee-b14e-475a3c1095b9" />

<img width="2239" height="1151" alt="image" src="https://github.com/user-attachments/assets/947412d6-1265-42c5-811b-bcff62c132be" />


---

## 🚀 Future Improvements

* 📡 Real-time analytics (WebSockets)
* 🤖 AI-based insights
* 📊 Advanced filtering & date ranges
* 👥 Role-based access (Admin/User)
* 🌐 Deployment (Render + Vercel)

---

## 🎯 Author

**Shivanandan R**

---

## ⭐ If you like this project

Give it a ⭐ on GitHub — it helps a lot!
