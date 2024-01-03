import Image from "next/image";

async function getProductById(id: string) {
	const res = await fetch(`https://fakestoreapi.com/products/${id}`);
	return await res.json();
}

export default async function page({ params }: any) {
	const id = params.id as string;

	const data = await getProductById(id)

	return (
		<div className="container mx-auto px-10  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-20">
			<div className=" ">
				<Image
					src={data.image}
					alt={data.title}
					width={500}
					height={500}
				/>
			</div>
			<div className="">
				<p className="text-3xl">{data.title}</p>
				<p className="text-lg mt-2">{data.description}</p>
				{/* <p className="text-lg">{data.}</p> */}


			</div>
		</div>
	)
}
