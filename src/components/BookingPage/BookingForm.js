import { useState, useEffect } from 'react';
import "./styles/BookingForm.css";

const BookingForm = ({ availableTimes, dispatch, submitForm }) => {
    const [formData, setFormData] = useState({
        date: '',
        time: '',
        guests: 1,
        occasion: ''
    });

    useEffect(() => {
        dispatch({ type: "initialize_times" });
    }, [])

    const handleDateChange = (e) => {
        const selectedDate = e.target.value;

        setFormData(prev => ({
            ...prev,
            date: selectedDate,
            time: ''
        }));

        if (selectedDate) {
            dispatch({ type: "update_times", payload: selectedDate });
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        submitForm(formData);
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