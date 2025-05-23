import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "./components/ui/sonner";
import { WeatherDashboard } from "./pages/weather-dashboard";
import { Layout } from "./components/layout";
import { ThemeProvider } from "./context/theme-provider";
import { BrowserRouter,Navigate, Route, Routes } from "react-router-dom";
import { CityPage } from "./pages/city-page";
import { Analytics } from '@vercel/analytics/react';
 

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ThemeProvider defaultTheme="dark">
          <Layout>
            <Routes>
              <Route path="/" element={<WeatherDashboard />} />
              <Route path="/city/:cityName" element={<CityPage />} />
             <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </Layout>
          <Toaster richColors />
          <Analytics /> 
        </ThemeProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
