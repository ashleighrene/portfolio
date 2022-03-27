import './About.scss';
import github from '../../assets/github.svg';
import linkedin from '../../assets/linkedin.svg';
import resume from '../../assets/resume.svg';
import html from '../../assets/html.svg';
import css from '../../assets/css.svg';
import sass from '../../assets/sass.svg';
import js from '../../assets/js.svg';
import react from '../../assets/react.svg';
import ruby from '../../assets/ruby.svg';
import python from '../../assets/python.svg';
import git from '../../assets/git.svg';
import node from '../../assets/node.svg';
import postman from '../../assets/postman.svg';

function About(props) {
	return (
		<div className='About' id='about'>
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

				<div className='skillsMain' id='skills'>
					<img src={html} alt='html' />
					<img src={css} alt='css' />
					<img src={sass} alt='sass' />
					<img src={js} alt='js' />

					<img src={react} alt='react' />
					<img src={ruby} alt='ruby' />
					<img src={python} alt='python' />
					<img src={git} alt='git' />
					<img src={github} alt='github' />
					<img src={node} alt='node' />
					<img src={postman} alt='postman' />
				</div>
			</div>
		</div>
	);
}

export default About;
