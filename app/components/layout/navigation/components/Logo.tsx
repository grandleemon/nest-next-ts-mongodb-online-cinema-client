import Link from 'next/link'
import Image from 'next/image'
import logoImage from '@/assets/images/logo.svg'

const Logo = () => {
	return (
		<Link href="/">
			<a className="px-layout mb-10 block">
				<Image
					src={logoImage}
					alt="logo-image"
					width={247}
					height={34}
					draggable={false}
				/>
			</a>
		</Link>
	)
}

export default Logo
