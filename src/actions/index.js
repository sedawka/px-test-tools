const commandRequested = () => {
    return {
        type: 'FETCH_COMMAND_REQUEST'
    };
};

const commandComplite = (newLog) => {
    return {
        type: 'FETCH_COMMAND_SUCCESS',
        payload: newLog
    };
};

const fetchCommand = (commandService, dispatch, command) => {
    dispatch(commandRequested());
    commandService.fetchCommand(command)
        .then((data) => dispatch(commandComplite(data)))
};

export {
    fetchCommand
};