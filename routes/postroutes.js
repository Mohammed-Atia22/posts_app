const express = require('express');
const postcontroller = require('../controllers/postcontrollers');
const router = express.Router();

router.route("/")
    .get(postcontroller.getallposts)
    .post(postcontroller.createnewpost);

router.route("/:id")
    .get(postcontroller.getpostbyid);

module.exports = router;