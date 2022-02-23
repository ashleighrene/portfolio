import './Menu.scss';

function Menu(props) {
	return (
		<div className='menu'>
			<ul>
				<li>
					<a href='#home'>Home</a>
					<a href='#about'>About</a>
					<a href='#projects'>Projects</a>
					<a href='#resume'>Resume</a>
					<a href='#skills'>Skills</a>
					<a href='#contact'>Contact</a>
				</li>
			</ul>
		</div>
	);
}

export default Menu;
