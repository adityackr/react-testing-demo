import { render, screen } from '@testing-library/react';
import ErrorMessage from '../components/shared/ui/ErrorMessage';

describe('ErrorMessage', () => {
	it('should have red colored text', () => {
		render(<ErrorMessage>Something Went Wrong</ErrorMessage>);

		const element = screen.getByText('Something Went Wrong');
		expect(element).toHaveStyle('color: red');
	});
});
