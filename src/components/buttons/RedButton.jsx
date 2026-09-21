import React from "react";
import { Link } from "react-router-dom";

function RedButton({ text, onClick, type, isLink, to }) {
	return (
		isLink ? (
			<Link to={to} className="uppercase text-xs bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 border-2 border-red-500 transition-colors duration-300">
				{text}
			</Link>
		) : (
			<button type={type} onClick={onClick} className="uppercase text-xs bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 border-2 border-red-500 transition-colors duration-300">
				{text}
			</button>
		)
	);
}

export default RedButton;