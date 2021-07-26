const router = require("express").Router();
const club = require("../controllers/club_controller");

router.get("/clubs", async (req, res) => {
  club.list_all_clubs(req, res);
});

router.get("/club/:clubId", async (req, res) => {
  club.read_a_club(req, res);
});

router.put("/club/:clubId", async (req, res) => {
  club.update_a_club(req, res);
});

router.post("/club", async (req, res) => {
  club.create_a_club(req, res);
});

router.delete("/club/:clubId", async (req, res) => {
  club.delete_a_club(req, res);
});

router.post("/club/booking", async (req, res) => {
  club.book_a_activity(req, res);
});

// router.delete("/clubs", async (req, res) => {
//   club.list_all_deleted_clubs(req, res);
// });

module.exports = router;
