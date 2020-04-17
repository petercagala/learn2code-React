import React, {useState} from 'react';

import './TunesList.scss';

// TunesList je vseobecny zobrazovac dat. Zobrazi cookolvek mu rodic posle, ale na to potrebuje
// naplnit svoje props od rodica

interface Props {
    // songs: su pole takehoto datoveho typu
    songs: {id: number, artist: string, name: string}[];
}

const TunesList: React.FC<Props> = (props) => {
    // Rozlozenie props na konstanty
    const {songs} = props;

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

