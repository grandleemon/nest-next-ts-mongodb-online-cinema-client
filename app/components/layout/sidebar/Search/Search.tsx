import { FC } from 'react'
import { useSearch } from '@/components/layout/sidebar/Search/useSearch'

import styles from './Search.module.scss'
import SearchList from '@/components/layout/sidebar/Search/SearchList/SearchList'
import SearchField from '@/ui/search-field/SearchField'

const Search: FC = () => {
	const { isSuccess, handleSearch, data, searchTerm } = useSearch()
	return (
		<div className={styles.wrapper}>
			<SearchField searchTerm={searchTerm} handleSearch={handleSearch} />
			{isSuccess && <SearchList movies={data || []} />}
		</div>
	)
}

export default Search
