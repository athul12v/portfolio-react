# 🧑‍💻 Portfolio React 

A modern portfolio site built with **React + Vite**, styled with **Tailwind CSS**, featuring animated UI components, a contact form powered by **Firebase Firestore**, and an optional **Express** server for extended contact handling.

---

## 🚀 Features

- ✨ **Animated Hero Section** — Includes resume download and live code preview  
  → [`Hero`](src/pages/Hero/Hero.jsx), [`downloadResume.js`](src/utils/downloadResume.js)

- 🧩 **Modular Pages** — Projects, Skills, Experience, Education  
  → [`App.jsx`](src/App.jsx), [`main.jsx`](src/main.jsx)

- 📬 **Contact Form with Firestore + Analytics**  
  → [`Contact.jsx`](src/pages/Contact/Contact.jsx), Firebase config: [`config.js`](src/firebase/config.js)

- 🛠 **Admin Panel for Submissions**  
  → [`Admin.jsx`](src/pages/Admin/Admin.jsx), test helpers: [`firebaseTest.js`](src/utils/firebaseTest.js)

- 🎨 **Reusable UI Components** — Card, Button, Badge, Icon Cloud, Meteors, and more  
  → [`components/`](src/components)

---

## 🧰 Tech Stack

| Tool            | Purpose                                  |
|-----------------|------------------------------------------|
| **React (Vite)**| Fast build + dev environment             |
| **Tailwind CSS**| Utility-first styling                    |
| **Firebase**    | Firestore DB + Analytics                 |
| **Framer Motion**| Animations                              |
| **Express.js**  | Optional backend server (email/save)     |

---

## ⚙️ Setup & Development

### 1. Clone & Install

```bash
git clone https://github.com/YOUR_USERNAME/portfolio-react.git
cd portfolio-react
npm install
````

### 2. Configure Environment

* Copy `.env.example` to `.env`:

```bash
cp .env.example .env
```

* Fill in Firebase credentials and other environment variables.

> Make sure `src/firebase/config.js` reads your Vite environment variables correctly.

### 3. Start Dev Server

```bash
npm run dev
```

* Open [http://localhost:5173](http://localhost:5173)
* Entry point: [`src/App.jsx`](src/App.jsx)

---

## 📦 Scripts

```bash
npm run dev       # Start Vite dev server
npm run build     # Build for production
npm run preview   # Preview production build locally
```

---

## 🧪 Firebase Admin & Contact

### 🔹 Contact Form

* Submits data to Firestore
* Analytics logged using Firebase `logEvent`

### 🔹 Admin Panel

* Displays contact submissions
* Uses Firestore queries
* Test functions in `src/utils/firebaseTest.js`:

  * `addTestContact()`
  * `addTestContactWithCustomId()`

---

## 🖥 Optional Express Server

Path: [`server/index.js`](server/index.js)

Used for:

* Email-based contact forms
* Storing backups via MongoDB

**.env needs:**

```env
MONGODB_URI=
EMAIL_USER=
EMAIL_PASS=
```

---

## 📁 Key Files & Structure

```
src/
├── App.jsx                  # Main app routing
├── main.jsx                 # App bootstrap
├── pages/
│   ├── Hero/
│   ├── Contact/
│   └── Admin/
├── components/
│   ├── EnhancedPortfolioCard.jsx
│   ├── globe.jsx            # IconCloud
│   └── ui/                  # Primitives: Card, Button, Badge
├── utils/
│   ├── downloadResume.js
│   └── firebaseTest.js
├── firebase/
│   └── config.js
```

---

## ☁️ Deployment

### Recommended Hosts

* **Vercel** (already configured with `vercel.json`)
* **Netlify**

### Production Checklist

✅ Run:

```bash
npm run build
```

✅ Set environment variables securely
✅ Never commit `.env` or Firebase secrets

---

## 🧯 Troubleshooting

| Issue                     | Fix                                                               |
| ------------------------- | ----------------------------------------------------------------- |
| **Missing env vars**      | Check `.env.example`                                              |
| **Firebase auth issues**  | See `Login.jsx` and `firebase/config.js`                          |
| **Tailwind not applying** | Confirm `tailwind.config.js` content paths: `./src/**/*.{js,jsx}` |

---

## 🤝 Contributing

1. Follow existing component structure under `src/components` and `src/pages`
2. Create small, composable components
3. Run linter and follow project conventions

```bash
# (Add lint script in package.json if needed)
npm run lint
```

---

## 🧪 Suggestions

If you want, you can add:

* Deployment guide for Vercel/Netlify
* GitHub Actions CI/CD workflow
* Extended `.env.example` with all required keys
* A `CONTRIBUTING.md` file for collaborators

---
