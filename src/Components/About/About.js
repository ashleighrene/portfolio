import './About.css';
import React from 'react';

function About(props) {
	return (
		<section className='aboutMain'>
			<div className='aboutContainer'>
				<h2>Hello There</h2>
				<p className='homeIntro'>
					Hi! I'm Ashleigh, a software engineer living in the greater Seattle
					area. I like to run, knit, code, and pet cats.
				</p>
				<img src='' alt='Snorkeling' className='aboutImage' />
			</div>
		</section>
	);
}

export default About;
