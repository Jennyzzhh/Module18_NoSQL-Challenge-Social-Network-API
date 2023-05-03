const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,

} = require('../../controllers/thoughtController');

//http://localhost:3001/api/thoughts/
router.route('/').get(getThoughts).post(createThought);

//http://localhost:3001/api/thoughts/1
router.route('/:thoughtId').get(getSingleThought).delete(deleteThought).put(updateThought);

//http://localhost:3001/api/thoughts/1/reactions/1
router.route('/:thoughtId/reactions').post(addReaction)

router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction)

module.exports = router;