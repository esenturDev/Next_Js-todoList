import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import { LayoutRootClient } from "./layout.c";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Esentur",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<LayoutRootClient>{children}</LayoutRootClient>
			</body>
		</html>
	);
}
