import { cn } from '@/utils/utils'
import Image from 'next/image'

export function OurProducts() {
	return (
		<section>
			<div className='flex justify-between items-end'>
				<div className='w-[910px]'>
					<h1 className='font-medium text-5xl '>
						Our <span className='text-green-60'>Products</span>
					</h1>
					<p className='text-gray-70 text-lg mt-3.5'>
						Discover a range of comprehensive and customizable banking products
						at YourBank, designed to suit your unique financial needs and
						aspirations
					</p>
				</div>
				<div className='p-3.5 flex bg-gray-11 border-[0.87px] border-gray-15 rounded-[82px]'>
					<div className='py-3.5 px-6 text-gray-11 bg-green-60 rounded-[140px]'>
						<h2>For Individuals</h2>
					</div>
					<div className='py-3.5 px-6'>
						<h2>For Businesses</h2>
					</div>
				</div>
			</div>
			<div className='flex mt-25'>
				{Items.map(item => (
					<div
						key={item.id}
						className={cn([
							'flex items-center flex-col',
							{
								['pl-12.5']: item.id !== 0,
								['pr-12.5 border-r-[1px] border-gray-15']:
									item.id !== Items.length - 1,
							},
						])}
					>
						<Image src={item.icon} width={100} height={100} alt='' />
						<h2 className='mt-7.5 mb-5 text-2xl'>{item.title}</h2>
						<p className='font-light text-lg text-gray-70 text-center'>
							{item.text}
						</p>
					</div>
				))}
			</div>
		</section>
	)
}

const Items = [
	{
		id: 0,
		icon: 'icons/chak.svg',
		title: 'Checking Accounts',
		text: 'Enjoy easy and convenient access to your funds with our range of checking account options. Benefit from features such as online and mobile banking, debit cards, and free ATM access.',
	},
	{
		id: 1,
		icon: 'icons/saak.svg',
		title: 'Savings Accounts',
		text: "Build your savings with our competitive interest rates and flexible savings account options. Whether you're saving for a specific goal or want to grow your wealth over time, we have the right account for you.",
	},
	{
		id: 2,
		icon: 'icons/lam.svg',
		title: 'Loans and Mortgages',
		text: 'Realize your dreams with our flexible loan and mortgage options. From personal loans to home mortgages, our experienced loan officers are here to guide you through the application process and help you secure the funds you need.',
	},
]
