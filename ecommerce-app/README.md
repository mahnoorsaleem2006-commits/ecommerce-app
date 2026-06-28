# ShopNest — eCommerce Frontend

> IT-Simplera Institute | Week 01 Assignment  
> Frontend Web Development Internship  
> Deadline: 03 July 2026

## Overview

A fully responsive eCommerce web interface built with React + Vite + TailwindCSS, matching the provided Figma design reference. No backend — strictly static frontend.

## Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero banner, featured products, category pills, promo banners |
| Product Listing | `/products` | Filterable grid with category sidebar, sort, price range |
| Product Detail | `/products/:id` | Image gallery, quantity selector, add-to-cart, related products |
| Cart | `/cart` | Item list, quantity controls, order summary, checkout |

## Tech Stack

- **React 18** — component-based UI
- **Vite** — fast dev server and bundler
- **TailwindCSS** — utility-first styling
- **React Router DOM v6** — client-side routing
- **React Context + useReducer** — cart state management

## Folder Structure

```
src/
├── assets/
├── components/
│   ├── layout/       # Navbar, Footer, Layout
│   └── ui/           # Button, Badge, StarRating, ProductCard
├── data/
│   └── products.js   # 12 mock products
├── hooks/
│   └── useCart.jsx   # Cart context + reducer
├── pages/
│   ├── Home.jsx
│   ├── ProductListing.jsx
│   ├── ProductDetail.jsx
│   └── Cart.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## Setup & Run

```bash
# 1. Clone the repo
git clone https://github.com/YOUR_USERNAME/ecommerce-app.git
cd ecommerce-app

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev

# 4. Open browser
# http://localhost:5173
```

## Features

- ✅ Fully responsive (mobile 375px / tablet 768px / desktop 1280px)
- ✅ Sticky navbar with mobile hamburger menu
- ✅ Live cart counter in navbar
- ✅ Category filter sidebar (slide-in on mobile)
- ✅ Sort by price, rating, name
- ✅ Price range slider
- ✅ Product search
- ✅ Quantity selector with add to cart
- ✅ Persistent cart across pages (React Context)
- ✅ Free shipping threshold indicator
- ✅ Out-of-stock handling

## Reference Design

Ecommerce Web Design — Figma Community Template  
[View Figma File](https://www.figma.com/design/8IGr4IzIG1bE1ko7gOyNQP/Ecommerce-Web-Design--Community-)

## Author

Built by: [Your Name]  
Institute: IT-Simplera Institute  
Instructor: Nisar Ali (Frontend Web Developer)
