// 3.2 Project Schema
// Create a Project schema that contains the following fields:
// Field	Type
// title	String
// description	String
// users	Array of User References
// You may add any additional fields that improve the project model.

import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      
    },

    description: {
      type: String,
      
    },

    users: [
      {
        type: mongoose.Schema.Types.ObjectId ,
        ref: "User",
      },
    ],
    // // tasks: [
    // //   {
    // //     type: mongoose.Schema.Types.ObjectId,
    // //     ref: "Task",
    // //   },
    // ],

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: {
        createdAt : "myData",
        updatedAt:"false"

    },
    versionKey: "true" ,
    toJSON:{virtuals:true}, toObject:{virtuals:true}
  }
);
// virtual field

projectSchema.virtual("tasksList",{
    ref:"Task",
    localField:"_id",
    foreignField:"projectId"
})

export const Project = mongoose.model("Project", projectSchema);

