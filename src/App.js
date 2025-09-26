import { useReducer } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/HomePage/Main";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage/HomePage";
import BookingPage from "./components/BookingPage/BookingPage";
import { initialState, reducer } from "./reducers/timesReducer";
import "./App.css";

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
