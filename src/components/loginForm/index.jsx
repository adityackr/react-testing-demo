import Button from '../shared/ui/Button';
import ErrorMessage from '../shared/ui/ErrorMessage';
import Form from '../shared/ui/Form';
import FormGroup from '../shared/ui/FormGroup';
import Input from '../shared/ui/Input';
import Label from '../shared/ui/Label';

const LoginForm = ({ loginInfo, onChange, onSubmit, error }) => {
	return (
		<Form onSubmit={onSubmit}>
			<FormGroup>
				<Label htmlFor="username">Email or username</Label>
				<Input
					type={'text'}
					value={loginInfo && loginInfo.username}
					onChange={onChange}
					id={'username'}
					name={'username'}
					placeholder={'Enter your email or username'}
				/>
				{error && <ErrorMessage>Invalid username or email</ErrorMessage>}
			</FormGroup>
			<FormGroup>
				<Label htmlFor="password">Password</Label>
				<Input
					type={'password'}
					value={loginInfo && loginInfo.password}
					onChange={onChange}
					id={'password'}
					name={'password'}
					placeholder={'Enter your password'}
				/>
				{error && <ErrorMessage>Invalid Password</ErrorMessage>}
			</FormGroup>
			<Button type="submit">Login</Button>
		</Form>
	);
};

export default LoginForm;
