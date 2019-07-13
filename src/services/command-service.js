
export default class CommandService {

    data = [
        {
            text: 'hello, i am sheet %)'
        }
    ];

    fetchCommand(command) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(command);
            }, 700);
        });
    }
}