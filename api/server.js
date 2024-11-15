import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/user.route.js";
import gigRoute from "./routes/gig.route.js";
import orderRoute from "./routes/order.route.js";
import conversationRoute from "./routes/conversation.route.js";
import messageRoute from "./routes/message.route.js";
import reviewRoute from "./routes/review.route.js";
import authRoute from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
const app = express();
dotenv.config();
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("connection done")
  } catch (error) {
    handleError(error);
  }
}
app.use(express.json())
app.use(cookieParser.json())
app.use("/api/users", userRoute)
app.use("/api/auth", authRoute)
app.use("/api/gigs", gigRoute)
app.use("/api/orders", orderRoute)
app.use("/api/conversations", conversationRoute)
app.use("/api/messages", messageRoute)
app.use("/api/reviews", reviewRoute)

app.use((err,req,res,next)=>{
  const errorStatus=err.status || 500
  const errorMessage=err.message || "something went wrong X"
  return res.status(errorStatus).send(errorMessage)
})
app.listen(8800, () => {
  connect()
  console.log("Backend is running")
})