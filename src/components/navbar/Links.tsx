'use client'

import { cn } from '@/utils/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function Links() {
	const pathname = usePathname()

	return (
		<div className='flex gap-0.5'>
			{LinksArray.map(item => (
				<Link
					key={item.id}
					href={item.href}
					className={cn([
						'px-6 py-3 rounded-[82px]',
						{ ['bg-gray-15']: pathname === item.href },
					])}
				>
					{item.name}
				</Link>
			))}
		</div>
	)
}

const LinksArray = [
	{
		id: 0,
		name: 'Home',
		href: '/',
	},
	{
		id: 1,
		name: 'Careers',
		href: '/careers',
	},
	{
		id: 2,
		name: 'About',
		href: '/about',
	},
	{
		id: 3,
		name: 'Security',
		href: '/security',
	},
]
