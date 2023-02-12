import axios from 'axios';
import { useEffect, useState } from 'react';
import LoginForm from './components/loginForm';
import Button from './components/shared/ui/Button';
import Heading from './components/shared/ui/Heading';

const initialLoginInfo = {
	username: '',
	password: '',
	isLoggedIn: false,
	hasError: false,
};

const App = () => {
	const [loginInfo, setLoginInfo] = useState(initialLoginInfo);
	const [users, setUsers] = useState(null);

	useEffect(() => {
		axios
			.get('https://fakestoreapi.com/users')
			.then((res) => res.data)
			.then((data) => setUsers(data));
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		const verified = users.filter(
			(user) =>
				loginInfo.username === user.username &&
				loginInfo.password === user.password
		);

		if (verified.length > 0) {
			setLoginInfo((prev) => ({
				...prev,
				isLoggedIn: true,
			}));
		} else {
			setLoginInfo((prev) => ({
				...prev,
				hasError: true,
			}));
		}
	};

	const handleChange = (e) => {
		setLoginInfo((prev) => ({
			...prev,
			hasError: false,
			[e.target.name]: e.target.value,
		}));
	};

	const handleLogoutBtn = () => {
		setLoginInfo(initialLoginInfo);
	};

	return (
		<div>
			{loginInfo.isLoggedIn ? (
				<div>
					<Heading>Logged in as {loginInfo.username}</Heading>
					<Button
						style={{ margin: '0 auto', width: '8rem' }}
						type={'button'}
						onClick={handleLogoutBtn}
					>
						Logout
					</Button>
				</div>
			) : (
				<LoginForm
					onSubmit={handleSubmit}
					onChange={handleChange}
					loginInfo={loginInfo}
					error={loginInfo.hasError}
				/>
			)}
		</div>
	);
};

export default App;
