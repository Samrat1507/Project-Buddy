import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    username: String,
    description: String,
    location: String,
    githubId: String,
    linkedinId: String
  });
userSchema.pre("save", async function (next) {
    next();
  });
  
  Object.keys(mongoose.models).forEach((model) => {
    delete mongoose.models[model];
  }); // this prevents the Model Reloading Error
  
var User = mongoose.model("User", userSchema);

export default User;