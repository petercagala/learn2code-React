import React, {useState, ChangeEvent, FormEvent} from 'react';

import './Tunes.scss';

// children
import TunesSearchForm from '../components/tunes/TunesSearchForm';
import TunesList from '../components/tunes/TunesList';
import { toUnicode } from 'punycode';

interface Props {

}

/**
 * component
 */
const Tunes: React.FC<Props>= () => {

    // template
    return (
        <article className="tunes">
            <h1>Tunes page</h1>
            <TunesSearchForm/>
            <TunesList/>
        </article>
    );
}


export default Tunes;