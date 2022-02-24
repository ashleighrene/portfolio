import './Projects.scss';
import fugo from '../../assets/fugo_screen.png';
import store from '../../assets/storefront_screen.png';
import villager from '../../assets/villager_screen.png';

function Projects(props) {
	return (
		<div className='Projects' id='projects'>
			<h1>Projects</h1>
			<ul>
				<li>fuGO</li>
				<li>React Storefront</li>
				<li>Villager Man</li>
			</ul>
			<div className='container'>
				<div className='item'>
					<a href='https://fugo-order.netlify.app/home'>
						<img src={fugo} alt='fugo app page' />
					</a>
				</div>
				<div className='item'>
					<a href='https://ash-react-storefront.netlify.app/home'>
						<img src={store} alt='store app page' />
					</a>
				</div>
				<div className='item'>
					<a href='https://ashleighrene.github.io/villager-man/'>
						<img src={villager} alt='villager app page' />
					</a>
				</div>
			</div>
		</div>
	);
}

export default Projects;
