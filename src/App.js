import './App.css';
import Footer from './Footer';
import Main from './Main';
import Nav from './Nav';
import BookingPage from './BookingPage';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Nav/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/booking' element={<BookingPage/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
