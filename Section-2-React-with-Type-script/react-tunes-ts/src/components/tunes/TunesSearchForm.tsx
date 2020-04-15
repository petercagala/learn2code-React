import React, {useState, ChangeEvent, FormEvent} from 'react';

import './TunesSearchForm.scss';



interface Props {
    // onSearchFormSubmit je funkcia, ktora ma vstupny parameter data typu string a neviacia nic
    onSearchFormSubmit: (data: string) => void;
}

const TunesSearchForm: React.FC<Props> = (props) => {
    const [searchQuery, setSearchQuery] = useState('');

    // inputElement
    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    // submit form
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        props.onSearchFormSubmit(searchQuery);


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