import Image from 'next/image'
import Link from 'next/link'

export function Footer() {
	return (
		<footer className='pt-25 mt-37.5 pb-12.5 bg-gray-11 px-40.5 w-full flex flex-col items-center'>
			<Link href='/' className='flex items-center gap-2.5 '>
				<Image src='/logo.png' width={40} height={40} alt='Logo' />
				<span className='text-[20px] font-medium'>AzureBank</span>
			</Link>
			<div className='flex gap-5 py-12.5 my-12.5 border-y-[1px] border-gray-15 w-11/12 justify-center'>
				<div className='flex gap-1'>
					<Image src='/icons/email.svg' alt='' width={24} height={24} />
					<p>keinsiz@ya.ru</p>
				</div>
				<div className='flex gap-1'>
					<Image src='/icons/phone.svg' alt='' width={24} height={24} />
					<p>+91 91813 23 2309</p>
				</div>
				<div className='flex gap-1'>
					<Image src='/icons/gps.svg' alt='' width={24} height={24} />
					<p>Somewhere in the World</p>
				</div>
			</div>
			<div className='font-light text-lg text-gray-60 bg-gray-10 border-gray-15 border-[1px] rounded-[100px] w-full text-center py-4'>
				AzureBank All Rights Reserved
			</div>
		</footer>
	)
}
