import { FC } from 'react'
import PopularMovies from '@/components/layout/sidebar/MoviesContainer/PopularMovies'
import FavoriteMovies from '@/components/layout/sidebar/MoviesContainer/FavoriteMovies/FavoriteMovies'

const MoviesContainer: FC = () => {
	return (
		<div>
			<PopularMovies />
			<FavoriteMovies />
		</div>
	)
}

export default MoviesContainer
