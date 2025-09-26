import { useReducer, useState } from "react";
import { useNavigate, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/HomePage/Main";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage/HomePage";
import BookingPage from "./components/BookingPage/BookingPage";
import ConfirmedBooking from "./components/ConfirmedBooking/ConfirmedBooking";
import { initialState, reducer } from "./reducers/timesReducer";
import "./App.css";

function AppContent() {
    const [availableTimes, dispatch] = useReducer(reducer, initialState);
    const [confirmationData, setConfirmationData] = useState({});
    const navigate = useNavigate();

    const submitForm = (formData) => {
        console.log('Form submitted:', formData);
        try {
            const responseSubmit = window.submitAPI(formData);

            console.log('API returned submit:', responseSubmit);

            if (responseSubmit && formData) {
                setConfirmationData(formData);
                navigate("/confirmation");
            }

        } catch (error) {
            console.error('Error calling fetchAPI:', error);
        }
    };

    return (
        <div className="App">
            <Header />
            <Main>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/booking" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />} />
                    <Route path="/confirmation" element={<ConfirmedBooking confirmationData={confirmationData} />} />
                </Routes>
            </Main>
            <Footer />
        </div>
    );
}

function App() {
    return (
        <Router>
            <AppContent />
        </Router>
    );
}

export default App;
