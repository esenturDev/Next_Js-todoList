// "use client";
// import Image from "next/image";
// import { useParams } from "next/navigation";

// export const MePages = () => {
// 	const params = useParams();
// 	console.log(params.me);
// 	const url = `${process.env.NEXT_PUBLIC_API_URL}/avatar/${params.me}.jpeg`;
// 	return (
// 		<>
// 			<section>
// 				<h1>Me</h1>
// 				<Image
// 					src={url}
// 					alt="logo params"
// 					priority={true}
// 					width={500}
// 					height={300}
// 				/>
// 			</section>
// 		</>
// 	);
// };
