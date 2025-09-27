import { useState, useEffect } from 'react';
import "./styles/BookingForm.css";

const BookingForm = ({ availableTimes, dispatch, submitForm }) => {
    const [formData, setFormData] = useState({
        date: '',
        time: '',
        guests: 1,
        occasion: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

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

    const validateForm = () => {
        if (!formData.date || !formData.time || !formData.guests || !formData.occasion) {
            return false;
        }
        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);

        if (validateForm()) {
            submitForm(formData);
        }
    };

    return (
        <form className={`form ${isSubmitted ? 'submitted' : ''}`} onSubmit={handleSubmit} noValidate>
            <label htmlFor="reservation-date">Choose date</label>
            <input
                type="date"
                id="reservation-date"
                name="date"
                value={formData.date}
                onChange={handleDateChange}
                required
                aria-label="On Click"
            />

            <label htmlFor="reservation-time">Choose time</label>
            <select
                id="reservation-time"
                name="time"
                value={formData.time}
                onChange={handleInputChange}
                required
                aria-label="On Click"
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

            <label htmlFor="reservation-guests">Number of guests</label>
            <input
                type="number"
                id="reservation-guests"
                name="guests"
                placeholder="1"
                min="1"
                max="20"
                value={formData.guests}
                onChange={handleInputChange}
                required
                aria-label="On Click"
            />

            <label htmlFor="reservation-occasion">Occasion</label>
            <select
                id="reservation-occasion"
                name="occasion"
                value={formData.occasion}
                onChange={handleInputChange}
                required
                aria-label="On Click"
            >
                <option value="" disabled hidden>Select an occasion</option>
                <option value="Birthday">Birthday</option>
                <option value="Engagement">Engagement</option>
                <option value="Anniversary">Anniversary</option>
            </select>

            <button type="submit" className="submit-btn" aria-label="On Click">
                Make Your Reservation
            </button>
        </form>
    );
};

export default BookingForm;