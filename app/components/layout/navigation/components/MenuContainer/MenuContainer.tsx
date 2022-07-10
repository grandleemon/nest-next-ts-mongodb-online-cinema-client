import { FC } from 'react'
import Menu from '@/components/layout/navigation/components/MenuContainer/Menu'
import {
	firstMenu,
	userMenu,
} from '@/components/layout/navigation/components/MenuContainer/menu.data'
import GenreMenu from '@/components/layout/navigation/components/MenuContainer/genres/GenreMenu'

const MenuContainer: FC = () => {
	return (
		<div>
			<Menu menu={firstMenu} />
			<GenreMenu />
			<Menu menu={userMenu} />
		</div>
	)
}

export default MenuContainer
