import React, {useState} from 'react';

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
    // HOOKS: pozitie reactivnych metod aj vo koponentoch vyrobenych cez funkciu
    // useState() vracia premennu "title" a funkciu "setTitle", ktora nastavi premennu "title"
    // funkcia "setTitle" je vlastne specianlna funkcia setState, ale len pre title
    // !!! useState() musi byt uplne hore v ramci komponentu, nesmie byt v podmienke
    const [title, setTitle] = useState("React whee");
    const [count, setCount] = useState(1);


    return (
		<div className="home">
			<img className="logo" src={logo} alt="react logo" />

            <h1 onClick={() => {
                if(title === "balls") {
                    // ked chcem pouzit predchadzajucu hodnotu "count"
                    setCount(prevCount => prevCount + 1);
                    setTitle("React whee" + "!".repeat(count));
                } else {
                    setTitle("balls");
                }
            }}>{title}</h1>

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