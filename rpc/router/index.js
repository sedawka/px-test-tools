const Router = require('./router');
const users = require('./users');
const sheet = require('./sheet');
const department = require('./department');

const router = Router();

router.use('users', users);
router.use('sheet', sheet);
router.use('department', department);

module.exports = router;