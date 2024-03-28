import connect from '../mongodb/connection';
import Project from '../../../../models/Project';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Connect to MongoDB
    await connect();

    try {
      // Extract project details from request body
      const { projectName, description, technologiesUsed } = req.body;

      // Create a new project document
      const project = new Project({
        projectName,
        description,
        technologiesUsed
      });

      // Save the project to the database
      await project.save();

      res.status(201).json({ message: 'Project created successfully' });
    } catch (error) {
      console.error('Error creating project:', error);
      res.status(500).json({ message: 'Failed to create project' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}