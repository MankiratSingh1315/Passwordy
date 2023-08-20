import styles from './login.module.css'

export default function login(){
    return(
        <div className={styles.login}>
            <form>
            <h1>Login</h1>
            <h4>And get access to your passwords</h4>
                <label htmlFor="email" id={styles["email"]}>Email</label>
                <input type="email" id="email" name="email" />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" />
                <button type="submit">Login</button>
                <h4>Don&apos;t have an account? <a href="/signup">Sign Up</a> Now!</h4>
            </form>
        </div>
    )
}