import { cn } from '@/utils/utils'
import Image from 'next/image'

export function HeroSection() {
	return (
		<section className='mt-12.5 py-25 pr-34.5 relative flex justify-between'>
			<Image
				src='objects/Object1.svg'
				width={750}
				height={610}
				alt=''
				className='absolute -top-77.5 -left-58 -z-10'
			/>
			<Image
				src='objects/Object2.svg'
				width={417}
				height={382}
				alt=''
				className='absolute top-27.5 right-27.5 -z-10'
			/>

			<div className='flex flex-col items-start w-[825px]'>
				<div className='bg-gray-15 py-2.5 px-5 flex rounded-[61px] gap-1.5 '>
					<Image src='icons/green-tick.svg' width={24} height={24} alt='' />
					<span>No LLC Required, No Credit Check.</span>
				</div>
				<h1 className='mt-5 text-5xl font-medium'>
					Welcome to AzureBank Empowering Your{' '}
					<span className='text-green-60'>Financial Journey</span>
				</h1>
				<div className='mt-3.5 font-light text-[18px]'>
					At YourBank, our mission is to provide comprehensive banking solutions
					that empower individuals and businesses to achieve their financial
					goals. We are committed to delivering personalized and innovative
					services that prioritize our customers' needs.
				</div>
				<button className='mt-12.5 px-7.5 py-4.5 bg-green-60 cursor-pointer text-gray-11 rounded-[82px]'>
					Open Account
				</button>
			</div>
			<div className='transactions relative rounded-[10px] p-8.5'>
				<div className='-left-15 -top-11 absolute items-center bg-[#22251B] rounded-[10.4px] px-4.25 py-3.5 flex gap-2.5'>
					<Image src='icons/icon2.svg' width={38} height={38} alt='' />
					<div className=''>
						<p className='text-[18px]'>+ $5000,00</p>
						<p className='text-[14px] font-light'>Monthly Income</p>
					</div>
				</div>
				<div className='flex gap-2.5 bg-[#22251B] py-2.25 px-5.25 items-center rounded-[69px] absolute -bottom-20.5 -right-13'>
					<p className='text-base'>Supported Currency</p>
					<div className='bg-gray-10 flex gap-1.75 p-2.25 rounded-[47px]'>
						{Currencies.map(item => (
							<div key={item.id}>
								<Image src={item.image} width={34} height={34} alt='' />
							</div>
						))}
					</div>
				</div>
				<div>
					<h1 className='font-medium text-[18px]'>Your Transactions</h1>
					<div className='mt-4.5'>
						{Transactions.map(item => (
							<div
								key={item.id}
								className={cn([
									'w-[445px] relative flex justify-between bg-gray-11 items-end py-3.5 px-5.25 border-gray-15 border-[0.87px] rounded-[10px] mx-auto',
									{
										['z-20']: item.id === 0,
										['opacity-50 w-[410px] -mt-6 z-10']: item.id === 1,
										['opacity-20 -mt-6 w-[375px]']: item.id === 2,
									},
								])}
							>
								<div className='flex gap-2.25'>
									<Image src='icons/icon1.svg' height={38} width={38} alt='' />
									<div>
										<div className='font-light text-base'>Transaction</div>
										<div className='text-[18px]'>{item.user}</div>
									</div>
								</div>
								<div className='font-medium text-[21px]'>-$68.00</div>
							</div>
						))}
					</div>
				</div>
				<div className='mt-4.5'>
					<h1 className='font-medium text-[18px]'>Money Exchange</h1>
					<div className='my-[25px]'>
						<div className='bg-gray-11 border-[0.87px] border-gray-15 rounded-[10.4px]'>
							<div className='flex'>
								<div className='w-full p-[17px] border-r-[0.87px] border-b-[0.87px] border-gray-15'>
									<div className='flex items-center gap-2.75'>
										<Image src='/icons/INR.png' width={34} height={34} alt='' />
										<span className='text-[16px]'>INR</span>
									</div>
									<p className='font-light text-[14px] pt-2.5 text-white-90'>
										Indian Rupees
									</p>
								</div>
								<div className='w-full p-[17px] border-gray-15 border-b-[0.87px]'>
									<div className='flex items-center gap-2.75'>
										<Image src='/icons/USD.png' width={34} height={34} alt='' />
										<span className='text-[16px]'>USD</span>
									</div>
									<p className='font-light text-[14px] pt-2.5 text-white-90'>
										United States Dollar
									</p>
								</div>
							</div>
							<div className='flex'>
								<div className='py-6.5 px-4.5 font-medium text-[18px] w-full border-gray-15 border-r-[0.87px]'>
									<p>5,0000</p>
								</div>
								<div className='py-6.5 px-4.5 font-medium text-[18px] w-full'>
									<p>12.00</p>
								</div>
							</div>
						</div>
					</div>
					<button className='text-green-65 bg-[#22251B] py-3.5 w-full cursor-pointer rounded-[71px]'>
						Exchange
					</button>
				</div>
			</div>
		</section>
	)
}

const Transactions = [
	{ id: 0, user: 'Joel Kenley' },
	{ id: 1, user: 'Mark Smith' },
	{ id: 2, user: 'Lenen Roy' },
]

const Currencies = [
	{ id: 0, image: '/currency/dollar.png' },
	{ id: 1, image: '/currency/euro.png' },
	{ id: 2, image: '/currency/btc.png' },
	{ id: 3, image: '/currency/eth.png' },
]
