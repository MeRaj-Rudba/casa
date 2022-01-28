import { hashPassword } from "../../../lib/auth";
import { connectToDatabase } from "../../../lib/db";
import validator from "validator";
import { uid } from "uid";
export default async function handler(req, res) {
  //db conection

  if (req.method === "POST") {
    const client = await connectToDatabase();
    const db = client.db();

    const data = req.body;
    const { email, password } = data;
    const existingUser = await db.collection("users").findOne({ email: email });
    if (!email) {
      res.status(420).json({
        message: "Email is Required.",
      });
      return;
    } else if (!validator.isEmail(email)) {
      res.status(420).json({
        message: "Email is not valid",
      });
      return;
    } else if (existingUser) {
      res.status(422).json({ message: "This Email is already in use!" });
      return;
    } else if (!password) {
      res.status(420).json({
        message: "Password is Required.",
      });
      return;
    } else if (password.trim().length < 7) {
      res.status(420).json({
        message: "Password should contain atleast 7 characters.",
      });
      return;
    } else {
      const hashedPassword = await hashPassword(password);

      const result = await db.collection("users").insertOne({
        email: email,
        userId: uid(),
        username: "",
        gender: "",
        dateOfBirth: "",
        password: hashedPassword,
      });

      res.status(201).json({
        message: "User Created",
      });
      client.close();
    }
  } else {
    return;
  }
}
