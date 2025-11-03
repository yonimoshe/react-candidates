# React Candidates Table

A small React + TypeScript application built with **Vite**, showcasing dynamic filtering logic with conditional dependencies between inputs.

---

## 🎯 Overview
This project renders a table of candidates and allows filtering by multiple fields with real-time updates and simple conditional logic between filters.  

---

### 🖥 Frontend (Focus)
- React 19 + TypeScript  
- Vite 7  
- CSS  
- JSON Server for mock API simulation

## 🧩 Features

### Table
- Displays static mock data
- Columns: `name`, `email`, `position`, `status`, `experienceYears`

### Filters
- **Name** — Text input  
- **Position** — Select dropdown  
- **Status** — Select dropdown  
- **Years of Experience** — Number input  

### Conditional Logic
- `Position` filter is **disabled** until `Name` is filled
- `Status` filter is **disabled** until `Position` is selected
- `Years of Experience` filter is **always enabled**

### Behavior
- Filters update the table **in real time**
- Filters are **combinable**
- **Debounce (350ms)** on the `Name` field
- Includes **Loading**, **Error**, and **Empty State** components

---

## ⚙️ Tech Stack
- **React 19+**
- **Vite**
- **TypeScript**
- **Vitest** (for unit tests)
- **CSS**
- **JSON Server** 

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/YoniMoshe/react-candidates.git
cd react-candidates
```

### 2. Setup environment variables
Create a `.env` file in the project root:

```bash
VITE_API_BASE_URL=http://localhost:4000

```

### Run local mock server
```bash
npm run server
# Serves db.json at http://localhost:4000
```

### 3. Start the app
```bash
npm install
npm run dev
# runs on http://localhost:5173
```

### 4. Build & Preview
```bash
npm run build
npm run preview
```

---


## 👤 Author
Developed by **Yoni Moshe**
```

---