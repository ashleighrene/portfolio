import './Home.scss';
import Desert from '../../assets/Desert.png';
import 'animate.css';
import { init } from 'ityped';
import { useEffect, useRef } from 'react';

function Home(props) {
	const textRef = useRef();

	useEffect(() => {
		init(textRef.current, {
			showCursor: true,
			backDelay: 1500,
			typeSpeed: 90,
			backSpeed: 50,
			strings: ['Engineer', 'Developer', 'Creator'],
		});
	}, []);

	//https://www.npmjs.com/package/ityped

	return (
		<div className='Home' id='home'>
			<div className='left'>
				<div className='imgContainer'>
					<img src={Desert} alt='Desert Botanical Garden' />
				</div>
			</div>
			<div className='right'>
				<div className='wrapper'>
					<h2>Hello, I'm</h2>
					<h1>Ashleigh</h1>
					<h3>
						Data <span ref={textRef}></span>
					</h3>
				</div>
			</div>
		</div>
	);
}

// Lama Dev's Youtube Channel was extremely helpful when building this site.  Buy them coffee! https://www.youtube.com/channel/UCOxWrX5MIdXIeRNaXC3sqIg

export default Home;
