'use client';
import { Heart, ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleNavbar = () => {
		setIsOpen(!isOpen);
	};


	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth > 940) {
				// Change 640 to your desired breakpoint width
				setIsOpen(false);
			}
		};

		// Add event listener for window resize
		window.addEventListener('resize', handleResize);

		// Cleanup event listener on component unmount
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<div className="bg-[#978d7b]  p-2 w-full">
			<div className='justify-between md:flex md:item-center lg:max-w-7xl mx-auto'>
				<div>
					<div className='flex item-center justify-between md:block'>
						<h1 className="text-white text-xl font-bold mt-2">RazeeeOne</h1>
						<div>
							<div className='md:hidden'>
								<button onClick={toggleNavbar} className="text-white focus:outline-none">
									<svg
										className="h-6 w-6"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
									</svg>
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${isOpen ? 'p-13 md:p-0  block' : 'hidden'}`}>

					<ul className='h-screen md:h-auto items-center justify-center md:flex'>
						<li className='pb-6 text-lg text-white py-2 md:px-6 text-center border-b-2 md:border-b-0'>
							<Link href="/">
								Home
							</Link>
						</li>
						<li className='pb-6 text-lg text-white py-2 md:px-2 text-center border-b-2 md:border-b-0'>
							<Link href="/">
								about
							</Link>
						</li>
						<li className='pb-6 text-lg text-white py-2 md:px-2 text-center border-b-2 md:border-b-0'>
							<Link href="/">
								Product
							</Link>
						</li>
						<li className='pb-6 text-lg text-white py-2 md:px-2 text-center border-b-2 md:border-b-0'>
							<Link href="/">
								Product
							</Link>
						</li>
					</ul>
				</div>
				<div className='hidden md:inline-flex mt-2' >
					<ShoppingCart className="mr-2 text-white" />
					<Heart className="mr-2 text-white" />
				</div>
			</div>
		</div>
	);
}
