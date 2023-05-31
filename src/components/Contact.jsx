import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaRegEnvelope } from 'react-icons/fa';

export default function MyContact(){
    return (
        <div>
            
            <div id="contacts-title">
                <h1>Contact Me!</h1>
            </div>
            <div id="contacts-container">
                <a class="contact_image" href="https://github.com/" target="_blank"><FaGithub /></a>
                <a class="contact_image" href="https://www.linkedin.com/in/ellis-chang-82b04ba3/" target="_blank"><FaLinkedin /></a>
                <a class="contact_image" href="mailto:ellischang99@gmail.com" target="_blank"><FaRegEnvelope /></a>
            </div>
        </div>
    )
}