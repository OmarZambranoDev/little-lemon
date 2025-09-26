import { initialState, updateTimes, initializeTimes } from "../reducers/timesReducer";

test('tests initializeTimes function returns correct value', () => {
    const result = initializeTimes();
    expect(result).toEqual(initialState);
});


test('tests updateTimes function returns correct value', () => {
    const result = updateTimes();
    expect(result).toEqual(initialState);
});