import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]); // State to store the list of users
  const [name, setName] = useState(''); // State for the name input
  const [email, setEmail] = useState(''); // State for the email input
  const [editingUserId, setEditingUserId] = useState(null); // State to track which user is being edited

  // Fetch users when the component mounts
  useEffect(() => {
    fetchUsers();
  }, []);

  // Function to fetch all users from the backend
  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/users');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  // Function to add a new user
  const addUser = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/users', { name, email });
      setUsers([...users, response.data]); // Add the new user to the list
      setName(''); // Clear the name input
      setEmail(''); // Clear the email input
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  // Function to update an existing user
  const updateUser = async () => {
    try {
      const response = await axios.put(`http://localhost:8080/api/users/${editingUserId}`, { name, email });
      setUsers(users.map(user => (user.id === editingUserId ? response.data : user))); // Update the user in the list
      setName(''); // Clear the name input
      setEmail(''); // Clear the email input
      setEditingUserId(null); // Reset editing state
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  // Function to delete a user
  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/users/${id}`);
      setUsers(users.filter(user => user.id !== id)); // Remove the user from the list
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  // Function to start editing a user
  const startEditing = (user) => {
    setEditingUserId(user.id); // Set the ID of the user being edited
    setName(user.name); // Pre-fill the name input
    setEmail(user.email); // Pre-fill the email input
  };

  return (
    <div>
      <h1>User Management</h1>

      {/* Add/Edit User Form */}
      <div>
        <h2>{editingUserId ? 'Edit User' : 'Add User'}</h2>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={editingUserId ? updateUser : addUser}>
          {editingUserId ? 'Update User' : 'Add User'}
        </button>
      </div>

      {/* User List */}
      <div>
        <h2>User List</h2>
        <ul>
          {users.map(user => (
            <li key={user.id}>
              {user.name} - {user.email}
              <button onClick={() => startEditing(user)}>Edit</button>
              <button onClick={() => deleteUser(user.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;