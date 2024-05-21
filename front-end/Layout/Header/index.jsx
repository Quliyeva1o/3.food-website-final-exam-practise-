import { Link } from "react-router-dom"
import styles from "./index.module.scss"
const Header = () => {
    return (
        <>
            <div className={` ${styles.head}`}><div className={` ${styles.header}`}>
                <div className="container w-100 d-flex justify-content-between ">
                    <div><h1>EATWELL
                    </h1></div>
                    <div className={styles.nav}><ul className={`d-flex ${styles.navlinks} `}>
                        <li><Link className={styles.active}>HOME</Link></li>
                        <li><Link>ABOUT</Link></li>
                        <li><Link>OFFER</Link></li>
                        <li><Link>MENU</Link></li>
                        <li><Link to={"basket"}>BASKET</Link></li>
                        <li><Link to={"add-item"}>ADD</Link></li>
                    </ul></div>
                </div>
            </div></div>
        </>
    )
}

export default Header
