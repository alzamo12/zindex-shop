import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router'
import AppRouter from './AppRouter/AppRouter.jsx'
import MyContext from './Providers/MyContext.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import AuthProvider from './Providers/AuthProvider.jsx'

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <MyContext>
        <AuthProvider>
          <BrowserRouter>
            <AppRouter></AppRouter>
          </BrowserRouter>
        </AuthProvider>
      </MyContext>
    </QueryClientProvider>
  </StrictMode>
)
