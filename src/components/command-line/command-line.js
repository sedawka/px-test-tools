import React, {Fragment} from 'react';
import {connect} from "react-redux";

import withCommandService from '../hoc/with-command-service';
import compose from '../../utils/compose';
import { fetchCommand } from '../../actions';

const CommandLine = ({ model, item, onCommandCommit }) => {
    return (
        <Fragment>
            <span>{action(model, item)}</span>
            <input type="text" onKeyUp={(e) => {
                if (e.keyCode === 13) {
                    onCommandCommit(e.target.value)
                }
            }}/>
        </Fragment>
    )
};

const action = (model, item) => {
    return model + ':' + item + "#"
};

const mapStateToProps = ({ model, item }) => {
    return { model, item }
};

const mapDispatchToProps = (dispatch, { commandService }) => {

    return {
        onCommandCommit: (command) => fetchCommand(commandService, dispatch, command)
    };
};

export default compose(
    withCommandService(),
    connect(mapStateToProps, mapDispatchToProps)
)(CommandLine);