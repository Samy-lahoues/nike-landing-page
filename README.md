# Nike App 🏃‍♂️

A modern, responsive Nike-inspired web application built with React, TypeScript, and Tailwind CSS. This project showcases a sleek e-commerce interface with beautiful design and smooth user experience.

## 📸 Screenshots

![App Screenshot](.public/screenshot.png)


## ✨ Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI/UX**: Clean and intuitive interface inspired by Nike's design language
- **Product Showcase**: Display popular products with elegant cards
- **Quality Sections**: Highlight product quality and special offers
- **Customer Reviews**: Social proof through customer testimonials
- **Newsletter Subscription**: Email subscription functionality
- **Services Section**: Showcase company services and benefits
- **Dark Theme Support**: Beautiful dark mode implementation

## 🛠️ Tech Stack

- **Frontend**: React 19.1.1
- **Language**: TypeScript 5.8.3
- **Styling**: Tailwind CSS 4.1.12
- **Build Tool**: Vite 7.1.2
- **UI Components**:
  - Radix UI
  - Shadcn/ui
  - Lucide React (icons)
- **Utilities**:
  - clsx & tailwind-merge for conditional styling
  - class-variance-authority for component variants

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd nike-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## 🏗️ Project Structure

```
nike-app/
├── public/              # Static assets
├── src/
│   ├── assets/         # Images, icons, etc.
│   ├── components/     # React components
│   │   ├── layout/     # Layout components (Navbar, etc.)
│   │   ├── sections/   # Page sections (Hero, Products, etc.)
│   │   └── ui/         # Reusable UI components
│   ├── constants/      # App constants
│   ├── lib/           # Utility functions
│   ├── App.tsx        # Main app component
│   ├── main.tsx       # App entry point
│   └── index.css      # Global styles
├── components.json     # Shadcn/ui config
├── tailwind.config.js  # Tailwind configuration
└── vite.config.ts     # Vite configuration
```

## 🎨 Components

### Layout Components
- **Navbar**: Navigation bar with responsive menu
- **Footer**: Site footer with links and information

### Section Components
- **Hero**: Main landing section with call-to-action
- **PopularProducts**: Showcase of popular Nike products
- **SuperQuality**: Product quality highlights
- **SpecialOffer**: Special deals and promotions
- **CustomerReviews**: Customer testimonials
- **Services**: Company services and benefits
- **Subscribe**: Newsletter subscription

## 🎯 Features in Detail

### Responsive Design
The application is fully responsive and optimized for:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktop (1024px+)
- Large screens (1440px+)

### Performance Optimized
- Vite for fast build times and HMR
- TypeScript for type safety
- ESLint for code quality
- Optimized images and assets

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Samy Lahoues**

- GitHub: [@samylahoues](https://github.com/samylahoues)
- LinkedIn: [samy-lahoues](https://linkedin.com/in/samy-lahoues)

## 🙏 Acknowledgments

- Nike for design inspiration
- React team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Vite for the fast build tool
- All the open-source contributors

---

⭐ If you found this project helpful, please give it a star!
