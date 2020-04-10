import React, {useState, ChangeEvent, FormEvent} from 'react';

import './TunesSearchForm.scss';



interface Props {

}

const TunesSearchForm: React.FC<Props> = () => {
    const [searchQuery, setSearchQuery] = useState('');

    // inputElement
    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    // submit form
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        alert(searchQuery);

        // const newSong = {
        //     id: Math.max(...songs.map(song => song.id)) + 1,
        //     artist: searchQuery,
        //     name: searchQuery
        // };

        // setSongs([
        //     ...songs,
        //     newSong
        // ]);
        
    }

    return (
        <div>
             <form onSubmit={handleSubmit}>
                 <input type="text" 
                 value={searchQuery} 
                 onChange={handleInput} 
                 className="search"></input>
             </form>
        </div>
    );
};

export default TunesSearchForm;