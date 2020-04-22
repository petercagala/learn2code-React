import React from 'react';

import {truncate} from "lodash-es";

import './TunesSong.scss';
import { Song } from '../../types';

// TunesList je vseobecny zobrazovac dat. Zobrazi cookolvek mu rodic posle, ale na to potrebuje
// naplnit svoje props od rodica

interface Props {
    song: Song;
}

const TunesSong: React.FC<Props> = (props) => {
    const {song} = props;

    const songify = (): string => {
        let newTitle: string = song.artist + " - " + song.title;

        return createShortenTitle(newTitle, 100);
    };

    // Ak definujem defaultnu hodnotu pre parameter a je z nej jasne o aky typ pojde, uz ju typ nemusim 
    // dalej definovat
    const createShortenTitle = (baseTitle: string, maxLength = 55): string =>  {

        return truncate(baseTitle, {
            'length': maxLength
          });
    }

    return (
        <article className="song">

            <div className="inside">
                <h2>{songify()}</h2>
                <div className="player">
                    {
                        // artwork je optional, takze img sa vytvori len vtedy, ak artwork existuje
                        song.artwork && (
                            <img src={song.artwork} alt="album art"></img>
                        )
                    }
                    <audio src={song.audioFile} controls></audio>
                    
                </div>
            </div>

            <footer className="meta">
                {createShortenTitle(song.album)}
            </footer>

        </article>
    );
}


export default TunesSong;