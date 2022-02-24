import './Skills.scss';
import html from '../../assets/html.svg';
import css from '../../assets/css.svg';
import sass from '../../assets/sass.svg';
import js from '../../assets/js.svg';
import react from '../../assets/react.svg';
import ruby from '../../assets/ruby.svg';
import python from '../../assets/python.svg';
import git from '../../assets/git.svg';
import github from '../../assets/github.svg';
import node from '../../assets/node.svg';
import postman from '../../assets/postman.svg';

function Skills(props) {
	return (
		<div className='skillsMain'>
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
	);
}

export default Skills;
