import React from "react";
import { Link } from "react-router-dom";

import RedButton from "../components/buttons/RedButton";
// import WhiteButton from "../components/buttons/WhiteButton";

import Footer from "../components/Footer";

function HomePage() {
	return (
		<>
			<nav className="fixed top-0 left-0 w-full backdrop-blur-xl bg-[#161616C0] z-100 h-17.5">
				<div className="h-full w-full flex items-center justify-between px-0 md:px-16 py-4">
					<div className="flex items-center space-x-16">
						<Link to="/" className="text-white hover:text-gray-300 transition-colors duration-300">
							<img src="/images/logo.svg" alt="Logo" className="h-5 w-auto object-contain" />
						</Link>

						<div className="hidden md:flex items-center space-x-8 uppercase">
							<Link to="/" className="text-white font-light text-sm hover:text-gray-300 transition-colors duration-300">
								Resume
							</Link>
							<Link to="/portfolio" className="text-white font-light text-sm hover:text-gray-300 transition-colors duration-300">
								Portfolio
							</Link>
						</div>
					</div>

					<RedButton text="Get In Touch" type="button" isLink={true} to="/contact" />

				</div>
			</nav>

			<header className="h-dvh w-full flex flex-row">
				<div className="h-full w-7/12 flex items-end justify-between py-8 pl-16">
					<div className="flex flex-col items-start space-y-10">
						<h1 className="text-[110px] tracking-tight leading-26">
							<span className="font-black campeche-display-medium">Sandun</span><br />
							<span className="font-semibold campeche-light">Wiratunga</span>
						</h1>

						<p className="text-md font-normal">
							Hey There! I'm Sandun Wiratunga, a Software Engineering Graduate who has a passion in UI/UX Design, Graphic Design and Web Development. Welcome to my personal website!
						</p>

						<RedButton text="Explore" type="button" isLink={true} to="/portfolio" />
					</div>
				</div>

				<div className="h-full flex flex-col justify-end w-5/12">
					<img src="/images/propic.webp" alt="Hero" className="w-full object-contain" />
				</div>
			</header>

			<div className="font-black text-2xl -ml-10 pt-1.5 pb-2.5 whitespace-nowrap overflow-hidden text-black bg-red-500">
				UI/UX DESIGN • GRAPHIC DESIGN • WEB DEVELOPMENT • UI/UX DESIGN • GRAPHIC DESIGN • WEB DEVELOPMENT • UI/UX DESIGN • GRAPHIC DESIGN • WEB DEVELOPMENT • UI/UX DESIGN • GRAPHIC DESIGN • WEB DEVELOPMENT • UI/UX DESIGN • GRAPHIC DESIGN • WEB DEVELOPMENT
			</div>

			<div className="flex flex-col items-center justify-center min-h-screen py-2">
				<h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
				<p className="text-lg text-zinc-400">
					Currently under construction, but feel free to explore and check back later for updates!
				</p>
			</div>

			<div className="">

			</div>

			<Footer />
		</>
	);
}

export default HomePage;