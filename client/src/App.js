import React, { useState } from 'react';
import './App.css';
import Card from './components/Card';
import Navbar from './components/Navbar';

function App() {
	const [username, setUsername] = useState('');
	const [user, setUser] = useState('');

	console.log(user);

	return (
		<div className="container">
			{user ? (
				<>
					<Navbar />
					<Card />
					<span className="username">{user}</span>
				</>
			) : (
				<div className="login">
					<h1>Card App</h1>
					<input
						type="text"
						placeholder="username"
						onChange={(e) => setUsername(e.target.value)}
					/>
					<button onClick={() => setUser(username)}>Login</button>
				</div>
			)}
		</div>
	);
}

export default App;
