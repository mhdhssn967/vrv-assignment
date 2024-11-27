
# Employee Management Application  

A web-based Employee Management Application designed to streamline employee data management and enforce Role-Based Access Control (RBAC). This project ensures a responsive and user-friendly interface that caters to both administrators and regular users, offering specific functionalities based on the user’s role.

---

## Features  

### Role-Based Access Control (RBAC)  
- Admins have full control over employee data, including viewing, editing, and deleting employee records.  
- Regular users can only view employee data without the ability to make modifications.

### Dynamic Role-Based UI  
- The application dynamically customizes the UI based on the logged-in user’s role, ensuring ease of navigation and secure access.

### CRUD Operations  
- Admins can perform Create, Read, Update, and Delete (CRUD) operations on employee data.  
- Users’ actions and permissions are restricted based on their roles.

### Responsive Design  
- Optimized for both mobile and laptop screens using Bootstrap and Material UI.  
- Includes hover effects and a clean, modern interface.

### Hosting and Mock API  
- The JSON server, which simulates a backend, is hosted using Render to handle API requests for employee data management.

---

## Technologies Used  

### Frontend  
- React: Framework for building the interactive user interface.  
- Vite: Development tool for fast builds and a smoother development experience.  
- Bootstrap: For responsive grid layouts and design components.  
- Material UI: To enhance the aesthetics and usability of the application.

### Backend (Mock API)  
- JSON Server: Mock backend server hosted on Render, used for CRUD operations and data persistence.

### State Management  
- React useState: For managing local states and data flows between components.  
- React Router: For seamless navigation and passing role-based data across pages.

---

## Getting Started  

### Prerequisites  
- Node.js installed on your machine.  
- Basic knowledge of React and frontend development.

### Installation  

1. Clone the repository:  
   ```bash  
   git clone <repository-url>  
   cd employee-management-app  
   ```  

2. Install dependencies:  
   ```bash  
   npm install  
   ```  

3. Start the React application:  
   ```bash  
   npm run dev  
   ```  

4. Set up the JSON server:  
   - Use the provided `db.json` file to simulate the backend.  
   - Start the JSON server:  
     ```bash  
     npx json-server --watch db.json --port 5000  
     ```  

5. Open the application in your browser:  
   ```  
   http://localhost:5173  
   ```  

---

## How to Use  

1. Login Page  
   - Choose to log in as either an Admin or a User.  
   - Admin users can perform CRUD operations, while regular users can only view data.  

2. Home Page  
   - Displays employee details in a responsive table.  
   - Includes Edit and Delete buttons for Admin users.  

3. Table Features  
   - Dynamic hover effects for better user experience.  
   - Fully responsive layout adapting to various screen sizes.  

---

## Deployment  

### JSON Server  
- The backend mock API is deployed using Render to simulate data interactions.

### React App  
- The frontend can be deployed using platforms like Vercel, Netlify, or a traditional web server.

---

## Future Enhancements  

- Integrate a real backend with Node.js or Django.  
- Add authentication mechanisms for login and session management.  
- Implement sorting, filtering, and search functionalities in the table.  

---

This project demonstrates efficient use of React and modern UI libraries to build scalable and functional web applications.  

--- 
