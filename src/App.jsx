import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import MainPage from './pages/MainPage'
import Nav from './components/Nav'
import Features from './pages/Features'
import Enterprise from './pages/Enterprise'
import Support from './pages/Support'
function App() {

  return (
    <>
    <Router>
      <Nav />
      <Routes>
        <Route index element={  <MainPage />}/>//يعني الصفحة الرئيسة 
        <Route path='features' element={<Features/>}/>//لماا شغل المروع يكتب الجملة الي بالباث
        <Route path='enterprise' element={<Enterprise/>}/>//لماا شغل المروع يكتب الجملة الي بالباث
        <Route path='support' element={<Support/>}/>//لماا شغل المروع يكتب الجملة الي بالباث
      

      </Routes>

    </Router>
    
    
    </>
  )
}

export default App
