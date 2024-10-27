import Task from "../models/taskModel.js";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SMTP_EMAIL,
    pass: process.env.SMTP_PASSWORD,
  },
});

export const createTask = async (req, res) => {
  const { name, time, email } = req.body;
  const newTask = new Task({ name, time, email });

  try {
    await newTask.save();
    res.status(201).json(newTask);
    sendEmailReminder(email, name, time);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const sendEmailReminder = (email, taskName, taskTime) => {
  const date = new Date(taskTime);
  const formattedTime = date.toLocaleString();

  const mailOptions = {
    from: '"FARM-FRIEND AI PVT LTD" <no-reply@code-witchers.com>',
    to: email,
    subject: "Plant Task Reminder",
    text: `Reminder: Time to "${taskName}" for your plant care at ${formattedTime}.`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
    } else {
      console.log("Email sent:", info.response);
    }
  });
};