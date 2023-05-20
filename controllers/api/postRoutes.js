const router = require('express').Router();
const { Post } = require('../../models');

router.post('/', async (req ,res) => {
    console.log(req.body, req.session)
  try {
        const postData = await Post.create({...req.body, user_id: req.session.user_id});
        res.json(postData)
      } catch (err) {
        res.status(400).json(err);
      }
});

module.exports = router;