const asyncHandler = require("express-async-handler");
const Contacts = require("../models/contactModels");

//@description --> get all contacts
//@route GET/api/contacts
//@access public
const getContacts = asyncHandler(async (req, res) => {
  const contacts = await Contacts.find();
  res.status(200).json(contacts);
});

//@description --> get contact by id
//@route GET/api/contacts/:id
//@access public
const getContactById = asyncHandler(async (req, res) => {
  const contact = await Contacts.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  //res.status(200).json({ message: `Get Contact for ${req.params.id}` });
  res.status(200).json(contact);
});

//@description --> create new contacts
//@route POST/api/contacts
//@access public
const createContact = asyncHandler(async (req, res) => {
  console.log(req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }

  const contact = await Contacts.create({
    name,
    email,
    phone,
  });
  res.status(201).json(contact);
  //Code : 201-->resource created
});

//@description --> update contact by id
//@route PUT/api/contacts
//@access public
const updateContact = asyncHandler(async (req, res) => {
  const contact = await Contacts.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  const updatedContact = await Contacts.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(updatedContact);
});

//@description --> delete contact by id
//@route DELETE/api/contacts
//@access public
const deleteContact = asyncHandler(async (req, res) => {
  //res.status(200).json({ message: `delete Contact for ${req.params.id}` });
  const contact = await Contacts.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }

  await contact.remove();
  res.status(200).json(contact);
});

module.exports = {
  getContacts,
  getContactById,
  createContact,
  updateContact,
  deleteContact,
};
