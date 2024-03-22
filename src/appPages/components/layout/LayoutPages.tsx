import React, { FC, ReactNode } from "react";
import { Header } from "./header/Header";
import Footer from "./footer/Footer";
import scss from './LayoutPages.module.scss'
export const LayoutPages: FC<{
  children: ReactNode
}> = ({children}) => {
	return (
		<div className={scss.layoutPages}>
			<Header />
			<main>
        {children}
      </main>
			<Footer />
		</div>
	);
};
