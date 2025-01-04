const mongoose = require("mongoose");
const dotenv = require("dotenv");
const User = require("./models/User");
const Product = require("./models/Product");
const Supplier = require("./models/Supplier");
const Transaction = require("./models/Transaction");

dotenv.config();

mongoose
  .connect("mongodb://127.0.0.1:27017/inventory-management-system", {})
  .then(() => console.log("MongoDB connected for seeding"))
  .catch((err) => console.error(err));

const seedDatabase = async () => {
  try {
    // Clear existing data
    await User.deleteMany();
    await Product.deleteMany();
    await Supplier.deleteMany();
    await Transaction.deleteMany();

    // Insert seed data
    const users = await User.insertMany([
      {
        name: "Admin User",
        email: "admin@example.com",
        password: "hashedpassword1",
        role: "Admin",
      },
      {
        name: "Manager User",
        email: "manager@example.com",
        password: "hashedpassword2",
        role: "Manager",
      },
      {
        name: "Staff User",
        email: "staff@example.com",
        password: "hashedpassword3",
        role: "Staff",
      },
    ]);

    const suppliers = await Supplier.insertMany([
      {
        name: "Supplier A",
        contactInfo: "123-456-7890",
      },
      {
        name: "Supplier B",
        contactInfo: "987-654-3210",
      },
    ]);

    const products = await Product.insertMany([
      {
        name: "Router X",
        category: "Networking",
        stockLevel: 50,
        reorderPoint: 10,
        supplier: suppliers[0]._id,
      },
      {
        name: "Modem Z",
        category: "Networking",
        stockLevel: 30,
        reorderPoint: 5,
        supplier: suppliers[1]._id,
      },
    ]);

    await Transaction.insertMany([
      {
        product: products[0]._id,
        type: "Stock In",
        quantity: 20,
        performedBy: users[1]._id,
        timestamp: new Date(),
      },
      {
        product: products[1]._id,
        type: "Stock Out",
        quantity: 5,
        performedBy: users[2]._id,
        timestamp: new Date(),
      },
    ]);

    console.log("Database seeded successfully");
    mongoose.connection.close();
  } catch (err) {
    console.error("Error seeding database:", err);
    mongoose.connection.close();
  }
};

seedDatabase();
