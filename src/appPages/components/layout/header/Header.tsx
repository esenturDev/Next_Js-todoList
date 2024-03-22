import React from "react";
import scss from "./Header.module.scss";
import Link from "next/link";
export const Header = () => {
	return (
		<header>
			<div className="container">
				<div className={scss.content}>Header</div>
				<Link href={"/"}>Home</Link>
				<Link href={"/about"}>About</Link>
			</div>
		</header>
	);
};
