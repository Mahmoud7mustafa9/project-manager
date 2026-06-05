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

    project: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project",
      required: true,
    },

    assignedUsers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const Task = mongoose.model("Task", taskSchema);

