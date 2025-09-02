# 📁 ENERPY Project Folder Structure

## 🎯 **Improved Organization with React Best Practices**

The project has been restructured to follow React and modern web development best practices, with each page in its own folder containing an `index.tsx` file.

## 📂 **New Pages Structure**

```
src/pages/
├── index/                    # Home page
│   └── index.tsx            # Main landing page
├── que-hacemos/             # What We Do page
│   └── index.tsx            # Company services & solutions
├── tecnologia/               # Technology page
│   └── index.tsx            # RMO® technology details
├── historia/                 # History page
│   └── index.tsx            # Company history & milestones
├── contribuir/               # Contribute page
│   └── index.tsx            # How to contribute/support
├── contacto/                 # Contact page
│   └── index.tsx            # Contact form & information
└── not-found/                # 404 Error page
    └── index.tsx            # Page not found component
```

## 🏗️ **Benefits of This Structure**

### **1. Better Organization**
- Each page has its own dedicated folder
- Clear separation of concerns
- Easy to find and maintain page-specific code

### **2. Scalability**
- Easy to add page-specific components
- Can include page-specific styles, tests, or utilities
- Better for larger applications

### **3. React Best Practices**
- Follows the `index.tsx` pattern
- Cleaner import statements
- Better lazy loading support

### **4. Developer Experience**
- Intuitive folder navigation
- Easier to understand project structure
- Better for team collaboration

## 🔄 **Import Paths Updated**

### **Before (Old Structure)**
```typescript
// App.tsx
const Index = lazy(() => import("./pages/Index"));
const WhatWeDo = lazy(() => import("./pages/WhatWeDo"));
const Technology = lazy(() => import("./pages/Technology"));
```

### **After (New Structure)**
```typescript
// App.tsx
const Index = lazy(() => import("./pages/index"));
const WhatWeDo = lazy(() => import("./pages/que-hacemos"));
const Technology = lazy(() => import("./pages/tecnologia"));
```

## 📝 **Page Components Structure**

Each page follows this consistent pattern:

```typescript
// src/pages/[page-name]/index.tsx
import [ComponentName] from "@/components/[ComponentName]";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import Navbar from "@/components/Navbar";

const [PageName] = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <[ComponentName] />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default [PageName];
```

## 🧭 **Navigation Structure**

All pages now include:
- **Navbar** - Fixed navigation at the top with responsive design
- **Main Content** - Page-specific component(s)
- **Footer** - Consistent footer across all pages
- **ScrollToTop** - Back-to-top functionality

### **Navbar Features**
- ✅ **Responsive design** - Mobile and desktop navigation
- ✅ **Transparent to solid** - Background changes on scroll
- ✅ **Smooth transitions** - Professional animations
- ✅ **All routes included** - Navigation to all main pages
- ✅ **Brand consistency** - ENERPY logo and styling

## 🎨 **Components Organization**

```
src/components/
├── ui/                       # Reusable UI components (shadcn/ui)
├── environmental/            # Environmental-specific components
├── [ComponentName].tsx      # Main feature components
└── ErrorBoundary.tsx         # Error handling component
```

## 🚀 **Adding New Pages**

To add a new page:

1. **Create folder**: `src/pages/[page-name]/`
2. **Create index file**: `src/pages/[page-name]/index.tsx`
3. **Add route**: Update `src/App.tsx` with new route
4. **Add navigation**: Update navbar/links

### **Example: Adding a Blog Page**
```bash
mkdir src/pages/blog
touch src/pages/blog/index.tsx
```

```typescript
// src/pages/blog/index.tsx
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Blog = () => {
  return (
    <div className="min-h-screen">
      <BlogSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Blog;
```

## 🔧 **Build & Development**

The new structure maintains all production optimizations:

- ✅ **Production build**: `npm run build:prod`
- ✅ **Development server**: `npm run dev`
- ✅ **Code splitting**: Automatic chunk optimization
- ✅ **Lazy loading**: Page-level code splitting
- ✅ **PWA support**: Service worker & manifest
- ✅ **Compression**: Gzip & Brotli enabled

## 📊 **Performance Impact**

- **No performance degradation** from restructuring
- **Better tree shaking** with cleaner imports
- **Improved caching** with logical chunk organization
- **Faster development** with better file organization

## 🎯 **Next Steps for Development**

1. **Add page-specific components** in respective folders
2. **Create page-specific styles** if needed
3. **Add page-specific tests** in the same structure
4. **Consider adding page-specific utilities** for complex pages

## 🏆 **Best Practices Maintained**

- ✅ **TypeScript strict mode** enabled
- ✅ **ESLint configuration** optimized
- ✅ **Component composition** pattern
- ✅ **Error boundaries** implemented
- ✅ **Performance optimization** maintained
- ✅ **SEO optimization** preserved
- ✅ **PWA features** functional

This new structure makes the ENERPY project more maintainable, scalable, and follows industry best practices while preserving all the production-ready optimizations! 🚀

## 🎨 **Hero Components**

All pages now include beautiful hero sections with **NO DUPLICATE CONTENT**:

### **1. Main Index Page**
- **HeroSection** - Full-screen hero with animated slogans
- **MainHero** - Welcome section with mountain background
- **WhatWeDoSection** - Main content (no duplicate headers)

### **2. What We Do Page (`/que-hacemos`)**
- **WhatWeDoHero** - Technology conversion background
- **WhatWeDoSection** - Main content with features (no duplicate headers)

### **3. Technology Page (`/tecnologia`)**
- **TechnologyHero** - Reactor technology background
- **TechnologySection** - RMO® technology details (no duplicate headers)

### **4. History Page (`/historia`)**
- **HistoryHero** - Nature/tree background
- **HistorySection** - Company history content (no duplicate headers)

### **5. Contribute Page (`/contribuir`)**
- **ContributeHero** - Green landscape background
- **ContributeSection** - How to contribute (no duplicate headers)

### **6. Contact Page (`/contacto`)**
- **ContactHero** - Nature background
- **Contact** - Contact form and information (no duplicate headers)

## 🚫 **Duplicate Content Removed**

To avoid information duplication, the following headers were removed from main content components:

- ✅ **TechnologySection** - Removed "Tecnología RMO®" header
- ✅ **HistorySection** - Removed "Historia de Enerpy" header  
- ✅ **ContributeSection** - Removed "Contribuir con Enerpy" header
- ✅ **Contact** - Removed "Contáctanos" header
- ✅ **WhatWeDoSection** - Removed TechnologyInAction component with duplicate title

## 🎯 **Result: Clean, Non-Duplicated Content**

Now each page has:
1. **Hero section** - Beautiful, themed introduction with background image
2. **Main content** - Direct content without duplicate headers
3. **Professional flow** - Seamless transition from hero to content
4. **Better UX** - No repetitive information for users
