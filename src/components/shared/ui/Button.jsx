import styled from 'styled-components';

const Button = styled.button`
	border: 1px solid teal;
	color: teal;
	background-color: transparent;
	cursor: pointer;
	width: 5rem;
	padding: 0.5rem;
	border-radius: 5px;
	display: block;
	margin: 2rem auto;
	&:hover {
		color: #fff;
		background-color: teal;
	}
`;

export default Button;
