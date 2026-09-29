import { BrowserRouter, Routes, Route } from 'react-router-dom'
import VisitList from './pages/VisitList.jsx'
import VisitDetail from './pages/VisitDetail.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<VisitList />} />
        <Route path="/visits/:id" element={<VisitDetail />} />
      </Routes>
    </BrowserRouter>
  )
}
