import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it } from 'vitest';
import App from '../App';

describe('App', () => {
	it('renders App component', () => {
		render(<App />);

		expect(screen.getByPlaceholderText('username')).toBeInTheDocument();
		expect(screen.getByPlaceholderText('password')).toBeInTheDocument();
		expect(screen.getByRole('button')).toBeInTheDocument();
		expect(screen.getByText('Login')).toBeInTheDocument();
	});

	it('should logged in successfully and show the main page', async () => {
		render(<App />);

		await userEvent.type(screen.getByPlaceholderText('username'), 'aditya');
		await userEvent.type(screen.getByPlaceholderText('password'), 'Pass1234');
		await userEvent.click(screen.getByRole('button'));

		expect(screen.getByRole('heading')).toBeInTheDocument();
		expect(screen.getByRole('button')).toBeInTheDocument();
		expect(screen.getByText('Logged in as aditya')).toBeInTheDocument();
		expect(screen.getByText('Logout')).toBeInTheDocument();
	});
});
