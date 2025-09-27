import { render, screen, fireEvent } from "@testing-library/react";
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

beforeEach(() => {
  mockDispatch.mockClear();
  mockSubmitForm.mockClear();
});

test("Renders the BookingForm Date field", () => {
  render(
    <BookingForm
      availableTimes={mockTimes}
      dispatch={mockDispatch}
      submitForm={mockSubmitForm}
    />);
  const fieldElement = screen.getByText("Choose date");
  expect(fieldElement).toBeInTheDocument();
});

describe("Form validation", () => {
  test("submits form when all fields are valid", () => {
    render(
      <BookingForm
        availableTimes={mockTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    );

    // Fill in all required fields
    fireEvent.change(screen.getByLabelText(/choose date/i), {
      target: { value: "2023-12-25" }
    });
    fireEvent.change(screen.getByLabelText(/choose time/i), {
      target: { value: "18:00" }
    });
    fireEvent.change(screen.getByLabelText(/number of guests/i), {
      target: { value: "4" }
    });
    fireEvent.change(screen.getByLabelText(/occasion/i), {
      target: { value: "Birthday" }
    });

    fireEvent.click(screen.getByText(/make your reservation/i));

    expect(mockSubmitForm).toHaveBeenCalledWith({
      date: "2023-12-25",
      time: "18:00",
      guests: "4",
      occasion: "Birthday"
    });
  });

  test("does not submit when date is missing", () => {
    render(
      <BookingForm
        availableTimes={mockTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    );

    // Fill all fields except date
    fireEvent.change(screen.getByLabelText(/choose time/i), {
      target: { value: "18:00" }
    });
    fireEvent.change(screen.getByLabelText(/number of guests/i), {
      target: { value: "4" }
    });
    fireEvent.change(screen.getByLabelText(/occasion/i), {
      target: { value: "Birthday" }
    });

    fireEvent.click(screen.getByText(/make your reservation/i));

    expect(mockSubmitForm).not.toHaveBeenCalled();
  });

  test("does not submit when time is missing", () => {
    render(
      <BookingForm
        availableTimes={mockTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    );

    // Fill all fields except time
    fireEvent.change(screen.getByLabelText(/choose date/i), {
      target: { value: "2023-12-25" }
    });
    fireEvent.change(screen.getByLabelText(/number of guests/i), {
      target: { value: "4" }
    });
    fireEvent.change(screen.getByLabelText(/occasion/i), {
      target: { value: "Birthday" }
    });

    fireEvent.click(screen.getByText(/make your reservation/i));

    expect(mockSubmitForm).not.toHaveBeenCalled();
  });

  test("does not submit when occasion is missing", () => {
    render(
      <BookingForm
        availableTimes={mockTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    );

    fireEvent.change(screen.getByLabelText(/choose date/i), {
      target: { value: "2023-12-25" }
    });
    fireEvent.change(screen.getByLabelText(/choose time/i), {
      target: { value: "18:00" }
    });
    fireEvent.change(screen.getByLabelText(/number of guests/i), {
      target: { value: "4" }
    });

    fireEvent.click(screen.getByText(/make your reservation/i));

    expect(mockSubmitForm).not.toHaveBeenCalled();
  });
});