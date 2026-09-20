import React from "react";

function HomePage() {
	return (
		<>
			<header className="h-dvh w-full flex flex-row">
				<div className="h-full w-7/12 flex items-end justify-between py-8 px-16">
					<div className="flex flex-col items-start space-y-10">
						<h1 className="text-9xl tracking-tight">
							<span className="font-black">Sandun</span><br />
							<span className="font-medium">Wiratunga</span>
						</h1>

						<p className="text-md font-normal">
							Hey There! I'm Sandun Wiratunga, a Software Engineering Graduate who has a passion in UI/UX Design, Graphic Design and Web Development. Welcome to my personal website!
						</p>

						<button className="uppercase text-sm bg-red-500 text-white px-4.5 py-2.5 rounded-md hover:bg-red-600 border-2 border-red-500 transition-colors duration-300">
							Explore
						</button>
					</div>
				</div>

				<div className="h-full flex flex-col justify-end w-5/12">
					<img src="/images/propic.webp" alt="Hero" className="w-full object-contain" />
				</div>
			</header>

			<div class="font-black text-2xl -ml-10 pt-1.5 pb-2.5 whitespace-nowrap overflow-hidden text-black bg-red-500">
				UI/UX DESIGN • GRAPHIC DESIGN • WEB DEVELOPMENT • UI/UX DESIGN • GRAPHIC DESIGN • WEB DEVELOPMENT • UI/UX DESIGN • GRAPHIC DESIGN • WEB DEVELOPMENT • UI/UX DESIGN • GRAPHIC DESIGN • WEB DEVELOPMENT • UI/UX DESIGN • GRAPHIC DESIGN • WEB DEVELOPMENT
			</div>

			<div className="flex flex-col items-center justify-center min-h-screen py-2">
				<h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
				<p className="text-lg text-zinc-400">
					Currently under construction, but feel free to explore and check back later for updates!
				</p>
			</div>
		</>
	);
}

export default HomePage;