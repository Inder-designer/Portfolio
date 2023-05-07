
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Banner from './component/banner/Banner';
import Footer from './component/footer/Footer';
import Header from './component/header/Header';
import Projects from './component/projects/Projects';

function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Banner/>}/>
            <Route path='/projects' element={<Projects/>} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
