import React, {useState, ChangeEvent, FormEvent} from 'react';

import './TunesSearchForm.scss';



interface Props {
    // onSearchFormSubmit je funkcia, ktora ma vstupny parameter data typu string a neviacia nic
    onSearchFormSubmit: (data: string) => void;
    searchQuery: string;
    onInputChange: (data: string) => void;
}

const TunesSearchForm: React.FC<Props> = (props) => {
    const {onSearchFormSubmit, searchQuery, onInputChange} = props;

    // inputElement
    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        // setSearchQuery(e.target.value);
        onInputChange(e.target.value);
    };

    // submit form
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        onSearchFormSubmit(searchQuery);
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