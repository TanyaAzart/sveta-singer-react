import React from 'react';

const Footer = ({changePage}) => {

    return (
        <div >
            <footer>
                <div class="footer-link">
                    <a href="/">Главная</a>
                    <a href="/Gallery">Галерея</a>
                    <a href="/Blog">Блог</a>
                    <a href="/School">Школа</a>
                    <a href="/Contacts">Контакты</a>
                </div>
                <p>Created by Tanya Azart</p>      
            </footer>
        </div>
    )
}

export default Footer;