import React from 'react'
import Search from '@/components/layout/sidebar/Search/Search'

import styles from './Sidebar.module.scss'
import MoviesContainer from '@/components/layout/sidebar/MoviesContainer/MoviesContainer'

const Sidebar = () => {
	return (
		<div className={styles.sidebar}>
			<Search />
			<MoviesContainer />
		</div>
	)
}

export default Sidebar
