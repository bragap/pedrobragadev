import {PropsWithChildren } from "react";

export const Card: React.FC<PropsWithChildren> = ({ children }) => {
	

	return (
		<div className="overflow-hidden relative top-0 duration-700 rounded-xl  hover:bg-zinc-800/10 group md:gap-8 hover:border-zinc-400/50 border-zinc-600 ">
			{children}
		</div>
	);
};