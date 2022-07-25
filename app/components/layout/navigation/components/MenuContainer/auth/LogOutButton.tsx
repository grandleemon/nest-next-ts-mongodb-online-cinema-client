import { FC } from 'react'
import { useActions } from '@/hooks/useActions'
import MaterialIcon from '@/ui/MaterialIcon'

const LogOutButton: FC = () => {
	const { logout } = useActions()

	const handleLogout = (e: any) => {
		e.preventDefault()
		logout()
	}

	return (
		<li>
			<a onClick={handleLogout}>
				<MaterialIcon name="MdLogout" />
				<span>Logout</span>
			</a>
		</li>
	)
}

export default LogOutButton
