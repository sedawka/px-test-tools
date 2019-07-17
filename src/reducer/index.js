const initialState = {
    model: 'home',
    item: '',
    logCounter: 1,
    logs: [],
    error: false
};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'FETCH_COMMAND_REQUEST':
            const { model, item } = action.payload;
            return {
                ...state,
                model: model,
                item: item
            };
        case 'FETCH_COMMAND_SUCCESS':
            return {
                ...state,
                logCounter: state.logCounter + 1,
                logs: [
                    ...state.logs,
                    {
                        id: state.logCounter,
                        causedBy: state.model + ':' + state.item,
                        text: action.payload
                    }]
            };
        case 'FETCH_COMMAND_ERROR':
            return {
                ...state,
                error: true
            };
        default:
            return state;
    }
};

export default reducer;
