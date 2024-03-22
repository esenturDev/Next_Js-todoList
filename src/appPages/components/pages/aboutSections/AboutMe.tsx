"use client";
import { useEffect, useState } from "react";
import scss from "./About.Me.module.scss";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";

export interface Root2 {
	id: number;
	name: string;
	status: string;
	species: string;
	type: string;
	gender: string;
	origin: Origin;
	location: Location;
	image: string;
	episode: string[];
	url: string;
	created: string;
}

export interface Origin {
	name: string;
	url: string;
}

export interface Location {
	name: string;
	url: string;
}

const url = process.env.NEXT_PUBLIC_API_URL;

const AboutMe = () => {
	const [date, setData] = useState<Root2[]>([]);

	const getData = async () => {
		const response = (await axios.get(url!)).data;
		console.log(response.results);
		setData(response.results);
	};
	useEffect(() => {
		getData();
	}, []);
	return (
		<div className={scss.AboutMe}>
			{date.map((item, index) => (
				<Link key={index} href={`/about/${item.id}`}>
					<div>
						<Image src={item.image} alt={item.name} width={500} height={300} />
					</div>
				</Link>
			))}
		</div>
	);
};

export default AboutMe;
