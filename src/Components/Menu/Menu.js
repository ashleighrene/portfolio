import './Menu.scss';

function Menu({ navOpen, setNavOpen }) {
	return (
		<div className={'menu ' + (navOpen && 'active')}>
			<ul>
				<li onClick={() => setNavOpen(false)}>
					<a href='#home'>Home</a>
				</li>
				<li onClick={() => setNavOpen(false)}>
					<a href='#about'>About</a>
				</li>
				<li onClick={() => setNavOpen(false)}>
					<a href='#projects'>Projects</a>
				</li>

				<li onClick={() => setNavOpen(false)}>
					<a href='#skills'>Skills</a>
				</li>
			</ul>
		</div>
	);
}

export default Menu;
