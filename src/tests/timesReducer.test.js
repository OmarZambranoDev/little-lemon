import { initialState, updateTimes, initializeTimes } from "../reducers/timesReducer";

const mockFetchAPI = jest.fn();

beforeAll(() => {
    global.fetchAPI = mockFetchAPI;
});

beforeEach(() => {
    jest.clearAllMocks();
});

describe('initializeTimes', () => {
    // test('tests initializeTimes function returns correct value', () => {
    //     const result = initializeTimes();
    //     expect(result).toEqual(initialState);
    // });

    test('tests initializeTimes function returns correct value with correct date parameter', () => {
        const mockTimes = ['17:00', '18:30', '20:00'];
        mockFetchAPI.mockReturnValue(mockTimes);

        const result = initializeTimes('2023-12-25');
        expect(result).toEqual([
            { value: "", label: "Select a time", disabled: true },
            { value: "17:00", label: "17:00", disabled: false },
            { value: "18:30", label: "18:30", disabled: false },
            { value: "20:00", label: "20:00", disabled: false }
        ]);
    });
});

describe('updateTimes', () => {
    test('tests updateTimes function returns correct value with correct date parameter', () => {
        const mockTimes = ['17:00', '18:30', '20:00'];
        mockFetchAPI.mockReturnValue(mockTimes);

        const result = updateTimes('2023-12-25');
        expect(result).toEqual([
            { value: "", label: "Select a time", disabled: true },
            { value: "17:00", label: "17:00", disabled: false },
            { value: "18:30", label: "18:30", disabled: false },
            { value: "20:00", label: "20:00", disabled: false }
        ]);
    });
});