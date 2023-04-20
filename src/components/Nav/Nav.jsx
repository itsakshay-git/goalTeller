import React from 'react';
import styles from './Nav.module.scss'

const Nav = () => {
  return (
    <div className={styles.nav}>
        <h1>GOALTELLER</h1>
        <div className={styles.profile}>
            <button>Logout</button>
            <div>
                <img src="http://www.goodmorningimagesdownload.com/wp-content/uploads/2021/12/Best-Quality-Profile-Images-Pic-Download-2023.jpg" alt="profile" height={"40px"} width={"40p"}/>
            </div>
        </div>
    </div>
  )
}

export default Nav