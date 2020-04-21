import React, {useState} from 'react';
import axios from 'axios';

import './Tunes.scss';

// children
import TunesSearchForm from '../components/tunes/TunesSearchForm';
import TunesList from '../components/tunes/TunesList';
import {SongFromItunes, Song} from '../types/index';

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

        // console.log(urlQuery);

        let response = axios.get(
            urlQuery
        ).then(response => {
            // Pre istotu len tie songy, ktore song.kind === 'song'
            let itunesSongs = response.data.results
                .filter((song:SongFromItunes) => song.kind === 'song')
                .map((song: SongFromItunes) => extractData(song))
                ;

            console.log(itunesSongs);

            // setSongs([
            //     response.data.results
            // ]);
        });


    };

    // Ignoracia typescriptu, docasna samozrejme
    // funkcia zerie type any, alebo si ten typ vyrobim ako SongFromItunes!!!
    // Vytiahnem si len tie atributy z SongFromItunes ktore potrebujem a rovno si tie potrebne premenujem
    // a tymi potrebnymi premenovanymi potom nakrmim vracajuci objekt Song
    const extractData = ({
        trackId: id,
        artistName: name,
        previewUrl: url,
        artworkUrl100: artWork,
        trackName: title,
        collectionName: album 
    } : SongFromItunes) => {
        let song: Song = {
            id: id,
            artist: name,
            audioFile: url,
            artwork: artWork,
            title: title,
            album: album
        };
        // Definujeme, aky typ funkcia vrasia cez as
        return song as Song;
    }


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