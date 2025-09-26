import BookingForm from "./BookingForm";
import "./styles/BookingPage.css";

function BookingPage({availableTimes, dispatch, submitForm}) {
    return (
        <main className="bookingpage-content">
            <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm}/>
        </main>
    );
};

export default BookingPage;
