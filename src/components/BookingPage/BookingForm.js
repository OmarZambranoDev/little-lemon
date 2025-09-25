import { useState } from 'react';
import "./styles/BookingForm.css";

const BookingForm = ({ availableTimes, dispatch }) => {

    const [formData, setFormData] = useState({
        date: '',
        time: '',
        guests: 1,
        occasion: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleDateChange = (e) => {
        setFormData(prevState => ({
            ...prevState,
            date: e.target.value,
            time: ''
        }));

        dispatch({type: "update_times"});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert(`Reservation made for ${formData.date} at ${formData.time} for ${formData.guests} guests (${formData.occasion})`);
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="res-date">Choose date</label>
            <input
                type="date"
                id="res-date"
                name="date"
                value={formData.date}
                onChange={handleDateChange}
                required
            />

            <label htmlFor="res-time">Choose time</label>
            <select
                id="res-time"
                name="time"
                value={formData.time}
                onChange={handleInputChange}
                required
            >
                {availableTimes.map((option) => (
                    <option
                        key={option.value}
                        value={option.value}
                        hidden={option.disabled}
                        disabled={option.disabled}
                    >
                        {option.label}
                    </option>
                ))}
            </select>

            <label htmlFor="guests">Number of guests</label>
            <input
                type="number"
                id="guests"
                name="guests"
                placeholder="1"
                min="1"
                max="20"
                value={formData.guests}
                onChange={handleInputChange}
                required
            />

            <label htmlFor="occasion">Occasion</label>
            <select
                id="occasion"
                name="occasion"
                value={formData.occasion}
                onChange={handleInputChange}
                required
            >
                <option value="" disabled hidden>Select an occasion</option>
                <option value="Birthday">Birthday</option>
                <option value="Engagement">Engagement</option>
                <option value="Anniversary">Anniversary</option>
            </select>

            <button type="submit" className="submit-btn">
                Make Your Reservation
            </button>
        </form>
    );
};

export default BookingForm;