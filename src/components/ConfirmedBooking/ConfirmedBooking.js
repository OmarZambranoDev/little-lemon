import "./styles/ConfirmedBooking.css";

function ConfirmedBooking({ confirmationData }) {
    return (
        <main className="confirmation-content">
            {Object.keys(confirmationData).length > 0
                ? <div className="confirmation-card">
                    <h1>Confirmation Details</h1>
                    <span>Date: {confirmationData.date}</span>
                    <span>Time: {confirmationData.time}</span>
                    <span>Guests: {confirmationData.guests}</span>
                    <span>Occasion: {confirmationData.occasion}</span>
                </div> :
                <div className="confirmation-card">
                    <h1>No Reservations Made</h1>
                </div>
            }
        </main>
    );
};

export default ConfirmedBooking;
