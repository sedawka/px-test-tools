import React from 'react';
import { CommandServiceConsumer } from '../command-service-context';

const withCommandService = () => (Wrapped) => {

    return (props) => {
        return (
            <CommandServiceConsumer>
                {
                    (CommandService) => {
                        return (<Wrapped {...props}
                                         commandService={CommandService}/>);
                    }
                }
            </CommandServiceConsumer>
        );
    }
};

export default withCommandService;
