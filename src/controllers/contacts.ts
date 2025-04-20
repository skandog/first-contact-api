import { Request, Response } from "express";

let contacts: { id: string; name: string; email: string; phone: string }[] = [];

// Get all contacts
export const getContacts = (req: Request, res: Response) => {
  res.json(contacts);
};

// Get a contact by ID
export const getContactById = (req: Request, res: Response) => {
  const contact = contacts.find((c) => c.id === req.params.id);
  if (!contact) return res.status(404).json({ message: "Contact not found" });
  res.json(contact);
};

// Add a new contact
export const addContact = (req: Request, res: Response) => {
  const newContact = { id: Date.now().toString(), ...req.body };
  contacts.push(newContact);
  res.status(201).json(newContact);
};

// Update a contact
export const updateContact = (req: Request, res: Response) => {
  const index = contacts.findIndex((c) => c.id === req.params.id);
  if (index === -1)
    return res.status(404).json({ message: "Contact not found" });
  contacts[index] = { ...contacts[index], ...req.body };
  res.json(contacts[index]);
};

// Delete a contact
export const deleteContact = (req: Request, res: Response) => {
  const index = contacts.findIndex((c) => c.id === req.params.id);
  if (index === -1)
    return res.status(404).json({ message: "Contact not found" });
  contacts.splice(index, 1);
  res.status(204).send();
};
