import './Projects.scss';
import fugo from '../../assets/fugo_screen.png';
import store from '../../assets/storefront_screen.png';
import villager from '../../assets/villager_screen.png';
import github from '../../assets/github.svg';
import desktop from '../../assets/desktop.svg';

function Projects(props) {
	return (
		<div className='projects' id='projects'>
			<h1>Projects</h1>
			<h3>All using Git and Github - Deployed with Github Pages or Netlify.</h3>
			<div className='container'>
				<div className='card'>
					<div className='top'>
						<a href='https://github.com/ashleighrene/fuGO-frontend'>
							<img src={github} alt='Github logo ' className='left' />
						</a>

						<img src={fugo} alt='fugo app page' className='site' />

						<a href='https://fugo-order.netlify.app'>
							<img src={desktop} alt='computer' className='right' />
						</a>
					</div>
					<div className='center'>
						Mobile first food ordering app for fake resturant fuGO. Next steps
						include a login with with built in back-end so items can be added
						for checkout.
					</div>
					<div className='bottom'>
						<h3>Built Using:</h3>
						<h4>React, CSS, Bootstrap, Animate.CSS, MongoDB, Postman</h4>
					</div>
				</div>
				<div className='card'>
					<div className='top'>
						<a href='https://github.com/ashleighrene/React-Storefront'>
							<img src={github} alt='Github logo ' className='left' />
						</a>

						<img src={store} alt='react app page' className='site' />

						<a href='https://ash-react-storefront.netlify.app'>
							<img src={desktop} alt='computer' className='right' />
						</a>
					</div>
					<div className='center'>
						Simple E-commerce site currently built for desktop. The products
						page uses routes and directs the user to a store where items display
						from an API fetch request. Next steps include optimizing for mobile
						viewing.
					</div>
					<div className='bottom'>
						<h3>Built Using:</h3>
						<h4>React, CSS</h4>
					</div>
				</div>
				<div className='card'>
					<div className='top'>
						<a href='https://github.com/ashleighrene/villager-man'>
							<img src={github} alt='Github logo ' className='left' />
						</a>

						<img src={villager} alt='villager app page' className='site' />

						<a href='https://ashleighrene.github.io/villager-man/'>
							<img src={desktop} alt='computer' className='right' />
						</a>
					</div>
					<div className='center'>
						A browser-based hangman game using Nintendo's Animal Crossing
						characters. This was the first larger project I tackled and, while
						there is room for improvement, I wanted to keep it here to show
						where I started and how I've improved. Next steps for this project
						include fixing some gameplay bugs and incorporating a win alert.
					</div>
					<div className='bottom'>
						<h3>Built Using:</h3>
						<h4>JavaScript, HTML and CSS</h4>
					</div>
				</div>
			</div>
		</div>

		// <div className='Projects' id='projects'>
		// 	<h1>Projects</h1>
		// 	<ul>
		// 		<li>fuGO</li>
		// 		<li>React Storefront</li>
		// 		<li>Villager Man</li>
		// 	</ul>
		// 	<div className='container'>
		// 		<div className='item'>
		//
		// 		</div>
		// 		<div className='item'>
		//
		// 				<img src={store} alt='store app page' />
		// 			</a>
		// 		</div>
		// 		<div className='item'>
		// 			<a href='https://ashleighrene.github.io/villager-man/'>
		// 				<img src={villager} alt='villager app page' />
		// 			</a>
		// 		</div>
		// 	</div>
		// </div>
	);
}

export default Projects;
