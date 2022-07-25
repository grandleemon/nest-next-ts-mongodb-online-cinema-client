import { useAuth } from '@/hooks/useAuth'
import MenuItem from '@/components/layout/navigation/components/MenuContainer/MenuItem'
import { getAdminHomeUrl } from '@/config/url.config'
import LogOutButton from '@/components/layout/navigation/components/MenuContainer/auth/LogOutButton'

const AuthItems = () => {
	const { user } = useAuth()

	return (
		<>
			{user ? (
				<>
					<MenuItem
						item={{ icon: 'MdSettings', link: '/profile', title: 'Profile' }}
					/>
					<LogOutButton />
				</>
			) : (
				<MenuItem item={{ icon: 'MdLogin', link: '/auth', title: 'Login' }} />
			)}

			{user?.isAdmin && (
				<MenuItem
					item={{
						icon: 'MdOutlineLock',
						link: getAdminHomeUrl(),
						title: 'Admin panel',
					}}
				/>
			)}
		</>
	)
}

export default AuthItems
