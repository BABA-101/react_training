// src/99dan.js 

import styles from './99dan.module.css';

function Dan({ number, children }) {
    return (
        <div className={styles.container}>
            <h1>{children}</h1>
            {number} * 1 = {number * 1} <br></br>
            {number} * 2 = {number * 2} <br></br>
            {number} * 3 = {number * 3} <br></br>
            {number} * 4 = {number * 4} <br></br>
            {number} * 5 = {number * 5} <br></br>
            {number} * 6 = {number * 6} <br></br>
            {number} * 7 = {number * 7} <br></br>
            {number} * 8 = {number * 8} <br></br>
            {number} * 9 = {number * 9} <br></br>
        </div>
    )
}
export default Dan;