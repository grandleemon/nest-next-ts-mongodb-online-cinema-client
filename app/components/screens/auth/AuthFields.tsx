import { FC } from 'react'
import { FormState, UseFormRegister } from 'react-hook-form'
import Field from '@/ui/form-elements/Field'
import { validEmail } from '@/shared/regex'

interface IAuthFields {
	register: UseFormRegister<any>
	formState: FormState<any>
	isPasswordRequired?: boolean
}

const AuthFields: FC<IAuthFields> = ({
	register,
	isPasswordRequired = false,
	formState: { errors },
}) => {
	return (
		<>
			<Field
				{...register('email', {
					required: 'Email is required',
					pattern: {
						value: validEmail,
						message: 'Please enter a valid email ',
					},
				})}
				placeholder="E-mail"
				error={errors?.email}
			/>
			<Field
				{...register(
					'password',
					isPasswordRequired
						? {
								required: 'Email is required',
								minLength: {
									value: 6,
									message: 'Password must be at least 6 characters',
								},
						  }
						: {}
				)}
				type="password"
				placeholder="Password"
				error={errors.password}
			/>
		</>
	)
}

export default AuthFields
