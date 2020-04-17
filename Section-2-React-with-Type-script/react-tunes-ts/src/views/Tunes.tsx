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

    const [songs, setSongs] = useState([
        {
            id: 1,
            artist: 'Palo Habera',
            name: 'Ak nie si moja'
        },
        {
            id: 2,
            artist: 'Richard Muller',
            name: 'do cista'
        },
        {
            id: 3,
            artist: 'Jana Kirschner',
            name: 'Liska'
        }
    ]);

    const [searchQuery, setSearchQuery] = useState('');


    const handleSearchFormSubmit = (dataSearch: string) => {
        // Dieta zmenilo stav rodicovi, ale nepriamo. Rodic sam zmenil svoj stav, cez handleSearchFormSubmit,
        // ktoru ale uz zavolalo dieta
        setTitle(dataSearch);

        const newSong = {
            id: Math.max(...songs.map(song => song.id)) + 1,
            artist: dataSearch,
            name: dataSearch
        };

        setSongs([
            ...songs,
            newSong
        ]);
    };

    const handleInputChange = (dataInput: string) => {
        setSearchQuery(dataInput);
    }

    // template
    return (
        <article className="tunes">
            <h1>Tunes page: {title}</h1>
            {/* Ked nastane  udalost v dietati onSearchFormSubmit, postara sa o tuto udalost metoda  handleSearchFormSubmit*/}
            <TunesSearchForm 
                searchQuery = {searchQuery} 
                onInputChange = {handleInputChange}
                onSearchFormSubmit={handleSearchFormSubmit}/>
            <TunesList songs={songs}/>
        </article>
    );
}


export default Tunes;