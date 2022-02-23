// Components
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Resume from './Components/Resume/Resume';
import Skills from './Components/Skills/Skills';
import Contact from './Components/Contact/Contact';
import { useState } from 'react';
import './app.scss';

function App() {
	const [navOpen, setNavOpen] = useState(false);

	return (
		<div className='app'>
			<NavBar navOpen={navOpen} setNavOpen={setNavOpen} />
			<div className='sections'>
				<Home />
				<About />
				<Projects />
				<Resume />
				<Skills />
				<Contact />
			</div>
		</div>
	);
}

export default App;
