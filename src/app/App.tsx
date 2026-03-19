import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { HomePage } from './pages/HomePage'
import { AboutPage } from './pages/AboutPage'
import { ExpertisesPage } from './pages/ExpertisesPage'
import { DataPlatformPage } from './pages/DataPlatformPage'
import { CerebroRxPage } from './pages/CerebroRxPage'
import { TechnologiesPage } from './pages/TechnologiesPage'
import { ProjectsPage } from './pages/ProjectsPage'
import { CareersPage } from './pages/CareersPage'
import { ContactPage } from './pages/ContactPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { FuturisticLoader } from './components/Loader'

export function App() {
  return (
    <BrowserRouter basename="/medicacom">
      <FuturisticLoader />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/a-propos" element={<AboutPage />} />
          <Route path="/expertises" element={<ExpertisesPage />} />
          <Route path="/expertises/data-platform" element={<DataPlatformPage />} />
          <Route path="/expertises/cerebro-rx" element={<CerebroRxPage />} />
          <Route path="/expertises/technologies" element={<TechnologiesPage />} />
          <Route path="/projets" element={<ProjectsPage />} />
          <Route path="/carrieres" element={<CareersPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

