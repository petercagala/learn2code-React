import React, {useState, ChangeEvent, FormEvent} from 'react';

import './Tunes.scss';

interface Props {

}

/**
 * component
 */
const Tunes: React.FC<Props>= () => {
    // state
    const [searchQuery, setSearchQuery] = useState('');
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
    ])

    // inputElement
    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    // submit form
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        alert(searchQuery);

        const newSong = {
            id: Math.max(...songs.map(song => song.id)) + 1,
            artist: searchQuery,
            name: searchQuery
        };

        setSongs([
            ...songs,
            newSong
        ]);
        
    }

    // template
    return (
        <div className="tunes">
            <h2>Tunes Page</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" value={searchQuery} onChange={handleInput}></input>
            </form>

            <ul>
                {
                    songs.map(song => (
                    <li key={song.id}>{song.artist + '  -  ' + song.name}</li>
                    ))
                }
            </ul>

        </div>
    );
}


export default Tunes;