
// css
import styles from './NavBar.module.css'

// hooks
import { Link } from 'react-router-dom';

const NavBar = ({ condition }) => {
    return (
        <nav className={ condition ? styles.nav_bar_register : styles.nav_bar }>
            <div className={ styles.nav_bar_container }>
                <Link to='/'>
                    <h1 className={ styles.title_navbar }>Ajuda<span>Já</span></h1>
                </Link>
                <div className='img_container container_images'></div>
            </div>

            <div className={ `${styles.profile_container} container_images` }>
                <Link to='/cadastro'>
                    <span className="material-symbols-outlined" id='person'>person</span>
                </Link>
            </div>
        </nav>
    );
};

export default NavBar;
