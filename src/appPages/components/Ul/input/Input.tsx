import { FC } from "react";
import scss from "./Input.module.scss";

interface InputProps {
	value: string;
	type: string;
	setData: (value: string) => void;
  placeholder: string;
}

export const Input: FC<InputProps> = ({ value, type, setData , placeholder}) => {
	return (
		<input
			className={scss.inputs}
			type={type}
			value={value}
			onChange={(e) => setData(e.target.value)}
      placeholder={placeholder}
		/>
	);
};
