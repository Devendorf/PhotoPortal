const router = require('express').Router();
const posts = require('../db_services/photoposts_services');
router.get('/getPhotoPosts',(req, res)=>{
});
router.post('/postPost',(req, res)=>{
    posts.addPhotoPost(req.body.post);
});
router.put('/editPost',(req, res)=>{
});
router.delete('/deletePost',(req, res)=>{
});
module.exports = router;