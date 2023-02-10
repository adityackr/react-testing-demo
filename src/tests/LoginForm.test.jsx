import { render, screen } from '@testing-library/react';
import LoginForm from '../components/loginForm';

describe('LoginForm', () => {
	it('should have an input for username or email with label', () => {
		render(<LoginForm />);

		const labelElement = screen.getByLabelText('Email or username');
		const inputElement = screen.getByPlaceholderText(
			'Enter your email or username'
		);
		expect(labelElement).toBeInTheDocument();
		expect(inputElement).toBeInTheDocument();
	});

	it('should have an input for password with label', () => {
		render(<LoginForm />);

		const labelElement = screen.getByLabelText('Password');
		const inputElement = screen.getByPlaceholderText('Enter your password');
		expect(labelElement).toBeInTheDocument();
		expect(inputElement).toBeInTheDocument();
		expect(inputElement).toHaveAttribute('type', 'password');
	});

	it('should have a submit type button with text "Login"', () => {
		render(<LoginForm />);

		const element = screen.getByRole('button');

		expect(element).toBeInTheDocument();
		expect(element).toHaveAttribute('type', 'submit');
		expect(element).toHaveTextContent('Login');
	});
});
