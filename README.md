# EHR-Dashboard
EHR Dashboard with CRUD Operations
Objective: Build an Electronic Health Records (EHR) dashboard that allows users to perform CRUD operations on patient records using the MERN stack.
Requirements
Backend (Node.js and Express):
Extend the existing Node.js server with authentication middleware (use a simple token-based authentication or any library of your choice).
Implement user roles (e.g., admin and regular user) with different levels of access.
Create an API for user authentication (login and signup).
Modify the patient API to allow CRUD operations (Create, Read, Update, Delete) for authenticated users.
Ensure that only authorised users can perform CRUD operations.
Frontend (React):
Implement user authentication on the frontend (login and signup forms).
Create a dashboard that displays a list of patients with basic information.
Allow authenticated users to view the details of a patient, edit patient details, add a new patient, and delete a patient.
Implement proper navigation between different sections of the dashboard.
Style the application with a responsive design.
Bonus (Optional):
Implement role-based access control to restrict certain functionalities based on user roles.
Add form validation for user authentication and patient details.
Use state management libraries (e.g., Redux) to manage the application state.
Include error handling for API requests.
Guidelines
Ensure that the application is secure, and sensitive information is not exposed.
Implement proper validation and sanitization on both the frontend and backend.
Use appropriate error messages to guide the user in case of any issues.
Write unit tests for critical parts of your code (e.g., authentication logic, CRUD operations).
Pay attention to code structure, separation of concerns, and readability.
Submission
Share the code repository with a README.md file containing instructions on how to set up and run the application.
Provide a brief explanation of your design choices and any additional libraries used.
Include sample credentials for testing purposes
