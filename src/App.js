import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Task from './components/Task';
import Footer from './layouts/Footer';
import Header from './layouts/Header';
function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/task/:taskId' element={<Task/>}></Route>
                <Route path='*' element={<NotFound/>}></Route>
            </Routes>              
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
