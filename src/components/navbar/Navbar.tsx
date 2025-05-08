import Image from 'next/image'
import Link from 'next/link'
import { Links } from './Links'

export function Navbar() {
	return (
		<nav className='bg-gray-11 py-5 px-8.5 rounded-[100px] mx-auto w-[1596px] mt-12.5 flex justify-between items-center'>
			<Link href='/' className='flex items-center gap-2.5'>
				<Image src='/logo.png' width={40} height={40} alt='Logo' />
				<span className='text-[20px] font-medium'>AzureBank</span>
			</Link>
			<Links />
			<div>
				<button className='px-7.5 py-3.5 cursor-pointer'>Sing Up</button>
				<button className='px-7.5 py-3.5 cursor-pointer bg-green-60 rounded-[82px] text-gray-11'>
					Login
				</button>
			</div>
		</nav>
	)
}
