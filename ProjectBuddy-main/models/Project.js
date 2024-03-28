// models/Project.js
import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  projectName: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  technologiesUsed: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Ensure that the model is registered with Mongoose
const Project = mongoose.models.Project || mongoose.model('Project', projectSchema);

export default Project;
