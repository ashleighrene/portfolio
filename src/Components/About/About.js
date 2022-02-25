import './About.scss';
import github from '../../assets/github.svg';
import linkedin from '../../assets/linkedin.svg';
import AboutImg from '../../assets/About.png';
import resume from '../../assets/resume.svg';

function About(props) {
	return (
		<div className='About'>
			<div className='left'>
				<div className='imgContainer'>
					<img src={AboutImg} alt='Snorkeling' />
				</div>
			</div>
			<div className='right'>
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
						I live in the greater Seattle area with 3 cats, a scorpion and 2
						other humans. I like to hike, cook, knit, and play table-top games.
						Let's Chat!
					</p>
				</div>
			</div>
		</div>
	);
}

export default About;
