const express = require("express");

const router = express.Router();
const {
  getContacts,
  getContactById,
  createContact,
  updateContact,
  deleteContact,
} = require("../controllers/backendController");

router.route("/").get(getContacts);

router.route("/:id").get(getContactById);

router.route("/").post(createContact);

router.route("/:id").put(updateContact);

router.route("/:id").delete(deleteContact);

//we can also shorten the above routes like below coz the path is same
// router.route("/").get(getContacts).post(createContact);
// router
//   .route("/:id")
//   .get(getContactById)
//   .put(updateContact)
//   .delete(deleteContact);

module.exports = router;
