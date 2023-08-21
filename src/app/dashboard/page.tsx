import React from 'react';

export default function dashboard(){
    return(
        <div>
            {/* interface for a password managing app
                - list of passwords
                - add password
                - delete password
                - edit password
                - search password
                - logout
            */}
            <div>
                <h1>Dashboard</h1>
                <h4>Manage your passwords here</h4>
                <button type="submit">Add Password</button>
                <button type="submit">Delete Password</button>
                <button type="submit">Edit Password</button>
                <button type="submit">Search Password</button>  
                <button type="submit">Logout</button>
            </div>
        </div>
    )
}