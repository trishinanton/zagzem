import React, { lazy } from 'react'
import {Route, Routes} from "react-router-dom";

const ContactPage = lazy(() => import('./pages/contact'))
const ServicesPage = lazy(() => import('./pages/services'))
const VillagesPage = lazy(() => import('./pages/villages'))
const VillagePage = lazy(() => import('./pages/village'))
const WelcomePage = lazy(() => import('./pages/welcome'))


export default function AppRoutes() {
  return <Routes>
    <Route exact path='/contact' element={<ContactPage />} />
    <Route exact path='/services' element={<ServicesPage />} />
    <Route exact path='/villages' element={<VillagesPage />} />
    <Route exact path='/village/' element={<VillagePage />}>
      <Route path=":id" element={<VillagePage />} />
    </Route>
    <Route exact path='/' element={<WelcomePage />} />
  </Routes>
}
