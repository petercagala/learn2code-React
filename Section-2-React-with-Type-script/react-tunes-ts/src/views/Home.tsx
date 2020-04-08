import React, {useState, useEffect} from 'react';

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
    // useState() vracia premennu "title" a funkciu "setTitle", ktora nastavi premennu "title"
    // funkcia "setTitle" je vlastne specianlna funkcia setState, ale len pre title
    const [title, setTitle] = useState("React whee");
    const [count, setCount] = useState(1);
    const [oldTitle, setOldTitle] = useState(document.title);

    useEffect(() => {
        document.title = title;
    });

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