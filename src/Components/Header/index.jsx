
import styles from './style.module.scss';

export function Header() {
    return (
        <header className={styles.ContainerHeaderAll}>
            <div className={styles.contentHeader}>
                <div className={styles.boxLinks}>
                    <a href="#">Sobre</a>
                    <a href="#">Stack</a>
                    <a href="#">Skills</a>
                    <a href="#">Projetos</a>
                </div>
                <div>
                    <button>
                     Fale comigo
                    </button>
                </div>
            </div>
        </header>
    )
}