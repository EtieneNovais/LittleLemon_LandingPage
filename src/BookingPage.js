import BookingForm from './BookingForm';

export default function BookingPage(props){
    return (
        <div className='bookingPage'>
            <h1>Book Now</h1>
            <BookingForm availableTimes={props.availableTimes} setAvailableTimes={props.setAvailableTimes}/>
        </div>
    );

}