import { Request, Response } from "express";
import { extractErrorMessage } from "../utils/errorUtils";

let contacts: { id: string; name: string; email: string; phone: string }[] = [];

// Get all contacts
export const getContacts = (req: Request, res: Response) => {
  try {
    res.json(contacts);
  } catch (error) {
    console.error("Error fetching contacts:", error);
    res.status(500).json({
      message: "Internal server error",
      error: extractErrorMessage(error),
    });
  }
};

// Get a contact by ID
export const getContactById = (req: Request, res: Response) => {
  try {
    const contact = contacts.find(({ id }) => id === req.params.id);

    if (!contact) return res.status(404).json({ message: "Contact not found" });

    res.json(contact);
  } catch (error) {
    console.error("Error fetching contact:", error);
    res.status(500).json({
      message: "Internal server error",
      error: extractErrorMessage(error),
    });
  }
};

// Add a new contact
export const addContact = (req: Request, res: Response) => {
  try {
    const newContact = { id: Date.now().toString(), ...req.body };

    contacts.push(newContact);

    res.status(201).json(newContact);
  } catch (error) {
    console.error("Error adding contact:", error);
    res.status(500).json({
      message: "Internal server error",
      error: extractErrorMessage(error),
    });
  }
};

// Update a contact
export const updateContact = (req: Request, res: Response) => {
  try {
    const index = contacts.findIndex(({ id }) => id === req.params.id);

    if (index === -1)
      return res.status(404).json({ message: "Contact not found" });

    contacts[index] = { ...contacts[index], ...req.body };

    res.json(contacts[index]);
  } catch (error) {
    console.error("Error updating contact:", error);
    res.status(500).json({
      message: "Internal server error",
      error: extractErrorMessage(error),
    });
  }
};

// Delete a contact
export const deleteContact = (req: Request, res: Response) => {
  try {
    const index = contacts.findIndex(({ id }) => id === req.params.id);

    if (index === -1)
      return res.status(404).json({ message: "Contact not found" });

    contacts.splice(index, 1);

    res.status(204).send();
  } catch (error) {
    console.error("Error deleting contact:", error);
    res.status(500).json({
      message: "Internal server error",
      error: extractErrorMessage(error),
    });
  }
};
