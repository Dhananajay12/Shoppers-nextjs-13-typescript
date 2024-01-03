import Image from 'next/image'
import Banner from './(components)/Banner'
import Card from './(components)/Card';
import Link from 'next/link';


export interface product {
	id: number,
	title: string,
	description: string,
	category: string,
	image: string,
	rating: {
		rate: number,
		count: number
	}
}

export async function getProductList() {
	try {

		const res = await fetch('https://fakestoreapi.com/products');
		return res.json();
	} catch (err) {
		return [];
	}
}

export default async function Home() {

	const data = await getProductList();

	// console.log(data, "data");
	return (
		<main className="">
			<Banner />
			<div className=' grid place-items-center mt-10 mb-20'>

				<p className='text-3xl lg:text-4xl font-bold'>Blockbuster Offers</p>
			</div>

			<div className="container mx-auto mt-5">
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 ">

					{data.map((item: product) => (
						<div key={item.id} className='w-[300px] '>
							<Link href={`/products/${item.id}`}>
							{item.category === "men's clothing" && <Card props={item} />}	
							</Link>
						</div>
					)
					)}
				</div>
			</div>



			{data.length === 0 && <h1>no product available</h1>}
		</main>
	)
}
