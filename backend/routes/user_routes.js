const router = require("express").Router();
const user = require("../controllers/user_controller");

router.get("/users", async (req, res) => {
  user.list_all_users(req, res);
});

router.get("/user/:userId", async (req, res) => {
  user.read_a_user(req, res);
});

router.put("/user/:userId", async (req, res) => {
  user.update_a_user(req, res);
});

router.post("/user", async (req, res) => {
  user.create_a_user(req, res);
});

router.delete("/user/:userId", async (req, res) => {
  user.delete_a_user(req, res);
});

router.post("/authenticate", async (req, res) => {
  user.authenticate_user(req, res);
});

// router.delete("/users", async (req, res) => {
//   user.list_all_deleted_users(req, res);
// });

module.exports = router;
