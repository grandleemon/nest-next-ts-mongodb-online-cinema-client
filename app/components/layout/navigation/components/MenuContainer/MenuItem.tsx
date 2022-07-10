import { FC } from 'react'
import { useRouter } from 'next/router'
import cn from 'classnames'
import styles from './Menu.module.scss'
import { IMenuItem } from '@/components/layout/navigation/components/MenuContainer/menu.interface'
import Link from 'next/link'
import MaterialIcon from '@/ui/MaterialIcon'

const MenuItem: FC<{ item: IMenuItem }> = ({ item }) => {
	console.log(item)
	const { asPath } = useRouter()
	return (
		<li
			className={cn({
				[styles.active]: asPath === item.link,
			})}
		>
			<Link href={item.link}>
				<a>
					<MaterialIcon name={item.icon} />
					<span>{item.title}</span>
				</a>
			</Link>
		</li>
	)
}

export default MenuItem
