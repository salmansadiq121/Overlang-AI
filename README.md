# Quiz Wise Insight - Next.js Health Assessment Platform

A modern, AI-powered health assessment platform built with **Next.js 14+**, featuring an interactive chat-based quiz system for personalized health recommendations.

## 🚀 Features

- **Next.js 14+ App Router**: Modern React framework with server components
- **Interactive Chat Interface**: Conversational quiz experience with real-time messaging
- **Multiple Question Types**: Support for sliders, multiple choice, single choice, text input, and number input
- **Advanced State Management**: Zustand with persistence and optimistic updates
- **Responsive Design**: Fully responsive across all device sizes
- **Modern UI**: Built with shadcn/ui components and Tailwind CSS
- **TypeScript**: Full type safety throughout the application
- **Accessibility**: WCAG 2.1 AA compliant with proper ARIA labels and keyboard navigation
- **Dark/Light Mode**: Theme switching support with next-themes
- **Performance Optimized**: Bundle analysis, code splitting, and Core Web Vitals optimization
- **Testing Ready**: Jest and Testing Library setup with coverage reporting
- **Professional Tooling**: ESLint, Prettier, Husky pre-commit hooks

## 🛠 Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Language**: TypeScript
- **State Management**: Zustand with persistence
- **Data Fetching**: TanStack Query (React Query)
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Testing**: Jest + Testing Library
- **Linting**: ESLint + Prettier
- **Package Manager**: npm

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd quiz-wise-insight-nextjs
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 🏗 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles with Tailwind
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx          # Home page
│   ├── loading.tsx       # Loading UI
│   ├── error.tsx         # Error UI
│   ├── not-found.tsx     # 404 page
│   └── providers.tsx     # App providers (Theme, Query, etc.)
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   └── quiz/             # Quiz-specific components
│       ├── QuizEngine.tsx    # Main quiz orchestrator
│       ├── ChatInterface.tsx # Chat messaging interface
│       ├── QuizHeader.tsx    # Header with progress
│       └── QuizProgress.tsx  # Progress indicator
├── data/                 # Static data
│   └── quizQuestions.ts  # Quiz questions configuration
├── hooks/                # Custom React hooks
│   └── use-toast.ts      # Toast notification hook
├── lib/                  # Utility functions
│   └── utils.ts          # Common utilities
├── store/                # State management
│   └── quiz-store.ts     # Zustand store
└── types/                # TypeScript type definitions
    └── quiz.ts           # Quiz-related types
```

## 🎯 Key Components

### QuizEngine
The main component that orchestrates the entire quiz experience, managing state and question flow with advanced animations.

### ChatInterface
Provides a WhatsApp-like chat experience with message bubbles, typing indicators, and embedded question components.

### Question Components
- **QuizSlider**: Age selection with visual slider
- **QuizMultiChoice**: Multiple selection checkboxes
- **QuizSingleChoice**: Single selection buttons
- **QuizTextInput**: Text and number input fields

## 🎨 Styling & Design

The application uses a comprehensive design system with:
- **Color System**: HSL-based color variables for consistent theming
- **Typography**: Inter font with proper hierarchy and font loading optimization
- **Spacing**: 8px grid system for consistent spacing
- **Components**: shadcn/ui components with custom styling
- **Animations**: Framer Motion with spring physics and reduced motion support
- **Accessibility**: High contrast support and screen reader optimization

## 📱 Responsive Design

The application is fully responsive with breakpoints for:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## ♿ Accessibility

- WCAG 2.1 AA compliant
- Proper ARIA labels and roles
- Keyboard navigation support
- Screen reader friendly
- High contrast color ratios
- Focus management
- Reduced motion support

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
# Deploy to Vercel
```

### Other Platforms
```bash
npm run build
npm start
```

## 🔧 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run type-check` - Run TypeScript type checking
- `npm run test` - Run tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Run tests with coverage
- `npm run analyze` - Analyze bundle size
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage

# Type checking
npm run type-check
```

## 📊 Performance

- **Core Web Vitals**: Optimized for excellent performance scores
- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic code splitting with Next.js App Router
- **Bundle Analysis**: Use `npm run analyze` to analyze bundle size
- **Caching**: Optimized caching strategies for static and dynamic content

## 🔒 Security

- **Content Security Policy**: Configured security headers
- **XSS Protection**: Built-in Next.js security features
- **HTTPS**: Enforced in production
- **Input Validation**: Zod schema validation
- **Sanitization**: Proper data sanitization

## 🌍 SEO & Meta

- **Structured Data**: JSON-LD schema markup
- **Open Graph**: Social media optimization
- **Twitter Cards**: Twitter-specific meta tags
- **Sitemap**: Automatic sitemap generation
- **Robots.txt**: Search engine optimization

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support, please open an issue in the GitHub repository or contact the development team.

---

**Built with ❤️ using Next.js 14+, Tailwind CSS, and shadcn/ui**