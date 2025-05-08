import { Footer } from '@/components/footer/Footer'
import { HeroSection } from '@/components/mainPage/HeroSection'
import { OurProducts } from '@/components/mainPage/OurProducts'
import { UseCases } from '@/components/mainPage/UseCases'

export default async function Page() {
	return (
		<main>
			<div className='px-40.5 flex flex-col gap-37.5'>
				<HeroSection />
				<OurProducts />
				<UseCases />
			</div>
			<Footer />
		</main>
	)
}
