import { LayoutPages } from "@/appPages/components/layout/LayoutPages";
import { store } from "@/redux/store";
import { FC, ReactNode } from "react";
import { Provider } from "react-redux";

interface LayoutRootClientProps {
	children: ReactNode;
}

export const LayoutRootClient: FC<LayoutRootClientProps> = ({ children }) => {
	return (
		<>
			<Provider store={store}>
				<LayoutPages>{children}</LayoutPages>
			</Provider>
		</>
	);
};
