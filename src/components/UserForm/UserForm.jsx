import UserInput from 'components/UserFormItem';
import { Formik, Form } from 'formik';
import {
	Page,
	FormBox,
	Button,
	NavBox,
	NavText,
	NavLogin,
} from './UserForm.styled';

export default function UserForm({
	onSubmitForm,
	initialValues,
	validationSchema,
	formType,
	navigate,
	text,
	variant,
}) {
	return (
		<Page>
			<FormBox>
				<Formik
					onSubmit={onSubmitForm}
					initialValues={initialValues}
					validationSchema={validationSchema}
				>
					<Form>
						{Object.keys(initialValues).map(key =>(
							<UserInput key={key} name={ key} formType={formType} />
							// userInput({ name: key, formType }
							)
						)}
						<Button type="submit" aria-label="Send form button">
							{formType}
						</Button>

						<NavBox>
							<NavText>{text}</NavText>
							<NavLogin to={navigate}>{variant}</NavLogin>
						</NavBox>
					</Form>
				</Formik>
			</FormBox>
		</Page>
	);
}
