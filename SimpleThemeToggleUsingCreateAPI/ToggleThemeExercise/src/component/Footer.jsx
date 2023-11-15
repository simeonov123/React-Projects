import {useContext} from 'react';
import { ThemeContext } from '../store/ThemeContextProvider';
import Button from './Button';

export default function Footer(){
    const ctx = useContext(ThemeContext);

    return (
        <>
        <div>
        <p>{ctx.labelText}</p>
        <Button/>
        </div>
        </>
    );
}