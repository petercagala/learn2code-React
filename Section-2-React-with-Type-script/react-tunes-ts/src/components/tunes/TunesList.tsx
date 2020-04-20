import React from 'react';
import {Song} from '../../types/index';

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
    let song: Song = {id: 1, artist: "PEter", name: "Cagala"};

    return (
        <ul className="tunes-list">
            {
                songs.map(song => (
                <li key={song.id}>{song.artist + '  -  ' + song.name}</li>
                ))
           }
        </ul>
    );
};

export default TunesList;

