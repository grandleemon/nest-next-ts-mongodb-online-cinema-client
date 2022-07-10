import { FC } from 'react'
import Menu from '@/components/layout/navigation/components/MenuContainer/Menu'
import {
	firstMenu,
	userMenu,
} from '@/components/layout/navigation/components/MenuContainer/menu.data'

const MenuContainer: FC = () => {
	return (
		<div>
			<Menu menu={firstMenu} />
			{/*genres*/}
			<Menu menu={userMenu} />
		</div>
	)
}

export default MenuContainer
