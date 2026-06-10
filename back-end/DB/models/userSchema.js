// 3.1 User Schema
// Create a User schema that contains the following fields:
// Field	Type
// name	String
// email	String
// passwod	String
// role	String
// You may add any additional fields that improve the user model.

import mongoose from "mongoose";
import bcrypt from "bcrypt";
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
       trim: true,
    },

    password: {
      type: String,
      required: true,
      minlength: 6,
      select : false ,
    },

    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },

    status:{
        type:String,
        enum:["active", "inactive"],
        default:"inactive",
    }
  },
  {
    timestamps: true, 
    versionKey:false,
  }
);

userSchema.pre("save", async function() {

if (!this.isModified("password")) return ;

this.password = await bcrypt.hash(this.password,8)

})

export  const User = mongoose.model("User", userSchema);

