import { lazy, Suspense } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import App from './App.jsx'
import { treatmentCategories } from './lib/treatmentCategories.js'

const CategoryPage = lazy(() => import('./pages/CategoryPage.jsx'))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy.jsx'))
const Terms = lazy(() => import('./pages/Terms.jsx'))

const fallback = <div className="site-shell" />

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route
          path="/treatments"
          element={<Navigate to={`/treatments/${treatmentCategories[0].slug}`} replace />}
        />
        <Route
          path="/treatments/:slug"
          element={
            <Suspense fallback={fallback}>
              <CategoryPage />
            </Suspense>
          }
        />
        <Route
          path="/privacy-policy"
          element={
            <Suspense fallback={fallback}>
              <PrivacyPolicy />
            </Suspense>
          }
        />
        <Route
          path="/terms"
          element={
            <Suspense fallback={fallback}>
              <Terms />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}
