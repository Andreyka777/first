import React from 'react'
function Navmenu(){
    return(
        <div class="nav-menu">
        <a href="#main-section" class = "logo-link"><image src="img/logo.svg" alt="logo" class="nav-logo"/></a>
            <div class="nav-container">
                <a href="#about" class="nav-item">О нас</a>
                <a href="#doing" class="nav-item">Что мы делаем</a>
                <a href="#services" class="nav-item">Услуги</a>
                <a href="#advantages" class="nav-item">Преимущества</a>
                <a href="" class="nav-item">Портфолио</a>
                <a href="#contact-us" class="nav-item">Связаться</a>
            </div>
        </div>
    )
}
export default Navmenu