// 3.3 Task Schema
// Create a Task schema that contains the following fields:
// Field	Type
// title	String
// description	String
// status	String
// project	Project Reference
// assignedUsers	Array of User References

import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      
    },

    description: {

      type: String,
      
    },

    status: {

      type: String,
      enum: ["to-do", "in-progress", "done"],
      default: "to-do",
    },

    projectId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project",
      required: true,
    },

    assignedUser: 
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },

  },
  {
    timestamps: {
        createdAt : "myData",
        updatedAt:"false"

    },
    versionKey: "true"
  }
);

export const Task = mongoose.model("Task", taskSchema);

