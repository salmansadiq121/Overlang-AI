# Quiz Wise Insight - Next.js Health Assessment Platform

A modern, AI-powered health assessment platform built with Next.js 14, featuring an interactive chat-based quiz system for personalized health recommendations.

## 🚀 Features

- **Interactive Chat Interface**: Conversational quiz experience with real-time messaging
- **Multiple Question Types**: Support for sliders, multiple choice, single choice, text input, and number input
- **Responsive Design**: Fully responsive across all device sizes
- **Modern UI**: Built with shadcn/ui components and Tailwind CSS
- **TypeScript**: Full type safety throughout the application
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation
- **Dark/Light Mode**: Theme switching support with next-themes

## 🛠 Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Language**: TypeScript
- **State Management**: React Query (TanStack Query)
- **Icons**: Lucide React
- **Animations**: Tailwind CSS animations

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd quiz-wise-insight-nextjs
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 🏗 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx          # Home page
│   ├── not-found.tsx     # 404 page
│   └── providers.tsx     # App providers
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── ChatInterface.tsx # Chat messaging interface
│   ├── QuizEngine.tsx    # Main quiz logic
│   ├── QuizSlider.tsx    # Slider question component
│   ├── QuizMultiChoice.tsx # Multiple choice component
│   ├── QuizSingleChoice.tsx # Single choice component
│   └── QuizTextInput.tsx # Text input component
├── data/                 # Static data
│   └── quizQuestions.ts  # Quiz questions configuration
├── hooks/                # Custom React hooks
│   └── use-toast.ts      # Toast notification hook
├── lib/                  # Utility functions
│   └── utils.ts          # Common utilities
└── types/                # TypeScript type definitions
    └── quiz.ts           # Quiz-related types
```

## 🎯 Key Components

### QuizEngine
The main component that orchestrates the entire quiz experience, managing state and question flow.

### ChatInterface
Provides a WhatsApp-like chat experience with message bubbles, typing indicators, and embedded question components.

### Question Components
- **QuizSlider**: Age selection with visual slider
- **QuizMultiChoice**: Multiple selection checkboxes
- **QuizSingleChoice**: Single selection buttons
- **QuizTextInput**: Text and number input fields

## 🎨 Styling

The application uses a comprehensive design system with:
- **Color System**: HSL-based color variables for consistent theming
- **Typography**: Inter font with proper hierarchy
- **Spacing**: 8px grid system for consistent spacing
- **Components**: shadcn/ui components with custom styling
- **Animations**: Smooth transitions and micro-interactions

## 📱 Responsive Design

The application is fully responsive with breakpoints for:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## ♿ Accessibility

- WCAG 2.1 AA compliant
- Proper ARIA labels and roles
- Keyboard navigation support
- Screen reader friendly
- High contrast color ratios

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

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file for environment-specific configurations:
```env
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### Tailwind Configuration
The `tailwind.config.js` includes custom colors, animations, and component styles.

## 📊 Performance

- **Core Web Vitals**: Optimized for excellent performance scores
- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic code splitting with Next.js
- **Bundle Analysis**: Use `npm run build` to analyze bundle size

## 🧪 Testing

```bash
# Run tests (when implemented)
npm test

# Run linting
npm run lint
```

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

**Built with ❤️ using Next.js 14, Tailwind CSS, and shadcn/ui**