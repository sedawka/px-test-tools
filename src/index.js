import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { CommandServiceProvider } from './components/command-service-context';
import CommandService from './services/command-service';
import App from './components/app'
import store from './store';

const commandService = new CommandService();

ReactDOM.render(
    <Provider store={store}>
        <CommandServiceProvider value={commandService}>
            <App/>
        </CommandServiceProvider>
    </Provider>,
    document.getElementById('root')
);