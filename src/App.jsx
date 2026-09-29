import { BrowserRouter, Routes, Route } from 'react-router-dom'
import VisitList from './pages/VisitList.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<VisitList />} />
      </Routes>
    </BrowserRouter>
  )
}
