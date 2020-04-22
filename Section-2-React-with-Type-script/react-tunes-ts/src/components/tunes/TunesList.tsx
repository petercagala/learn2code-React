import React from 'react';
import {Song} from '../../types/index';

import TunesSong from "./TunesSong";

import './TunesList.scss';

// TunesList je vseobecny zobrazovac dat. Zobrazi cookolvek mu rodic posle, ale na to potrebuje
// naplnit svoje props od rodica

interface Props {
    // songs: su pole takehoto datoveho typu
    songs: Song[];
}

const TunesList: React.FC<Props> = (props) => {
    // Rozlozenie props na konstanty
    const {songs} = props;

    // Cize mam krasne definovany, exportovany, importovany aj deklarovany datovy typ a aj inicializovany
    let song: Song = {
        id: 1, 
        artist: "Peter", 
        album: "nejaky album",
        audioFile: "url cesta k file",
        title: "Title k nejakej piesni"
    };

    return (
        <ul className="tunes-list">
            {
                songs.map((song: Song) => (
                    <li key={song.id}>
                        <TunesSong song={song}></TunesSong>
                    </li>
                ))
           }
        </ul>
    );
};

export default TunesList;

