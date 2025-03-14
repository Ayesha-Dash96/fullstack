# User Management Application

This is a full-stack **User Management Application** built with a **Spring Boot backend** and a **React frontend**. It allows users to perform basic CRUD (Create, Read, Update, Delete) operations on a list of users stored in a **PostgreSQL database**. The application is designed to demonstrate the integration of a modern frontend framework with a robust backend system.

---

## **Features**
- **Add a User**: Enter a name and email to add a new user to the database.
- **View Users**: Display a list of all users fetched from the database.
- **Update a User**: Edit the name or email of an existing user.
- **Delete a User**: Remove a user from the database.

---

## **Technologies Used**
### **Frontend**
- **React**: A JavaScript library for building dynamic and responsive user interfaces. React components were used to create the UI for adding, viewing, updating, and deleting users.
- **Axios**: A promise-based HTTP client used to make API requests to the Spring Boot backend.
- **React State Management**: The `useState` and `useEffect` hooks were used to manage component state and handle side effects (e.g., fetching data from the backend).

### **Backend**
- **Spring Boot**: A Java-based framework used to build a RESTful API. It handles HTTP requests and interacts with the database.
- **Spring Data JPA**: Used for database operations, providing an abstraction layer over the PostgreSQL database.
- **PostgreSQL**: A powerful relational database used to store user data (name and email).

### **Deployment**
- **Render**: A cloud platform used to host the PostgreSQL database. The backend and frontend can also be deployed to Render for production.

---

## **Project Architecture**
### **Frontend**
The frontend is built using React and consists of a single `App.js` file that handles the entire user interface and logic. Key features include:
- A form for adding or updating users.
- A list to display all users fetched from the backend.
- Buttons to edit or delete users.

### **Backend**
The backend is built using Spring Boot and provides RESTful API endpoints for CRUD operations. Key components include:
- **`UserController.java`**: Handles HTTP requests (GET, POST, PUT, DELETE) and maps them to appropriate methods.
- **`User.java`**: An entity class representing a user in the database.
- **`UserRepository.java`**: An interface that extends `JpaRepository` to perform database operations.
- **`application.properties`**: Contains configuration details for connecting to the PostgreSQL database.

---

## **How It Works**
1. **Frontend-Backend Communication**:
   - The React frontend sends HTTP requests to the Spring Boot backend using Axios.
   - The backend processes these requests, interacts with the PostgreSQL database, and sends back the appropriate response.

2. **Database Interaction**:
   - The backend uses Spring Data JPA to perform CRUD operations on the PostgreSQL database.
   - The `User` entity is mapped to a table in the database, and the `UserRepository` interface provides methods for querying and modifying the data.

3. **User Interface**:
   - The React frontend dynamically updates the UI based on the data received from the backend.
   - Users can add, view, update, and delete users through a simple and intuitive interface.

---

## **Key Components**
### **Frontend**
- **`App.js`**: The main React component that handles the user interface and API calls.
  - Uses `useState` to manage form inputs and the list of users.
  - Uses `useEffect` to fetch users from the backend when the component loads.
  - Provides functions to add, update, and delete users by making API calls to the backend.

### **Backend**
- **`UserController.java`**: Exposes the following RESTful endpoints:
  - `GET /api/users`: Fetches all users.
  - `POST /api/users`: Adds a new user.
  - `PUT /api/users/{id}`: Updates an existing user.
  - `DELETE /api/users/{id}`: Deletes a user.
- **`User.java`**: Defines the `User` entity with fields for `id`, `name`, and `email`.
- **`UserRepository.java`**: Provides methods for interacting with the database (e.g., `findAll`, `save`, `deleteById`).

---

## **API Endpoints**
The backend provides the following RESTful API endpoints:

| HTTP Method | Endpoint          | Description                     |
|-------------|-------------------|---------------------------------|
| GET         | `/api/users`      | Fetch all users.                |
| POST        | `/api/users`      | Add a new user.                 |
| PUT         | `/api/users/{id}` | Update an existing user by ID.  |
| DELETE      | `/api/users/{id}` | Delete a user by ID.            |

---

## **Future Enhancements**
1. **User Authentication**:
   - Add login and registration functionality to secure the application.
2. **Input Validation**:
   - Validate user inputs (e.g., name and email) on both the frontend and backend.
3. **Search and Pagination**:
   - Allow users to search for specific users and paginate the user list.
4. **Improved UI**:
   - Use a CSS framework like Bootstrap or Material-UI to enhance the user interface.
5. **Deployment**:
   - Deploy the backend and frontend to a cloud platform like Render or Heroku.

---

## **Conclusion**
This project demonstrates the integration of a modern frontend framework (React) with a robust backend system (Spring Boot) to build a fully functional user management application. It showcases key concepts such as RESTful APIs, database interaction, and state management in React. The application can be extended with additional features and deployed to a cloud platform for production use.

---
