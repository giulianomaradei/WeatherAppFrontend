import styles from './NavBar.module.css';
import image from '../assets/images/cloud.png'

function NavBar(){
    return(
        <header className={styles.header}>
            <div className={styles.headerTitle}>Chuva?</div>
            <img src={image} alt='cloud' className={styles.headerImage}></img>
        </header>
    )
}

export default NavBar;