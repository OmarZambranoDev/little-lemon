import "./styles/ConfirmedBooking.css";

function ConfirmedBooking({ confirmationData }) {
    return (
        <main className="confirmation-content">
            <div className="confirmation-card">
                <h1>Confirmation Details</h1>
                <span>Date: {confirmationData.date}</span>
                <span>Time: {confirmationData.time}</span>
                <span>Guests: {confirmationData.guests}</span>
                <span>Occasion: {confirmationData.occasion}</span>
            </div>
        </main>
    );
};

export default ConfirmedBooking;
