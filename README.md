# SmashChat Website

A modern, responsive website for SmashChat - Africa's own chat and marketplace app that combines messaging, social networking, and e-commerce in one seamless platform.

## Project Overview

SmashChat is a marketing website showcasing a revolutionary application that blends social communication with marketplace functionality, specifically designed for African users. The website features multiple pages highlighting the app's features, mission, and value proposition.

## Features

- **Responsive Design** - Fully responsive across all devices (mobile, tablet, desktop)
- **Multi-page Navigation** - Five distinct pages with smooth routing
- **Interactive Elements** - Carousel testimonials, hover effects, and smooth animations
- **Modern UI/UX** - Clean design with consistent branding and visual hierarchy
- **Performance Optimized** - Fast loading times and smooth scrolling

## Tech Stack

- **React 19.1.1** - UI library
- **React Router DOM 7.9.5** - Client-side routing
- **Vite 7.1.7** - Build tool and dev server
- **Tailwind CSS 3.4.18** - Utility-first CSS framework
- **Embla Carousel 8.6.0** - Carousel/slider functionality
- **Lucide React 0.552.0** - Icon library

## Project Structure

```
smashchat/
│
├── public/                          # Static assets
│   ├── images/                      # All image assets
│   └── icons/                       # SVG icons
│
├── src/
│   ├── assets/                      # Additional assets
│   │
│   ├── component/                   # React components
│   │   ├── AboutFeatureSection.jsx
│   │   ├── AboutHeroSection.jsx
│   │   ├── BecomeAVendorButton.jsx
│   │   ├── BecomeAVendorFeatureSection.jsx
│   │   ├── BecomeAVendorHero.jsx
│   │   ├── DownloadAppButton.jsx
│   │   ├── FeaturesHero.jsx
│   │   ├── FeaturesPageFeatureSection.jsx
│   │   ├── FeaturesPageSingleImageSection.jsx
│   │   ├── Footer.jsx
│   │   ├── HeroSection.jsx
│   │   ├── HomeCTASection.jsx
│   │   ├── HowItWorksCTASection.jsx
│   │   ├── HowItWorksFeatureSection.jsx
│   │   ├── HowItWorksHero.jsx
│   │   ├── ImageGrid.jsx
│   │   ├── ImageGridAboutPage.jsx
│   │   ├── ImageGridHomePage.jsx
│   │   ├── MarketplaceSpotlightSection.jsx
│   │   ├── Navbar.jsx
│   │   ├── OurMissionSection.jsx
│   │   ├── OurStorySection.jsx
│   │   ├── OurVisionSection.jsx
│   │   ├── QRCodeContainer.jsx
│   │   ├── SignupSection.jsx
│   │   ├── StarsDecoration.jsx
│   │   ├── StarsDecorationWhite.jsx
│   │   ├── SyncContactsSection.jsx
│   │   ├── TestimonialsSection.jsx
│   │   └── WhySmashChatSection.jsx
│   │
│   ├── layouts/                     # Layout components
│   │   └── Layout.jsx
│   │
│   ├── pages/                       # Page components
│   │   ├── AboutUsPage.jsx
│   │   ├── BecomeAVendorPage.jsx
│   │   ├── FeaturesPage.jsx
│   │   ├── HomePage.jsx
│   │   └── HowItWorksPage.jsx
│   │
│   ├── App.jsx                      # Main app component
│   ├── main.jsx                     # App entry point
│   └── index.css                    # Global styles
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## Installation

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd smashchat
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality

## Pages

### 1. Home Page (`/`)
- Hero section with main value proposition
- Why SmashChat stands out
- Marketplace spotlight
- User testimonials
- Call-to-action section

### 2. About Us Page (`/about-us`)
- Hero section with company introduction
- Our Story
- Our Mission
- Our Vision
- Community-focused CTA

### 3. Features Page (`/features`)
- Features hero section
- Messaging capabilities
- Marketplace integration
- Secure payments
- Africa-focused design
- Network features

### 4. How It Works Page (`/how-it-works`)
- Step-by-step guide
- Sign up process
- Contact syncing
- Chat functionality
- Shopping integration
- Order tracking
- Privacy features

### 5. Become A Vendor Page (`/become-a-vendor`)
- Vendor onboarding information
- Shop setup guide
- Product management
- Promotion tools

## Third-Party Integrations

### Tawk.to Live Chat
The website integrates Tawk.to for real-time customer support:
- **Widget ID**: `691c1d40a845051957a978a2/1jaat4hhf`
- **Access**: Available via "Support" button in navigation
- **Functionality**: Clicking "Support" in the navbar maximizes the Tawk.to chat widget
- **Implementation**: Script loaded in `index.html`, controlled via Navbar component

## Components

### Layout Components
- **Navbar** - Site-wide navigation with mobile menu
- **Footer** - Footer with links and company info
- **Layout** - Wrapper component with scroll-to-top functionality

### Reusable Components
- **HeroSection** - Hero sections with various layouts
- **FeatureSection** - Feature showcase with phone mockups
- **CTASection** - Call-to-action sections with download buttons
- **TestimonialsSection** - Carousel-based testimonials
- **StarsDecoration** - Decorative star elements
- **QRCodeContainer** - QR code display component
- **DownloadAppButton** - Reusable download button
- **BecomeAVendorButton** - Vendor signup button

## Styling

### Tailwind CSS
- Utility-first approach for rapid development
- Custom color palette matching brand identity
- Responsive breakpoints:
  - `sm`: 640px
  - `md`: 768px
  - `lg`: 1024px
  - `xl`: 1280px
  - `2xl`: 1536px

### Design Principles
- Mobile-first responsive design
- Consistent spacing and typography
- Smooth transitions and hover effects
- Accessible color contrasts
- Brand colors: Primary Blue (#0096FF), Dark Text (#00212A)

## Assets

### Images
- Hero images and phone mockups
- User testimonial avatars
- Decorative elements (stars, curves)
- QR codes
- Icon sets

### Fonts
- Primary: Helvetica, Arial, sans-serif

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Optimized images for web
- Code splitting via React Router
- Lazy loading where applicable
- Minimal external dependencies

## Contributing

This is a private company project. If you're a team member:

1. **Clone the repository**
   ```bash
   git clone https://github.com/smashgroups247/smashchat.git
   cd smashchat
   ```

2. **Create a new branch**
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-bug-fix
   # or
   git checkout -b docs/update-readme
   ```

3. **Make your changes**
   - Follow the existing code structure and naming conventions
   - Ensure responsive design works across all breakpoints
   - Test on multiple devices and browsers
   - Keep components modular and reusable

4. **Commit your changes**
   ```bash
   git add .
   git commit -m "Description of changes"
   ```

5. **Push to your branch**
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Create a Pull Request**
   - Go to the repository on GitHub
   - Click "Pull Request"
   - Provide a clear description of changes
   - Request review from team members

### Branch Naming Conventions
- `feature/` - New features or enhancements
- `fix/` - Bug fixes
- `docs/` - Documentation updates
- `style/` - UI/styling changes

### Code Standards
- Use meaningful component and variable names
- Maintain consistent Tailwind CSS class ordering
- Comment complex logic
- Keep files under 500 lines when possible

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.

## Contact

For inquiries about SmashChat:
- Email: smashchat@gmail.com