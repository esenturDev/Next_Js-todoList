import { LayoutPages } from "@/appPages/components/layout/LayoutPages";
import { FC, ReactNode } from "react";

interface LayoutRootClientProps {
	children: ReactNode;
}

export const LayoutRootClient: FC<LayoutRootClientProps> = ({ children }) => {
	return (
		<>
			<LayoutPages>{children}</LayoutPages>
		</>
	);
};
