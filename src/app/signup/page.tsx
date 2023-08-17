import React from "react";
import styles from "./page.module.css";

export default function SignupPage() {
    
    return (
        <div className={styles.signup}>
            <form>
            <h1>Sign Up</h1>
            <h4>And be ready for your passwords to be managed hassle free.</h4>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" />
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input type="password" id="confirmPassword" name="confirmPassword" />
                <button type="submit">Sign Up</button>
            </form>

        </div>
    );

}