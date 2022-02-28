import './About.scss';
import github from '../../assets/github.svg';
import linkedin from '../../assets/linkedin.svg';
import resume from '../../assets/resume.svg';
import { PhoneAndroid, HistoryEdu } from '@mui/icons-material';

function About(props) {
	return (
		<div className='About'>
			<div className='wrapper'>
				<a href='https://github.com/ashleighrene' className='aboutAnchor'>
					<img src={github} alt='github logo' />
				</a>
				<a
					href='https://drive.google.com/file/d/1f0Aku42aVF4DKCmB4TgrQ5-vd6WLyJUx/view?usp=sharing'
					className='aboutAnchor'>
					<img src={resume} alt='resume' />
				</a>
				<a
					href='https://www.linkedin.com/in/ashleighrene/'
					className='aboutAnchor'>
					<img src={linkedin} alt='linkedin logo' />
				</a>
				<p className='aboutText'>
					Before diving into coding, I worked as a medical assistant in
					pediatric oncology and as a nursing assistant in home care. I
					currently work with the MERN stack but I'm very open to learning new
					languages. I Live in the greater Seattle area with 3 cats, a scorpion
					and 2 other humans. I love to hike, cook, knit, and play table-top
					games in my spare time.
				</p>
				<div className='contactContainer'>
					<PhoneAndroid className='icon' />
					<span>623-326-2943</span>
				</div>
				<div className='contactContainer'>
					<HistoryEdu className='icon' />
					<span>arwaller7@gmail.com</span>
				</div>
			</div>
		</div>
	);
}

export default About;
