import './Nav.css';
import { Link } from 'react-router-dom';
import React from 'react';

function Nav(props) {
	return (
		<nav className='navbar navbar-light navbar-expand-lg bg-light fixed-top'>
			<div className='container-fluid'>
				<button className='navbar-brand' href='#'>
					AW
				</button>
				<button
					className='navbar-toggler'
					type='button'
					data-bs-toggle='offcanvas'
					data-bs-target='#offcanvasNavbar'
					aria-controls='offcanvasNavbar'>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div
					className='offcanvas offcanvas-end'
					tabIndex='-1'
					id='offcanvasNavbar'
					aria-labelledby='offcanvasNavbarLabel'>
					<div className='offcanvas-header'>
						<h5 className='offcanvas-title' id='offcanvasNavbarLabel'>
							. . . Welcome . . .
						</h5>
						<button
							type='button'
							className='btn-close text-reset'
							data-bs-dismiss='offcanvas'
							aria-label='Close'></button>
					</div>
					<div className='offcanvas-body'>
						<ul className='navbar-nav justify-content-end flex-grow-1 pe-3'>
							<Link to='/about' className='nav-item'>
								<div className='nav-link active' aria-current='page' href='#'>
									About
								</div>
							</Link>
							<Link to='/skills' className='nav-item'>
								<div className='nav-link' href='#'>
									Skills
								</div>
							</Link>
							<Link to='/resume' className='nav-item'>
								<div className='nav-link' href='#'>
									Resume
								</div>
							</Link>
							<Link to='/projects' className='nav-item'>
								<div className='nav-link' href='#'>
									Projects
								</div>
							</Link>
							<Link to='/contact' className='nav-item'>
								<div className='nav-link' href='#'>
									Contact
								</div>
							</Link>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default Nav;
