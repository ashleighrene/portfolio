import './app.scss';

// Components
import NavBar from './Components/NavBar/NavBar';
import Menu from './Components/Menu/Menu';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills';
import { useState } from 'react';

function App() {
	const [navOpen, setNavOpen] = useState(false);

	return (
		<div className='app'>
			<NavBar navOpen={navOpen} setNavOpen={setNavOpen} />
			<Menu navOpen={navOpen} setNavOpen={setNavOpen} />
			<div className='sections'>
				<Home />
				<About />
				<Projects />
				<Skills />
			</div>
		</div>
	);
}

export default App;
