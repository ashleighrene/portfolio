import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import React from 'react';
import { Link } from 'react-router-dom';

function NavBar(props) {
	return (
		<div>
			<Navbar className='navbar-container' expand='lg'>
				<Container>
					<Link to='/home' className='navHome'>
						_home
					</Link>
					<Navbar.Toggle
						className='toggleButton'
						aria-controls='basic-navbar-nav'
					/>
					<Navbar.Collapse className='basic-navbar-nav'>
						<Nav className='me-auto customNav'>
							<Link to='/about' className='linkStyle'>
								ABOUT
							</Link>
							<Link to='/skills' className='linkStyle'>
								SKILLS
							</Link>
							<Link to='/resume' className='linkStyle'>
								RESUME
							</Link>
							<Link to='/projects' className='linkStyle'>
								PROJECTS
							</Link>
							<Link to='/contact' className='linkStyle'>
								CONTACT
							</Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
}

export default NavBar;
