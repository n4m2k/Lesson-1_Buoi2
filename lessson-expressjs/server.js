const express = require("express");
const { v4: uuidv4 } = require("uuid");
const app = express();

const PORT = 3001;

const contacts = [
  {
    id: 1,
    name: "Jill Johnson",
    email: "jill@gmail.com",
    phone: "111-111-1111",
    type: "personal",
  },
  {
    id: 2,
    name: "Sara Watson",
    email: "sara@gmail.com",
    phone: "222-222-2222",
    type: "personal",
  },
  {
    id: 3,
    name: "Harry White",
    email: "harry@gmail.com",
    phone: "333-333-3333",
    type: "professional",
  },
];

//Middleware
app.use(express.json());
//Get all contacts
app.get("/contacts", (req, res) => {
  res.json({
    data: contacts,
    status: 200,
  });
});

//GET get a contact
app.get("/contacts/:id", (req, res) => {
  const { id } = req.params;
  const contact = contacts.find((contact) => contact.id === +id);
  if (!contact) {
    res.json({
      msg: "Không có contact",
      data: {},
    });
  }
  res.json({
    data: contact,
    msg: "Thành công",
  });
});

//POST : create new contact
app.post("/contacts", (req, res) => {
  const { name, phone, type, email } = req.body;
  if (!name || !phone || !type || !email) {
    return res.json({
      msg: "Missing required keys",
      statusCode: 400,
    });
  }
  const isExist = contacts.findIndex((contact) => contact.phone === phone);

  if (isExist !== -1) {
    return res.json({
      msg: "Không thêm dc. Số đt đã tồn tại",
      statusCode: 400,
    });
  }

  const newContacts = { ...req.body, id: uuidv4() };
  contacts.push(newContacts);
  res.json({
    msg: "Thêm thành công",
    data: contacts,
  });
});

app.put("/contacts/:id", (req, res) => {
  const { id } = req.params;

  const isExist = contacts.findIndex((item) => item.id === +id);

  if (isExist < 0) {
    return res.json({
      msg: "Khong ton tai",
      statusCode: 400,
    });
  } else {
    const newContacts = { ...contacts[isExist], ...req.body };
    contacts[isExist] = newContacts;
  }

  res.json({
    msg: "sửa thành công",
    data: contacts,
  });
});

app.delete("/contacts/:id", (req, res) => {
  const { id } = req.params;
  const contact = contacts.filter((contact) => contact.id !== +id);
  res.json({
    msg: "xoa thành công",
    data: contact,
  });
});

app.listen(PORT, () => {
  console.log(`Server is listing at PORT ${PORT}`);
});

//RESTful =>Client <-> Server HTTP
