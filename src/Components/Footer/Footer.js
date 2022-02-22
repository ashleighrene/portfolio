import './Footer.css';
import React from 'react';

function Footer(props) {
	return (
		<div className='footerMain'>
			<ul className='footerContainer'>
				<li className='footerCopyright'>
					<small> Copyright &copy; 2022 Ashleigh Waller. </small>
				</li>
				<li className='footerBarcode'>This is a test</li>
			</ul>
		</div>
	);
}

export default Footer;
