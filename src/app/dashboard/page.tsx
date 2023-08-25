'use client'

import React from 'react';
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";
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
            <Table isStriped aria-label='Example static collection table'>
                <TableHeader>
                    <TableColumn>Website</TableColumn>
                    <TableColumn>Username/Email used</TableColumn>
                    <TableColumn>Password</TableColumn>
                </TableHeader>
                <TableBody>
                    <TableRow key="1">
                        <TableCell>Google</TableCell>
                        <TableCell>yo@gmail.com</TableCell>
                        <TableCell>password</TableCell>
                    </TableRow>
                    <TableRow key="2">
                        <TableCell>Face Book</TableCell>
                        <TableCell>Falana/Dhimkana</TableCell>
                        <TableCell>password</TableCell>
                    </TableRow>
                </TableBody>
                </Table>
        </div>
    )
}