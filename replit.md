# Creator Portfolio Blog - 創作者作品集部落格

## Overview

A tech-oriented creator portfolio blog built as a full-stack web application showcasing photography, video, design, and other creative works. The application features a modern, futuristic aesthetic with a content-first approach, emphasizing visual work presentation with seamless multimedia integration. Built with React for the frontend, Express for the backend, using in-memory storage for data persistence.

## Recent Changes

- **2024-12-04**: Initial MVP implementation
  - Created full frontend with React + TypeScript + Tailwind CSS
  - Implemented dark/light theme toggle
  - Built homepage with hero section and featured works grid
  - Created works gallery page with category filtering and search
  - Implemented work detail page with media display
  - Added about page with creator information
  - Set up backend API with Express.js
  - Added sample works data for demonstration

## User Preferences

- Preferred communication style: Simple, everyday language (Traditional Chinese)
- Design style: Tech-oriented with gradients and glassmorphism effects
- Target audience: Classmates/students to view creator's work

## Project Architecture

### Frontend Structure

```
client/src/
├── components/
│   ├── ui/              # Shadcn UI components
│   ├── navbar.tsx       # Navigation bar with theme toggle
│   ├── hero-section.tsx # Homepage hero section
│   ├── work-card.tsx    # Work item card component
│   ├── category-filter.tsx # Category filter buttons
│   ├── works-grid.tsx   # Works grid layout
│   ├── stats-section.tsx # Statistics display
│   ├── footer.tsx       # Site footer
│   ├── theme-provider.tsx # Theme context provider
│   └── theme-toggle.tsx # Dark/light mode toggle
├── pages/
│   ├── home.tsx         # Homepage
│   ├── works.tsx        # Works gallery page
│   ├── work-detail.tsx  # Individual work detail
│   ├── about.tsx        # About page
│   └── not-found.tsx    # 404 page
├── hooks/
│   ├── use-toast.ts     # Toast notification hook
│   └── use-mobile.tsx   # Mobile detection hook
├── lib/
│   ├── queryClient.ts   # TanStack Query setup
│   └── utils.ts         # Utility functions
├── App.tsx              # Main app with routing
├── main.tsx             # Entry point
└── index.css            # Global styles with theme variables
```

### Backend Structure

```
server/
├── index.ts             # Server entry point
├── routes.ts            # API routes
├── storage.ts           # Data storage (in-memory)
├── static.ts            # Static file serving
└── vite.ts              # Vite dev server integration
```

### Shared Types

```
shared/
└── schema.ts            # Type definitions and schemas
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/works | Get all works |
| GET | /api/works?featured=true | Get featured works |
| GET | /api/works?category=photo | Get works by category |
| GET | /api/works/:id | Get single work |
| POST | /api/works/:id/view | Increment view count |
| POST | /api/works | Create new work |
| PATCH | /api/works/:id | Update work |
| DELETE | /api/works/:id | Delete work |

## Data Models

### Work
```typescript
interface Work {
  id: string;
  title: string;
  description: string;
  category: "photo" | "video" | "design" | "illustration" | "3d" | "animation";
  mediaType: "image" | "video";
  mediaUrl: string;
  thumbnailUrl: string;
  tags: string[];
  viewCount: number;
  featured: boolean;
  createdAt: string;
}
```

## Key Features

1. **Homepage**
   - Hero section with gradient background and animated elements
   - Featured works grid with filtering
   - Statistics section showing work counts

2. **Works Gallery**
   - Full works listing with search and category filtering
   - Responsive grid layout (1/2/3 columns)
   - Work cards with hover effects

3. **Work Detail**
   - Full media display (image or video player)
   - Work metadata (category, type, views, date)
   - Share and download buttons
   - Related works suggestions
   - Previous/next navigation

4. **About Page**
   - Creator introduction
   - Skills showcase
   - Contact section

5. **Theme System**
   - Dark/light mode toggle
   - Persisted preference in localStorage
   - System preference detection

## Design System

- **Typography**: Inter (sans-serif), JetBrains Mono (monospace)
- **Colors**: Cyan-purple gradient accents on dark background
- **Effects**: Glassmorphism with backdrop-blur, subtle gradients
- **Spacing**: Consistent 4px grid system
- **Borders**: Rounded corners (rounded-xl for cards)

## Running the Application

```bash
npm run dev    # Start development server
npm run build  # Build for production
npm start      # Start production server
```

The application runs on port 5000.
