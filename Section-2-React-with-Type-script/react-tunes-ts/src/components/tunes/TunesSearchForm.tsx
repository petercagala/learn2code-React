import React, { ChangeEvent, FormEvent, useRef} from 'react';
import {debounce} from 'lodash-es';

import './TunesSearchForm.scss';



interface Props {
    onSearch: (query: string) => void;
}

const TunesSearchForm: React.FC<Props> = (props) => {
    // Ide o to, aby sme nemuseli naplnat state rodica a pinpongovat sa uplne zbytocne medzi rodicom a dietatom
    // Zadefinuj si tiez, na aky typ odkazu si robis odkaz: useRef<HTMLInputElement>
    const searchInput = useRef<HTMLInputElement>(null);

    // inputElement
    // funkcia musi cakat 500ms na to aby sa odpalila
    const handleInput = debounce(
        (e: ChangeEvent<HTMLInputElement>) => {
            searchFotMusic();
        }
    , 1500);

    // submit form
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        searchFotMusic();
    }

    // search for music
    const searchFotMusic = () => {
        console.log(searchInput.current?.value);

        let searchQuery= searchInput.current?.value;
        if(searchQuery) {
            props.onSearch(searchQuery);
        } 
    };

    return (
        <div>
             <form onSubmit={handleSubmit}>
                 <input type="text" 
                 autoFocus
                 ref={searchInput}
                 onChange={handleInput} 
                 className="search"></input>
             </form>
        </div>
    );
};

export default TunesSearchForm;