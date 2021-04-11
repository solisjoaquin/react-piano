import { useState, useReducer } from 'react'

import useSound from 'use-sound';
import c from '../sounds/mp3Notes/c5.mp3';
import d from '../sounds/mp3Notes/d5.mp3';
import e from '../sounds/mp3Notes/e5.mp3';
import f from '../sounds/mp3Notes/f4.mp3';
import g from '../sounds/mp3Notes/g4.mp3';
import a from '../sounds/mp3Notes/a5.mp3';
import b from '../sounds/mp3Notes/b5.mp3';
import soundUrl from '../sounds/mp3Notes/guitar.mp3';


export const Piano = () => {

    const [play, { stop, isPlaying }] = useSound(soundUrl);

    const [note, setNote] = useState(null)

    const [playC] = useSound(c);
    const [playD] = useSound(d);
    const [playE] = useSound(e);
    const [playF] = useSound(f);
    const [playG] = useSound(g);
    const [playA] = useSound(a);
    const [playB] = useSound(b);

    const handleClickC = () => {
        setNote("DO")
        return playC()
    }

    const handleClickD = () => {
        setNote("RE")
        return playD()
    }

    const handleClickE = () => {
        setNote("MI")
        return playE()
    }

    const handleClickF = () => {
        setNote("FA")
        return playF()
    }

    const handleClickG = () => {
        setNote("SOL")
        return playG()
    }

    const handleClickA = () => {
        setNote("LA")
        return playA()
    }
    const handleClickB = () => {
        setNote("SI")
        return playB()
    }
    return (<div>
        <h2 className="text-3xl text-white text-center font-bold leading-7 py-4 mb-8 sm:text-4xl">Nota = {note}</h2>
        <ul className="set py-5 px-4 hidden lg:block">

            <li onClick={handleClickC} className="white e"></li>
            <li className="black ds"></li>
            <li onClick={handleClickD} className="white d"></li>
            <li className="black cs"></li>
            <li onClick={handleClickE} className="white c"></li>
            <li onClick={handleClickF} className="white b"></li>
            <li className="black as"></li>
            <li onClick={handleClickG} className="white a"></li>
            <li className="black gs"></li>
            <li onClick={handleClickA} className="white g"></li>
            <li className="black fs"></li>
            <li onClick={handleClickB} className="white f"></li>
            <li onClick={handleClickC} className="white e"></li>
            <li className="black ds"></li>
            <li onClick={handleClickD} className="white d"></li>
            <li className="black cs"></li>
            <li onClick={handleClickE} className="white c"></li>
            <li onClick={handleClickF} className="white b"></li>
            <li className="black as"></li>
            <li onClick={handleClickG} className="white a"></li>
            <li className="black gs"></li>
            <li onClick={handleClickA} className="white g"></li>
            <li className="black fs"></li>
            <li onClick={handleClickB} className="white f"></li>
        </ul>

        <ul className="set-mini lg:hidden py-4 px-4">

            <li onClick={handleClickC} className="white e"></li>
            <li className="black ds"></li>
            <li onClick={handleClickD} className="white d"></li>
            <li className="black cs"></li>
            <li onClick={handleClickE} className="white c"></li>
            <li onClick={handleClickF} className="white b"></li>
            <li className="black as"></li>
            <li onClick={handleClickG} className="white a"></li>
            <li className="black gs"></li>
            <li onClick={handleClickA} className="white g"></li>
            <li className="black fs"></li>
            <li onClick={handleClickB} className="white f"></li>

        </ul>


    </div>)
}