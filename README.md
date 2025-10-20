## 🚀 Features

- ⚡️ Next.js (App Router)
- 🎨 Material UI components
- 💨 Tailwind CSS styling
- 🌐 Axios for API requests
- 📝 React Hook Form for form management and validation
- 🔐 Environment variables via `.env.local`

---

## 🧰 Prerequisites

Before running the project, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 18 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)

---

## ⚙️ Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/SanaNiayeshnia/SamaRayaneh-Interview.git
   ```

2. **Navigate into the project directory:**

   ```bash
   cd SamaRayaneh-Interview
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```
   or
   ```bash
   yarn
   ```

---

## 🔑 Environment Variables

This project uses a local environment file named `.env.local`.

Create a file named `.env.local` in the root of your project and add the following variable:

```env
NEXT_PUBLIC_BASE_URL=https://api.samateb.ir/API
```

---

## 🧩 Running the Project

### 🧠 Development Mode

Start the development server:

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

### 🏗️ Production Build

To build for production:

```bash
npm run build
```

To run the production build:

```bash
npm start
```

---

## 🧱 Folder Structure

```

├── app/                          # Main Next.js app directory
│   ├── _components/              # Reusable UI components
│   │   ├── dashboard/            # Dashboard-related components
│   │   ├── login/                # Login-related components
│   │   ├── patientManagement/    # Patient management components
│   │   └── ui/                   # Generic UI components (buttons, modals, etc.)
│   │
│   ├── _lib/                     # Utility and helper functions
│   │   ├── actions.js
│   │   ├── data_services.js
│   │   ├── request.js
│   │   ├── utils.js
│   │   └── variables.js
│   │
│   ├── _providers/               # Global context and providers
│   │   ├── contexts/             # React context files
│   │   └── MUIThemeProvider.jsx  # Material UI theme provider
│   │
│   ├── dashboard/                # Dashboard route folder
│   │   └── patient-management/   #Patient management route folder
│   │
│   ├── globals.css               # Global CSS styles
│   ├── icon.png                  # App icon
│   ├── layout.js                 # Root layout component
│   ├── loading.js                # Loading state component
│   ├── not-found.js              # 404 page
│   └── page.js                   # Main entry page

```
