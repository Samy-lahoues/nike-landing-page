# ✨ Nike App - Animated Landing Page ✨

<div align="center">

![Nike Logo Animation](https://img.shields.io/badge/Nike-Animated_Landing_Page-FF6452?style=for-the-badge&logo=nike&logoColor=white)
![React](https://img.shields.io/badge/React-18+-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8+-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

**🚀 A stunning, fully animated Nike-inspired landing page with breathtaking CSS animations and smooth scroll-triggered effects!**

[🌟 Live Demo](https://your-demo-link.com) • [📚 Documentation](#-features) • [🎨 Animations Preview](#-animation-features)

</div>

---

## 🎬 Animation Features

This Nike landing page brings your browsing experience to life with **cutting-edge CSS animations**:

### 🎭 **Hero Section - Special Effects**
- 🌟 **3D Flip Animation**: "Nike" text rotates with stunning 3D effects
- ✨ **Bouncing Glow Effect**: Continuous pulsing glow on brand text
- 🎯 **Elastic Bounce Transitions**: Smooth, bouncy element reveals
- 📝 **Typewriter Effect**: Text appears as if being typed in real-time
- 🎪 **Staggered Element Reveals**: Each element appears with perfect timing

### 🎨 **Scroll-Triggered Animations**
- 🌊 **Right-to-Left Slide**: Text smoothly glides in from the right
- 👀 **Intersection Observer**: Smart scroll detection for performance
- ⚡ **Smooth Transitions**: Buttery-smooth 60fps animations
- 🎬 **Cinematic Timing**: Perfectly timed animation sequences

### 🎪 **Interactive Elements**
- 🎯 **Hover Effects**: Dynamic scaling and movement on interaction
- 💫 **Floating Animations**: Subtle floating effects on cards
- 🎭 **Morphing Buttons**: Buttons that transform on hover
- 🌈 **Color Transitions**: Smooth color changes throughout

### 📱 **Responsive Animations**
- 📋 **Mobile-Optimized**: Animations adapt to screen size
- ⚙️ **Performance First**: GPU-accelerated transforms
- 🔧 **Accessibility**: Respects `prefers-reduced-motion`

---

## 🏗️ **Architecture & Tech Stack**

<div align="center">

| Technology | Purpose | Version |
|------------|---------|---------|
| ⚛️ **React** | UI Framework | 19.1.1 |
| 🏷️ **TypeScript** | Type Safety | 5.8.3 |
| 🎨 **Tailwind CSS** | Styling | 4.1.12 |
| ⚡ **Vite** | Build Tool | 7.1.2 |
| 🎭 **Custom CSS** | Animations | Latest |

</div>

---

## ✨ **Features**

### 🎯 **Core Features**
- 🏃‍♂️ **Responsive Design** - Flawless on all devices
- 🎨 **Modern UI/UX** - Nike-inspired premium design
- 📦 **Product Showcase** - Animated product galleries
- 💎 **Premium Quality** - Smooth, professional animations
- 👥 **Customer Reviews** - Animated testimonials
- 📧 **Newsletter** - Interactive subscription forms
- 🛍️ **Services Section** - Animated service cards

### 🎬 **Animation Sections**
- 🏠 **Hero** - Multi-layered special effects
- 🌟 **Special Offer** - Right-to-left text reveals
- 💎 **Super Quality** - Smooth slide animations
- 📊 **Statistics** - Staggered number animations
- 🗣️ **Testimonials** - Fade and slide effects

---

## 🚀 **Quick Start**

```bash
# 📥 Clone the repository
git clone https://github.com/Samy-lahoues/nike-landing-page
cd nike-app

# 📦 Install dependencies
npm install

# 🚀 Start development server
npm run dev

# 🌐 Open http://localhost:5173
```

---

## 🎨 **Animation Showcase**

### 🎭 **Hero Section Animations**
```css
/* 3D Nike Text Flip */
.heroTitleLine2 {
    transform: rotateX(90deg);
    animation: 3d-flip-glow 1s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

/* Bouncing Glow Effect */
@keyframes bounceGlow {
    0% { transform: scale(1); text-shadow: 0 0 10px rgba(255, 100, 82, 0.3); }
    100% { transform: scale(1.05); text-shadow: 0 0 20px rgba(255, 100, 82, 0.6); }
}
```

### 🌊 **Scroll-Triggered Animations**
```javascript
// Intersection Observer for smooth scroll animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.setAttribute('data-animated', 'true');
        }
    });
}, { threshold: 0.1, rootMargin: '50px' });
```

---

## 📁 **Project Structure**

```
nike-app/
├── 🎨 src/
│   ├── 🧩 components/
│   │   ├── sections/          # Animated page sections
│   │   │   ├── Hero.tsx       # ✨ Special effects hero
│   │   │   ├── SpecialOffer.tsx # 🌊 Right-to-left animations
│   │   │   └── SuperQuality.tsx # 💫 Smooth slides
│   │   └── ui/                # Reusable animated components
│   ├── 🎭 constants/          # Animation configurations
│   ├── 🎨 index.css          # Custom animation styles
│   └── ⚛️ App.tsx            # Main app orchestrator
├── 🎪 public/                # Static assets
└── 📋 Configuration files
```

---

## 🎯 **Animation Performance**

- ⚡ **60 FPS** - Buttery smooth animations
- 🖥️ **GPU Accelerated** - Uses transform and opacity
- 📱 **Mobile Optimized** - Lightweight on mobile devices
- ♿ **Accessible** - Respects motion preferences
- 🔄 **Intersection Observer** - Efficient scroll detection

---

## 🛠️ **Development Commands**

```bash
npm run dev      # 🚀 Start development server
npm run build    # 📦 Build for production
npm run preview  # 👀 Preview production build
npm run lint     # 🔍 Code quality check
```

---

## 🎨 **Animation Customization**

### 🎭 **Adding New Animations**
1. Create animation keyframes in `src/index.css`
2. Add trigger classes to your components
3. Use Intersection Observer for scroll detection
4. Test across devices for smooth performance

### 🎪 **Performance Tips**
- Use `transform` and `opacity` for smooth animations
- Avoid animating `width`, `height`, or `top/left`
- Implement `will-change` for complex animations
- Test on lower-end devices

---

## 🤝 **Contributing**

We love contributions! Here's how you can help:

1. 🍴 **Fork** the project
2. 🌿 **Create** your feature branch (`git checkout -b feature/AmazingAnimation`)
3. 🎨 **Add** your stunning animations
4. 💾 **Commit** your changes (`git commit -m 'Add amazing animation'`)
5. 📤 **Push** to the branch (`git push origin feature/AmazingAnimation`)
6. 🔄 **Open** a Pull Request

---

## 👨‍💻 **Author**

<div align="center">

**Samy Lahoues** - *Animation Enthusiast & Frontend Developer*

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Samy-lahoues)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/samy-dev-821a74322)

*"Bringing websites to life, one animation at a time!"* ✨

</div>

---

## 🙏 **Acknowledgments**

- 🏃‍♂️ **Nike** - For incredible design inspiration
- ⚛️ **React Team** - For the amazing framework
- 🎨 **Tailwind CSS** - For the utility-first approach
- ⚡ **Vite** - For lightning-fast development
- 🌟 **Animation Community** - For endless inspiration

---

<div align="center">

**⭐ If this animated landing page amazed you, please give it a star! ⭐**

![Visitor Count](https://visitor-badge.laobi.icu/badge?page_id=samy-lahoues.nike-landing-page)
![Stars](https://img.shields.io/github/stars/samy-lahoues/nike-landing-page?style=social)

*Made with ❤️ and lots of CSS animations*

</div>