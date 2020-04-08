import React from 'react';

// styles
import './Home.scss';

// assets
import logo from '../img/logo.svg';

interface Props {

}

/**
 * 
 */
const Home: React.FC<Props> = () => {
    return (
		<div className="home">
			<img className="logo" src={logo} alt="react logo" />

			<h1>React wheel!</h1>

			<p>
				Hot singles in your area. <br />
				Hotter react in your&nbsp;
				<a
					href="https://reactjs.org/docs"
					target="_blank"
					rel="noopener noreferrer"
				>
					documentation
				</a>
				.
			</p>
		</div>
    );
}

export default Home;