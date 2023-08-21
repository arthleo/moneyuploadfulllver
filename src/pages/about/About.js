import styles from './About.module.css'
import logo from './frame.png';
import { GiBoltBomb } from "react-icons/gi"

export default function About() {
   
    return (
        <div className='content'>
          <h3>Powered by Arthur Leonard <GiBoltBomb /> </h3>
          <hr />
          <img src={logo} alt="logo" />
          <p>The online version is ready to use!</p>
        </div>
        )
}