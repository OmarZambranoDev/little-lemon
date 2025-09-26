import { render, screen } from "@testing-library/react";
import BookingForm from "../components/BookingPage/BookingForm";

const mockTimes = [
  { value: "", label: "Select a time", disabled: true },
  { value: "17:00", label: "17:00", disabled: false },
  { value: "18:00", label: "18:00", disabled: false },
  { value: "19:00", label: "19:00", disabled: false },
  { value: "20:00", label: "20:00", disabled: false },
  { value: "21:00", label: "21:00", disabled: false },
  { value: "22:00", label: "22:00", disabled: false }
];

const mockDispatch = jest.fn();
const mockSubmitForm = jest.fn();

test('Renders the BookingForm Date field', () => {
  render(
    <BookingForm
      availableTimes={mockTimes}
      dispatch={mockDispatch}
      submitForm={mockSubmitForm}
    />);
  const fieldElement = screen.getByText("Choose date");
  expect(fieldElement).toBeInTheDocument();
})