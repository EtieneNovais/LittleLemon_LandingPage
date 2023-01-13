import './App.css';
import Footer from './Footer';
import Main from './Main';
import Nav from './Nav';
import BookingPage from './BookingPage';
import ConfirmedBooking from './ConfirmedBooking';
import {Routes, Route} from 'react-router-dom';
import { useReducer } from 'react';

const seededRandom = function (seed) {
  var m = 2**35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
      return (s = s * a % m) / m;
  };
}

const fetchAPI = function(date) {
  let result = [];
  let random = seededRandom(date.getDate());

  for(let i = 17; i <= 23; i++) {
      if(random() < 0.5) {
          result.push(i + ':00');
      }
      if(random() < 0.5) {
          result.push(i + ':30');
      }
  }
  return result;
};

/*
const submitAPI = function(formData) {
  return true;
};
*/

function updateTimes(state,action){
  return fetchAPI(action.type);
}

function initializeTimes(){
  return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
}

function App() {
  const [availableTimes, setAvailableTimes] = useReducer(updateTimes, initializeTimes());
  return (
    <div className='App'>
      <Nav/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/booking' element={<BookingPage availableTimes={availableTimes} setAvailableTimes={setAvailableTimes}/>}/>
        <Route path='/confirmed' element={<ConfirmedBooking/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
