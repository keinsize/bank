import { Navbar } from '@/components/navbar/Navbar'
import type { Metadata, Viewport } from 'next'
import { Lexend } from 'next/font/google'
import './globals.css'

const lexend = Lexend({
	subsets: ['latin'],
	weight: ['300', '400', '500', '700', '900'],
})

export const metadata: Metadata = {
	title: {
		default: 'Azure Bank',
		template: `%s | Azure Bank`,
	},
	description:
		"At YourBank, our mission is to provide comprehensive banking solutions that empower individuals and businesses to achieve their financial goals. We are committed to delivering personalized and innovative services that prioritize our customers' needs.",
}
export const viewport: Viewport = {
	initialScale: 1,
	width: 'device-width',
	themeColor: '#1E1E1E',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='ru'>
			<body className={`${lexend.className} bg-gray-10`}>
				<Navbar />
				{children}
			</body>
		</html>
	)
}
