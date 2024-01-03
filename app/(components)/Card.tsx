import React from 'react'
import { product } from '../page'
import Image from 'next/image'

export default function Card({ props }: any) {

	return (
		<div className='grid place-items-center'>
			<Image src={props.image} alt={props.title} width={150} height={150} />
			<h5 className='mt-10'>
				{props.title}
			</h5>

		</div>
	)
}
