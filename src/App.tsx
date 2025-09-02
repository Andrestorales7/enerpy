import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorBoundary from "@/components/ErrorBoundary";

// Lazy load route components - now using folder structure with index files
const Index = lazy(() => import("./pages/index"));
const NotFound = lazy(() => import("./pages/not-found"));
const Technology = lazy(() => import("./pages/tecnologia"));
const History = lazy(() => import("./pages/historia"));
const Contribute = lazy(() => import("./pages/contribuir"));
const Contact = lazy(() => import("./pages/contacto"));
const WhatWeDo = lazy(() => import("./pages/que-hacemos"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3,
      retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes
    },
  },
});

const App = () => (
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-br from-enerpy-primary to-enerpy-dark">
              <div className="text-center text-white">
                <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-white mx-auto mb-4"></div>
                <p className="text-lg font-semibold">Cargando ENERPY...</p>
              </div>
            </div>
          }>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/que-hacemos" element={<WhatWeDo />} />
              <Route path="/tecnologia" element={<Technology />} />
              <Route path="/historia" element={<History />} />
              <Route path="/contribuir" element={<Contribute />} />
              <Route path="/contacto" element={<Contact />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);

export default App;
