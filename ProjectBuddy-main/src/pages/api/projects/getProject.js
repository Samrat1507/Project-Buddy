// pages/api/projects/getProjects.js

import connect from '../mongodb/connection';
import Project from '../../../../models/Project';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      // Connect to MongoDB
      await connect();

      // Fetch all projects from the database
      const projects = await Project.find();

      res.status(200).json(projects);
    } catch (error) {
      console.error('Error fetching projects:', error);
      res.status(500).json({ message: 'Failed to fetch projects' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
