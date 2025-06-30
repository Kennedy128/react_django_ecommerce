import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom'
import ProductScreen from './screens/ProductScreen'

function App() {
  return (
  
    
  <>
      <Header/>
      <main className="py-5">
        <Container>
          <Routes>
        <Route path="/home" element={<HomeScreen />} />
        <Route path='/product/:id' element={<ProductScreen />} />
         </Routes>
        </Container>
      </main>
      <Footer/>
      </>
      
    
  );
}

export default App;
