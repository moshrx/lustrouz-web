import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App.jsx'

const TreatmentsPage = lazy(() => import('./pages/TreatmentsPage.jsx'))

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route
          path="/treatments"
          element={
            <Suspense fallback={<div className="site-shell" />}>
              <TreatmentsPage />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}
