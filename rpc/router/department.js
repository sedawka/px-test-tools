const Router = require('./router');

const department = Router();

department.use('GET_LIST', async (socket, payload, callback) => {
    const limit = Number(payload.pagination.perPage);
    const offset = (Number(payload.pagination.page) - 1) * limit;
    return callback({data: users.slice(offset, offset + limit ), total: users.length});
});

department.use('GET_ONE', async (socket, payload, callback) => {
    return callback({ data: users[payload.id]});
});

department.use('UPDATE', async (socket, payload, callback) => {
    users[payload.id] = payload.data;
    return callback({ data: users[payload.id] });
});

module.exports = department;