import './Home.css';
import React from 'react';
import Desert from '../../assets/Desert.png';

function Home(props) {
	return (
		<section className='homeWrapper'>
			<main className='homeMain'>
				<div className='homeContainer'>
					<img
						src={Desert}
						alt='Desert Botanical Garden'
						className='heroImage'
					/>
				</div>
			</main>
		</section>
	);
}

export default Home;
