import Image from 'next/image'

export function UseCases() {
	return (
		<section>
			<div className='mb-20'>
				<h1 className='text-5xl font-medium text-green-60'>Use Cases</h1>
				<p className='mt-3.5 text-gray-70 text-lg font-light'>
					At YourBank, we cater to the diverse needs of individuals and
					businesses alike, offering a wide range of financial solutions
				</p>
			</div>
			<div className='flex flex-col gap-15'>
				<div className='flex justify-between gap-25 items-center'>
					<Cards items={Items} type='left' />
					<div className='flex-1'>
						<div>
							<h1 className='text-3xl font-medium'>For Individuals</h1>
							<p className='mt-3.5 text-lg font-light text-gray-70'>
								For individuals, our mortgage services pave the way to
								homeownership, and our flexible personal loans provide vital
								support during various life milestones. We also prioritize
								retirement planning, ensuring a financially secure future for
								our customers
							</p>
						</div>
						<div className='my-15.5 flex '>
							{TextItems.map(item => (
								<div key={item.id}>
									<h1 className='text-[58px] font-medium text-green-60'>
										{item.h1}%
									</h1>
									<span className='text-gray-70 font-light text-lg'>
										{item.span}
									</span>
								</div>
							))}
						</div>
						<button className='bg-gray-11 cursor-pointer border-[1px] border-gray-15 px-6 py-4.5 rounded-[82px]'>
							Learn More
						</button>
					</div>
				</div>
				<div className='flex justify-between gap-25 items-center'>
					<div className='flex-1'>
						<div>
							<h1 className='text-3xl font-medium'>For Business</h1>
							<p className='mt-3.5 text-lg font-light text-gray-70'>
								For businesses, we empower growth with working capital solutions
								that optimize cash flow, and our tailored financing options fuel
								business expansion. Whatever your financial aspirations,
								YourBank is committed to providing the right tools and support
								to achieve them
							</p>
						</div>
						<div className='my-15.5 flex gap-25'>
							{TextItems2.map(item => (
								<div key={item.id}>
									<h1 className='text-[58px] font-medium text-green-60'>
										{item.h1}%
									</h1>
									<span className='text-gray-70 font-light text-lg'>
										{item.span}
									</span>
								</div>
							))}
						</div>
						<button className='bg-gray-11 border-[1px] border-gray-15 px-6 py-4.5 rounded-[82px] cursor-pointer'>
							Learn More
						</button>
					</div>
					<Cards items={Items2} type='right' />
				</div>
			</div>
		</section>
	)
}

const Items = [
	{ id: 0, icons: 'icons/mpf.svg', name: 'Managing Personal Finances' },
	{ id: 1, icons: 'icons/sfmf.svg', name: 'Saving for the Future' },
	{ id: 2, icons: 'icons/hos.svg', name: 'Homeownership' },
	{ id: 3, icons: 'icons/ef.svg', name: 'Education Funding' },
]

const Items2 = [
	{ id: 0, icons: 'icons/sae.svg', name: 'Startups and Entrepreneurs' },
	{ id: 1, icons: 'icons/cfw.svg', name: 'Cash Flow Management' },
	{ id: 2, icons: 'icons/be.svg', name: 'Business Expansion' },
	{ id: 3, icons: 'icons/ps.svg', name: 'Payment Solutions' },
]

const TextItems = [
	{ id: 0, h1: '78', span: 'Secure Retirement Planning' },
	{ id: 1, h1: '63', span: 'Manageable Debt Consolidation' },
	{ id: 2, h1: '91', span: 'Reducing financial burdens' },
]

const TextItems2 = [
	{ id: 0, h1: '65', span: 'Cash Flow Management' },
	{ id: 1, h1: '70', span: 'Drive Business Expansion' },
	{ id: 2, h1: '45', span: 'Streamline payroll processing' },
]

export function Cards({
	items,
	type,
}: {
	items: typeof Items
	type: 'left' | 'right'
}) {
	return (
		<div className='bg-gray-11 rounded-[20px] flex flex-1 flex-wrap p-12.5	relative gap-5 '>
			<Image
				className='absolute top-0 left-0'
				src='objects/Object3.svg'
				width={224}
				height={213}
				alt=''
			/>
			{items.map(item => (
				<div
					key={item.id}
					className='p-7.5 flex flex-col gap-6 items-center w-[calc(50%-10px)] bg-gray-10 rounded-2xl relative border-[1px] border-gray-15'
				>
					<Image src={item.icons} width={78} height={78} alt='' />
					<h1>{item.name}</h1>
				</div>
			))}
		</div>
	)
}
