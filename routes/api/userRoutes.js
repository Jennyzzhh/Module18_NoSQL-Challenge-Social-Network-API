const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  updateUser,
  addFriend,
  removeFriend,

} = require('../../controllers/userController');

//http://localhost:3001/api/users/
router.route('/').get(getUsers).post(createUser);

//http://localhost:3001/api/users/1
router.route('/:userId').get(getSingleUser).delete(deleteUser).put(updateUser);

//http://localhost:3001/api/users/

// //http://localhost:3001/api/users/1/friends/
// router.route('/:userId/friends').

//http://localhost:3001/api/users/1/friends/1

router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend)
module.exports = router;