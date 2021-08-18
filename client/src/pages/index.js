import React from 'react';
import { Link } from 'gatsby';

import BagIcon from '../assets/bag.svg';

const IndexPage = () => {
	return (
		<>
			<title>IndiaOhYes &mdash; Home</title>

			<nav className='flex justify-between py-6 px-8 bg-cream fixed w-full'>
				<div>logo</div>

				<ul className='flex space-x-16'>
					<li><Link to='/'>Home</Link></li>
					<li><Link to='/'>About</Link></li>
					<li><Link to='/'>Contact</Link></li>
					<li><Link to='/'>Tv</Link></li>
				</ul>

				<div className='space-x-8 flex items-center'>
					<Link to='/' className='flex items-center'><BagIcon className='mr-1' /> Shop</Link>
					<Link to='/' className='py-1 px-3 rounded-md border-2 border-violet'>Login</Link>
				</div>
			</nav>

			<header className='bg-cream h-screen px-20 grid grid-cols-2 items-center'>
				<div>
					<h1 className='text-5xl leading-relaxed font-semibold'>
						<span className='block'>From India</span>
						<span className='block'>To India</span>
						<span className='block'>By India</span>
					</h1>

					<p className='mt-6 mb-12'>An E-supermarket for Indian Needs</p>

					<button className='border-2 border-violet bg-violet text-white py-3 px-6 rounded-tl-full rounded-bl-full'>Let's start</button>
					<button className='border-2 border-violet py-3 px-6 rounded-tr-full rounded-br-full'>Quick contact</button>
				</div>

				<div>
					OM IMAGE HERE
				</div>
			</header>
		</>
	);
};

export default IndexPage;