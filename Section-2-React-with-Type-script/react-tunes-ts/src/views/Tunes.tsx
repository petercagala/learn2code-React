import React, {useState} from 'react';
import axios from 'axios';

import './Tunes.scss';

// children
import TunesSearchForm from '../components/tunes/TunesSearchForm';
import TunesList from '../components/tunes/TunesList';

interface Props {

}

/**
 * component
 */
const Tunes: React.FC<Props>= () => {
    const [title, setTitle] = useState('Tunes');

    const [songs, setSongs] = useState([]);


    const handleSearch = (query: string) => {
        // Budem tahat songy z itunes
        //https://itunes.apple.com/search?parameterkeyvalue
        // Pozor, niekedy pri urcitych stringoch vo vyhladavani to z nepochopitelnych dovodov nefunguje!!!
        // Dost zavisi aj od riadkovania, ako sa ten URL string vyrobi
        let urlQuery: string = `https://itunes.apple.com/search?term=${encodeURI(query)}
                    &entiry=musicTrack
                    &limit=5`;

        console.log(urlQuery);

        let response = axios.get(
            urlQuery
        ).then(response => {
            console.log(response);

            // setSongs([
            //     response.data.results
            // ]);
        });


    };


    // template
    return (
        <article className="tunes">
            <h1>Tunes page: {title}</h1>
            {/* Ked nastane  udalost v dietati onSearchFormSubmit, postara sa o tuto udalost metoda  handleSearchFormSubmit*/}
            <TunesSearchForm 
                onSearch={handleSearch}
            />
            <TunesList songs={songs}/>
        </article>
    );
}


export default Tunes;