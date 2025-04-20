import express from "express";
import {
  getContacts,
  getContactById,
  addContact,
  updateContact,
  deleteContact,
} from "../controllers/contacts";

const router = express.Router();

// Routes
router.get("/", getContacts);
router.get("/:id", getContactById);
router.post("/", addContact);
router.put("/:id", updateContact);
router.delete("/:id", deleteContact);

export default router;
