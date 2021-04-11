import { useState, useReducer } from 'react'

import useSound from 'use-sound';
import c from '../sounds/mp3Notes/c3.mp3';
import d from '../sounds/mp3Notes/d3.mp3';
import e from '../sounds/mp3Notes/e3.mp3';
import f from '../sounds/mp3Notes/f3.mp3';
import g from '../sounds/mp3Notes/g3.mp3';
import a from '../sounds/mp3Notes/a4.mp3';
import b from '../sounds/mp3Notes/b4.mp3';

import c2 from '../sounds/mp3Notes/c4.mp3';
import d2 from '../sounds/mp3Notes/d4.mp3';
import e2 from '../sounds/mp3Notes/e4.mp3';
import f2 from '../sounds/mp3Notes/f4.mp3';
import g2 from '../sounds/mp3Notes/g4.mp3';
import a2 from '../sounds/mp3Notes/a5.mp3';
import b2 from '../sounds/mp3Notes/b5.mp3';
import soundUrl from '../sounds/mp3Notes/guitar.mp3';


export const Piano = () => {

    /* const [play, { stop, isPlaying }] = useSound(soundUrl); */

    const [note, setNote] = useState(null)

    const [playC] = useSound(c);
    const [playD] = useSound(d);
    const [playE] = useSound(e);
    const [playF] = useSound(f);
    const [playG] = useSound(g);
    const [playA] = useSound(a);
    const [playB] = useSound(b);

    const [playC2] = useSound(c2);
    const [playD2] = useSound(d2);
    const [playE2] = useSound(e2);
    const [playF2] = useSound(f2);
    const [playG2] = useSound(g2);
    const [playA2] = useSound(a2);
    const [playB2] = useSound(b2);

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

    const handleClickC2 = () => {
        setNote("DO")
        return playC2()
    }

    const handleClickD2 = () => {
        setNote("RE")
        return playD2()
    }

    const handleClickE2 = () => {
        setNote("MI")
        return playE2()
    }

    const handleClickF2 = () => {
        setNote("FA")
        return playF2()
    }

    const handleClickG2 = () => {
        setNote("SOL")
        return playG2()
    }

    const handleClickA2 = () => {
        setNote("LA")
        return playA2()
    }
    const handleClickB2 = () => {
        setNote("SI")
        return playB2()
    }
    return (<div>
        <h2 className="title text-3xl text-white text-center font-bold leading-7 py-4 mb-8 sm:text-4xl">Nota = {note}</h2>
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
            <li onClick={handleClickC2} className="white e"></li>
            <li className="black ds"></li>
            <li onClick={handleClickD2} className="white d"></li>
            <li className="black cs"></li>
            <li onClick={handleClickE2} className="white c"></li>
            <li onClick={handleClickF2} className="white b"></li>
            <li className="black as"></li>
            <li onClick={handleClickG2} className="white a"></li>
            <li className="black gs"></li>
            <li onClick={handleClickA2} className="white g"></li>
            <li className="black fs"></li>
            <li onClick={handleClickB2} className="white f"></li>
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