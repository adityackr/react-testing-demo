import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it } from 'vitest';
import App from '../App';

describe('App', () => {
	it('renders App component', () => {
		render(<App />);

		expect(
			screen.getByPlaceholderText('Enter your email or username')
		).toBeInTheDocument();
		expect(
			screen.getByPlaceholderText('Enter your password')
		).toBeInTheDocument();
		expect(screen.getByRole('button')).toBeInTheDocument();
		expect(screen.getByText('Login')).toBeInTheDocument();
	});

	it('should should show error message if username or password is invalid', async () => {
		render(<App />);

		const loginButton = screen.getByRole('button');

		await userEvent.click(loginButton);
		expect(screen.getByText('Invalid username or email')).toBeInTheDocument();
		expect(screen.getByText('Invalid Password')).toBeInTheDocument();
	});

	it('should logged in successfully and logged out when click the logout button', async () => {
		render(<App />);

		await userEvent.type(
			screen.getByPlaceholderText('Enter your email or username'),
			'aditya'
		);
		await userEvent.type(
			screen.getByPlaceholderText('Enter your password'),
			'Pass1234'
		);
		await userEvent.click(screen.getByRole('button'));

		expect(screen.getByRole('heading')).toBeInTheDocument();
		expect(screen.getByRole('button')).toBeInTheDocument();
		expect(screen.getByText('Logged in as aditya')).toBeInTheDocument();
		expect(screen.getByText('Logout')).toBeInTheDocument();

		await userEvent.click(screen.getByText('Logout'));
		expect(screen.getByText('Login')).toBeInTheDocument();
	});
});
