import { FC } from 'react'
import { IHome } from '@/screens/home/home.interface'
import Layout from '@/components/layout/Layout'

const Home: FC<IHome> = () => {
	return (
		<Layout>
			<h1>Homepage</h1>
		</Layout>
	)
}

export default Home
