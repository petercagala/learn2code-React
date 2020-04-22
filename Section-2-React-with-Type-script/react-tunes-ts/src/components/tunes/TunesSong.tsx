import React, {useMemo, useEffect} from 'react';

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


    /**
     * Obal tuto funkciu do useMemo() a definuj, kedy sa ma spustit. Spusti sa iba vtedy, ak  by sa 
     * zmenil Props song.title, alebo  song.artist. dovtedy sa bude pouzivat caschovana verzia
     */
    const songify = useMemo(() => (newSong: Song): string => {
        let newTitle: string = newSong.artist + " - " + newSong.title;

        return createShortenTitle(newTitle, 100);
    }, 
    [song.title, song.artist]);


    // Ak definujem defaultnu hodnotu pre parameter a je z nej jasne o aky typ pojde, uz ju typ nemusim 
    // dalej definovat
    const createShortenTitle = (baseTitle: string, maxLength = 55): string =>  {

        return truncate(baseTitle, {
            'length': maxLength
          });
    }

    // side effect cez HOOK useEffect
    // Vyhodi sa vzdy automaticky, ak sa vola nejaky sideEffect ako fetch, axios getter, eventListener, spustenie timerov
    // Odpali sa samozrejme pri odpalenie kazdeho jedneho komponentu. Takze ked mi prislo zo serveru 5 pesniciek a pre kazdu pesnicku
    // sa vyrenderuje stranka na zaklade tohoto komponentu, tak sa tento useEffect zavola 5 krat
    // tento vedlajsi efekt nech sa spusti iba vtedy, ked sa zmeni tato vedlajsia hodnota
    // FINTA!!!! [] -> tento efekt nezavisi od ziadnej hodnoty, preto neexistuje ziaden dovod, preco by sa mal spostit znova. Spusti
    // sa iba raz pri prvom zobrazeni a potom sa uz nespusti
    // useEffect(() => {
    //     alert("side effect, biatch!!!");
    // },
    // [])

    return (
        <article className="song">

            <div className="inside">
                <h2>{songify(song)}</h2>
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