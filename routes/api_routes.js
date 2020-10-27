// step2: is to define routes 
//all api endpoints are defined in this file

const express = require("express");
//6.intializing express router
const router = express.Router();
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!'
    });
});
//import user_Controller
const userControllr=require("../Controller/user_Controller");
router.route("/users")
.get(userControllr.findAll)
.post(userControllr.create)
router.route("/users/:id")
.get( userControllr.findOne)
.put(userControllr.UpdateUser)
.delete(userControllr.delete);
// Export API routes
module.exports = router;