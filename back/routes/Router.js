
const express = require('express')
const router = express.Router();
const signClient = require('../controller/clientController');
const signCompany = require('../controller/companyController');
const event = require('../controller/eventController');
const auth = require("../controller/auth")
const book = require('../controller/bookController')




router.post('/signupClient', signClient.signup);
router.post('/signinClient', signClient.signin);
router.post('/clientlogout', signClient.clientlogout);

router.get('/auth', auth, signClient.auth);




router.post('/signupCompany', signCompany.signup);
router.post('/signinCompany', auth, signCompany.signin);
router.post('/companylogout', signCompany.companylogout);


router.post('/addEvent', book.createEvent)
router.post('/orgEvents', book.orgEvents)
router.delete('/deleteEvent/:id', auth, event.deleteEvent);
router.delete('/delete', auth, event.delete);
router.get('/retrieveEvent', event.retrieveEvent)
router.get('/retrieveOneEvent/:id', event.retrieveOneEvent)
router.put('/updateEvent/:id', auth, event.updateEvent)


router.post('/bookEvent', book.bookEvent)
router.post('/clientEvents', book.clientEvents)





module.exports = router;