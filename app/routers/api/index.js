const express = require('express');

const { ApiError } = require('../../helpers/errorHandler');
const { apiController } = require('../../controllers/api')

const router = express.Router();
const authRouter = require('./auth');
const bookingRouter = require('./booking');
const profilRouter = require('./profil');
const userRouter = require('./user')
const workspaceRouter = require('./workspace');
const { route } = require('./auth');



// Default prefixing API's route,
router.all('/', apiController.home);

router.use(authRouter);
// route.user(bookingRouter);
// route.user(profilRouter);
// route.user(userRouter);
// route.user(workspaceRouter);



router.use(() => {
    throw new ApiError('API Route not found', { statusCode: 404 });
});

module.exports = router;
