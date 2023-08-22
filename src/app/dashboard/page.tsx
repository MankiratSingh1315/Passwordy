import React from 'react';
import styles from './dash.module.css';

export default function dashboard(){
    return(
        <div className={styles.dashboard}>
            <h1>Dashboard</h1>
            <h4>Manage your passwords here</h4>
            <div className={styles.buttons}>
                <button type="submit">Add Password</button>
                <button type="submit">Delete Password</button>
                <button type="submit">Edit Password</button>
                <button type="submit">Search Password</button>
            </div>
        </div>
    )
}