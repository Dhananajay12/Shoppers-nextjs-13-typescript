import Image from "next/image";
import banner from '../(images)/website-banner.jpg'

export default function Banner() {
	return (
		<div>
			<Image src={banner}  alt="banner image" className="w-full" />
		</div>
	)
}
