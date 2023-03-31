import React from 'react'
function Burgermenu(){
    return(
        <div class="hamburger-menu">
            <input type="checkbox" id="menu_toggle" />
            <label for="menu_toggle" class="menu-btn">
                <span></span>
            </label>
            <div class="nav-box">
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
export default Burgermenu