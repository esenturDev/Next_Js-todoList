"use client";

import React, { useState } from "react";
import logo from "@/assets/photo.jpg";
import scss from "./WelcomePages.module.scss";
import img from "@/assets/Img.jpg";
import { log } from "console";
import Image from "next/image";
const WelcomePages = () => {
	const [user, setUser] = useState("Esentur");
	console.log(user);
	return (
		<section className={scss.Welcome}>
			Welcome {user}
			<Image
				src={logo}
				alt="logo"
				width={500}
				height={300}
				quality={75}
				priority={true}
				className={scss.img1}
			/>
			<Image
				src={img}
				alt="Img_2"
				width={500}
				height={300}
				quality={25}
				priority={true}
				className={scss.img2}
			/>
		</section>
	);
};

export default WelcomePages;
