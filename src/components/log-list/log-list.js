import React from 'react';
import { connect } from 'react-redux';

import LogListItem from '../log-list-item';

const LogList = ({ logs }) => {
    return (
        <ul>
            {
                logs.map((log) => {
                    return (
                        <li key={log.id}>
                            <LogListItem
                                causedBy={log.causedBy}
                                text={log.text}
                            />
                        </li>
                    )
                })
            }
        </ul>
    )
};

const mapStateToProps = ({ logs }) => {
    return { logs };
};

export default connect(mapStateToProps)(LogList);