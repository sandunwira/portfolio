import React from "react";
import { Link } from "react-router-dom";

function WhiteButton({ text, onClick, type, isLink, to }) {
	return (
		isLink ? (
			<Link to={to} className="uppercase text-xs bg-zinc-100 text-black px-4 py-2 rounded-md hover:bg-zinc-200 border-2 border-zinc-100 transition-colors duration-300">
				{text}
			</Link>
		) : (
			<button type={type} onClick={onClick} className="uppercase text-xs bg-zinc-100 text-black px-4 py-2 rounded-md hover:bg-zinc-200 border-2 border-zinc-100 transition-colors duration-300">
				{text}
			</button>
		)
	);
}

export default WhiteButton;