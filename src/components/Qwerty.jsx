import React from 'react'

function Qwerty(){
    return(
        <div class="HomeWork">
            <p class="qwerty" id="services"><b>Наши услуги</b></p>
            <div class="pic123">
                <img src="img/icons/design.svg" class="img"/>
                <p class="qwert"><b>Дизайн сайта</b></p>
                <hr/>
                <p class="qwer">Создание дизайн-пакета, по вашим пожеланиям</p>
            </div>
            <div class="pic123">
                <img src="img/icons/development.svg" class="img"/>
                <p class="qwert"><b>Верстка</b></p>
                <hr/>
                <p class="qwer">Полноценная верстка сайта, его астройка и проверка на баги</p>
            </div>
            <div class="pic123">
                <img src="img/icons/support.svg" class="img"/>
                <p class="qwert"><b>Поддержка</b></p>
                <hr/>
                <p class="qwer">поддержка сайта во время работы</p>
            </div>
        </div>
    )
}

export default Qwerty