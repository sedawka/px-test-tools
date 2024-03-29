const commandRequested = (args) => {
    return {
        type: 'FETCH_COMMAND_REQUEST',
        payload: args
    };
};

const commandComplite = (newLog) => {
    return {
        type: 'FETCH_COMMAND_SUCCESS',
        payload: newLog
    };
};

const commandError = (newLog) => {
    return {
        type: 'FETCH_COMMAND_ERROR',
        payload: newLog
    };
};

const fetchCommand = (commandService, dispatch, command) => {

    const [ args, method ] = command.split(' ');
    const [ model, item ] = args.split(':');

    dispatch(commandRequested({ model, item }));
    commandService.fetchCommand({model, item, method})
        .then((data) => dispatch(commandComplite(data)))
        .catch((err) => dispatch(commandError(err)));
};

export {
    fetchCommand
};