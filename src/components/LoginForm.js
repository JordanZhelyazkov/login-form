import styles from "./LoginForm.module.css"

export default function LoginForm(){
return (
<form className="submit">
           <label className={styles.label}>Name</label>
           <input className={styles.input}></input>
           <label className={styles.label}>Password</label>
           <input className={styles.input}></input>
           <button type={styles.submit}>Submit</button>
          </form>
)
}

