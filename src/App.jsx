import { useState } from 'react';
import LoginForm from './components/login-form';
import Button from './components/shared/ui/Button';

const initialLoginInfo = {
	username: '',
	password: '',
	isLoggedIn: false,
};

const App = () => {
	const [loginInfo, setLoginInfo] = useState(initialLoginInfo);

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoginInfo((prev) => ({
			...prev,
			isLoggedIn: true,
		}));
	};

	const handleChange = (e) => {
		setLoginInfo((prev) => ({
			...prev,
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
					<h1>Logged in as {loginInfo.username}</h1>
					<Button type={'button'} onClick={handleLogoutBtn}>
						Logout
					</Button>
				</div>
			) : (
				<LoginForm
					onSubmit={handleSubmit}
					onChange={handleChange}
					loginInfo={loginInfo}
				/>
			)}
		</div>
	);
};

export default App;
