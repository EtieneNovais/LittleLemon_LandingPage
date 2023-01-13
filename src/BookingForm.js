import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function BookingForm(props){
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState('');
    const [occasion, setOccasion] = useState('');
    const navigate = useNavigate();

    function handleSubmit(e){
        e.preventDefault();
        navigate('/confirmed');
    }

    function handleDateChange(e){
        setDate(e.target.value);
        props.setAvailableTimes({type:(new Date(date))});
    }

    return(
        <form onSubmit={handleSubmit} style={{display: 'grid', maxWidth: '200px', gap: '20px'}}>
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" value={date} onChange={handleDateChange}/>
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time " value={time} onChange={e=>setTime(e.target.value)}>
                {props.availableTimes.map(x => <option>{x}</option>)}
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={e=>setGuests(e.target.value)}/>
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" value={occasion} onChange={e=>setOccasion(e.target.value)}>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <input type="submit" value="Make Your reservation" />
        </form>
    );
}