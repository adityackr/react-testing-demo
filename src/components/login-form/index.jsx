import React from 'react';
import Button from '../shared/ui/Button';
import Input from '../shared/ui/Input';

const LoginForm = ({ onSubmit, onChange, loginInfo }) => {
	return (
		<form onSubmit={onSubmit}>
			<Input
				type={'text'}
				placeholder={'username'}
				id={'username'}
				name={'username'}
				onChange={onChange}
				value={loginInfo.username}
			/>
			<Input
				type={'password'}
				placeholder={'password'}
				id={'password'}
				name={'password'}
				onChange={onChange}
				value={loginInfo.password}
			/>
			<Button type={'submit'}>Login</Button>
		</form>
	);
};

export default LoginForm;
