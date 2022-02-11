import bootstrap from 'bootstrap';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';

// Components
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Nav from './Components/Nav/Nav';
import Projects from './Components/Projects/Projects';
import Resume from './Components/Resume/Resume';
import Skills from './Components/Skills/Skills';

function App() {
	return (
		<div>
			<Nav />
			<main>
				<Routes>
					<Route path='/about' element={<About />}></Route>
					<Route path='/contact' element={<Contact />}></Route>
					<Route path='/home' element={<Home />}></Route>
					<Route path='/projects' element={<Projects />}></Route>
					<Route path='/resume' element={<Resume />}></Route>
					<Route path='/skills' element={<Skills />}></Route>
					<Route path='/' element={<Navigate replace to='/home' />}></Route>
				</Routes>
			</main>
			<Footer />
		</div>
	);
}

export default App;
