import React from 'react'
import { getProductList, product } from '../page'

export default async function page() {

	const data = await getProductList();
	return (
		<div>
			{data.map((item: product) => (
				<div key={item.id} >
					{item.title}
				</div>
			)
			)}
		</div>
	)
}
