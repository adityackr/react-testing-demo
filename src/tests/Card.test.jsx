import { render, screen } from '@testing-library/react';
import Card from '../components/card';
import products from '../data/products';

const product = products[0];

describe('Card', () => {
	it('should have a title', () => {
		render(<Card product={product} />);

		const element = screen.getByText(product.title);
		expect(element).toBeInTheDocument();
	});

	it('should have an image', () => {
		render(<Card product={product} />);

		const element = screen.getByRole('img');
		expect(element).toBeInTheDocument();
		expect(element).toHaveAttribute('src', product.image);
	});

	it('should have its price', () => {
		render(<Card product={product} />);

		const element = screen.getByText(`Price:`);
		expect(element).toBeInTheDocument();
		expect(element).toHaveTextContent(product.price);
	});

	it('should have its rating', () => {
		render(<Card product={product} />);

		const rateEl = screen.getByText(product.rating.rate);
		expect(rateEl).toBeInTheDocument();
	});

	it('should show total votes counted', () => {
		render(<Card product={product} />);

		const countEl = screen.getByText(product.rating.count);
		expect(countEl).toBeInTheDocument();
	});
});
