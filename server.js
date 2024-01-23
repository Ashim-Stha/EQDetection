const app = require("./app");
const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://eqdetection:OhZtowuo4lRzBe2K@cluster0.h1bzplb.mongodb.net/eqdetection_db?retryWrites=true&w=majority"
    );
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

connectDB().then(() => {
  app.listen(process.env.PORT || 3000, () => {
    console.log("Server Started Listening...");
  });
});
