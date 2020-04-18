import React, {useState, ChangeEvent, FormEvent} from 'react';

import './Tunes.scss';

// children
import TunesSearchForm from '../components/tunes/TunesSearchForm';
import TunesList from '../components/tunes/TunesList';
import { toUnicode } from 'punycode';

interface Props {

}

/**
 * component
 */
const Tunes: React.FC<Props>= () => {
    const [title, setTitle] = useState('Tunes');

    const [songs, setSongs] = useState([]);


    const handleSearchFormSubmit = (dataSearch: string) => {
        // Budem tahat songy z itunes

        setSongs([

        ]);
    };


    // template
    return (
        <article className="tunes">
            <h1>Tunes page: {title}</h1>
            {/* Ked nastane  udalost v dietati onSearchFormSubmit, postara sa o tuto udalost metoda  handleSearchFormSubmit*/}
            <TunesSearchForm 
            />
            <TunesList songs={songs}/>
        </article>
    );
}


export default Tunes;