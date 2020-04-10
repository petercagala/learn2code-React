import React, {useState} from 'react';

import './TunesList.scss';

interface Props {

}

const TunesList: React.FC<Props> = () => {
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

