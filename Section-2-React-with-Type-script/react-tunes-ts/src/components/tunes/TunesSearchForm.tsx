import React, {useState, ChangeEvent, FormEvent, useRef} from 'react';

import './TunesSearchForm.scss';



interface Props {
}

const TunesSearchForm: React.FC<Props> = (props) => {
    // Ide o to, aby sme nemuseli naplnat state rodica a pinpongovat sa uplne zbytocne medzi rodicom a dietatom
    // Zadefinuj si tiez, na aky typ odkazu si robis odkaz: useRef<HTMLInputElement>
    const searchInput = useRef<HTMLInputElement>(null);

    // inputElement
    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        searchFotMusic();
    };

    // submit form
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        searchFotMusic();
    }

    // search for music
    const searchFotMusic = () => {
        // 
        console.log(searchInput.current?.value);
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