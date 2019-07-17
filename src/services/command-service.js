import io from 'socket.io-client';
import store from '../store';

const socket = io({
    path: '/ws',
    transports: ['websocket']
});

export default class CommandService {

    fetchCommand(command) {
        return new Promise((resolve, reject) => {
            socket.emit('remote-call', this.parseCommand(command), (response) => {
                if (response.error) {
                    reject(response);
                } else {
                    resolve(response);
                }
            });
        })
    }

    parseCommand = ({model, method, item}) => {

        return {
            model: model === '.' ? store.getState().model : model,
            method: method,
            payload: {
                id: item ? item : null
            }
        }
    }
}