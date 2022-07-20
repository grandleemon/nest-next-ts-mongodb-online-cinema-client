import { FC } from 'react'
import { IHome } from '@/screens/home/home.interface'
import Meta from '@/utils/meta/Meta'
import Heading from '@/ui/heading/Heading'

const Home: FC<IHome> = () => {
	return (
		<Meta
			title="Watch movies online"
			description="Watch movies and TV shows online"
		>
			<Heading
				title="Watch movies online"
				className="text-grey-300 mb-8 text-xl"
			/>
		</Meta>
	)
}

export default Home
