import "./styles/BookingPage.css";
import BookingForm from "./BookingForm";

function BookingPage({availableTimes, dispatch}) {
    return (
        <main className="bookingpage-content">
            <BookingForm availableTimes={availableTimes} dispatch={dispatch}/>
        </main>
    );
};

export default BookingPage;
