import React from 'react';

const Header =({changePage}) => {



    return (
        <div>
            <header>
                <a href="/">Главная</a>
                <a href="/Gallery">Галерея</a>
                <a href="/Blog">Блог</a>
                <a href="/School">Школа</a>
                <a href="/Contacts">Контакты</a>
            </header>
        </div>
    )
}

export default Header;