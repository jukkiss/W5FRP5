import { useState } from "react";
import '../app.css'; // Adjust the path according to your file structure


const Registration = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("guest"); // Default role set to 'guest'

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevents the default form submission behavior

    const userData = {
      username,
      email,
      role,
    };

    try {
      const response = await fetch('http://localhost:4000/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Registration successful', data);
      alert('Registration successful');
      // Redirect or further action here
    } catch (error) {
      console.error('Error during registration:', error);
      alert('Error during registration. Please try again.');
    }
  };

  return (
    <div className="registration-page">
      <h2>Register</h2>
      <form className="registration-form" onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          placeholder="youremail@example.com"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="role">Role</label>
        <select
          id="role"
          name="role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          required
        >
          <option value="guest">Guest</option>
          <option value="admin">Admin</option>
        </select>
        <button type="submit" className="submit-button">
          Register
        </button>
      </form>
    </div>
  );
};

export default Registration;
