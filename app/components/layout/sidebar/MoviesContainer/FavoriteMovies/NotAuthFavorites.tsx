import { FC } from 'react'

const NotAuthFavorites: FC = () => {
	return (
		<div className="mt-11 bg-grey-700 bg-opacity-20 py-3 px-5 rounded-lg text-white text-opacity-80">
			To see favorite movies you need to authorize first.
		</div>
	)
}

export default NotAuthFavorites
