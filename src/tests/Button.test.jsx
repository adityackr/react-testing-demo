import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import 'jest-styled-components';
import Button from '../components/shared/ui/Button';

describe('Button', () => {
	it('should have #ffc600 colored background', () => {
		render(<Button>Hello</Button>);

		const button = screen.getByRole('button');
		expect(button).toHaveStyle('background-color: #ffc600');
	});

	it('should changed color to transparent when hovers', async () => {
		render(<Button>Hello</Button>);

		const button = screen.getByRole('button');
		await userEvent.hover(button);
		expect(button).toHaveStyleRule('background-color', 'transparent', {
			modifier: ':hover',
		});
	});
});
