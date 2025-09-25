import { useReducer } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/HomePage/Main";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage/HomePage";
import BookingPage from "./components/BookingPage/BookingPage";
import "./App.css";


const initialState = [
  { value: "", label: "Select a time", disabled: true },
  { value: "17:00", label: "17:00", disabled: false },
  { value: "18:00", label: "18:00", disabled: false },
  { value: "19:00", label: "19:00", disabled: false },
  { value: "20:00", label: "20:00", disabled: false },
  { value: "21:00", label: "21:00", disabled: false },
  { value: "22:00", label: "22:00", disabled: false }
];

const updateTimes = () => {
  return initialState;
}

const initializeTimes = () => {
  return initialState;
}

const reducer = (state, action) => {
  if (action.type === "initialize_times") return initializeTimes();
  if (action.type === "update_times") return updateTimes();
  return state;
}

function App() {
  const [availableTimes, dispatch] = useReducer(reducer, initialState);

  return (
    <Router>
      <div className="App">
        <Header />
        <Main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/booking" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} />} />
            <Route path="/home" element={<HomePage />} />
          </Routes>
        </Main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
