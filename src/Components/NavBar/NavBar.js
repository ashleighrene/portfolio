import './NavBar.scss';
import { FaceRetouchingNatural, HistoryEdu } from '@mui/icons-material';

function NavBar({ navOpen, setNavOpen }) {
	return (
		<div className={'NavBar ' + (navOpen && 'active')}>
			<div className='wrapper'>
				<div className='left'>
					<a href='#home' className='logo'>
						_aw
					</a>
					<div className='itemContainer'>
						<FaceRetouchingNatural className='icon' />
						<span>623-326-2943</span>
					</div>
					<div className='itemContainer'>
						<HistoryEdu className='icon' />
						<span>arwaller7@gmail.com</span>
					</div>
				</div>

				<div className='right'>
					<div className='hamburger' onClick={() => setNavOpen(!navOpen)}>
						<span className='line1'></span>
						<span className='line2'></span>
						<span className='line3'></span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default NavBar;
