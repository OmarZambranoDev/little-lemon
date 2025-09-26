export const initialState = [
    { value: "", label: "Select a time", disabled: true },
    { value: "17:00", label: "17:00", disabled: false },
    { value: "18:00", label: "18:00", disabled: false },
    { value: "19:00", label: "19:00", disabled: false },
    { value: "20:00", label: "20:00", disabled: false },
    { value: "21:00", label: "21:00", disabled: false },
    { value: "22:00", label: "22:00", disabled: false }
];

export const updateTimes = (selectedDate) => {
    try {
        const dateObj = new Date(selectedDate);
        const apiTimes = window.fetchAPI(dateObj);

        console.log('API returned times for', selectedDate, ':', apiTimes);

        if (apiTimes && apiTimes.length > 0) {
            return [
                { value: "", label: "Select a time", disabled: true },
                ...apiTimes.map(time => ({
                    value: time,
                    label: time,
                    disabled: false
                }))
            ];
        } else {
            return [
                { value: "", label: "No times available", disabled: true }
            ];
        }

    } catch (error) {
        console.error('Error calling fetchAPI:', error);
        return initialState;
    }
};

export const initializeTimes = () => {
    try {
        const todayDate = new Date();
        const apiTimes = window.fetchAPI(todayDate);

        console.log('API returned times for today:', apiTimes);

        if (apiTimes && apiTimes.length > 0) {
            return [
                { value: "", label: "Select a time", disabled: true },
                ...apiTimes.map(time => ({
                    value: time,
                    label: time,
                    disabled: false
                }))
            ];
        } else {
            return [
                { value: "", label: "No times available", disabled: true }
            ];
        }

    } catch (error) {
        console.error('Error calling fetchAPI:', error);
        return initialState;
    }
}

export const reducer = (state, action) => {
    if (action.type === "initialize_times") return initializeTimes();
    if (action.type === "update_times") return updateTimes(action.payload);
    return state;
}
