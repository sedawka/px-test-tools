const initialState = {
    model: '/',
    item: '',
    logs: []
};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'CHANGE_MODEL':
            return {
                ...state,
                route: action.payload
            };
        case 'FETCH_SHEET_ITEM':
            return {
                ...state,
                model: 'sheet',
                logs: action.payload
            };
        case 'FETCH_COMMAND_SUCCESS':
            return {
                ...state,
                logs: [{
                    id: 1,
                    causedBy: state.model + ':' + state.item,
                    text: action.payload
                }]
            };

        default:
            return state;
    }
};

export default reducer;
