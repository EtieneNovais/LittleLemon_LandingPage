import { render, screen } from "@testing-library/react";
import BookingPage from './BookingPage';

test('Renders the BookingForm heading', () => {
    render(<BookingPage availableTimes={['17:00']}/>);
    const headingElement = screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument();
})