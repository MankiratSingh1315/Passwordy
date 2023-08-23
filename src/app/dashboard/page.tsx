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
            {/* table to show all the passwords */}
            <table className={styles.table}>
                <tr>
                    <th>Website</th>
                    <th>Username/Email used</th>
                    <th>Password</th>
                </tr>
                <tr>
                    <td>Google</td>
                    <td>
                        <p>yo@gmail.com</p>
                    </td>
                    <td>
                        <button type="submit">Copy</button>
                    </td>
                </tr>
                <tr>
                    <td>Facebook</td>
                    <td>
                        <p>
                            test user
                        </p>
                        <button type="submit">Copy</button>
                    </td>
                    <td>
                        <button type="submit">Copy</button>
                    </td>
                </tr>
            </table>
        </div>
    )
}