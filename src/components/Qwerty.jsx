import React from 'react'
import design from './img/icons/design.svg' 
import development from './img/icons/development.svg' 
import support from './img/icons/support.svg' 

function Qwerty(){
    return(
        <div class="HomeWork">
            <p class="qwerty" id="services"><b>Наши услуги</b></p>
            <div class="pic123">
                <img src = {design} class="img"/>
                <p class="qwert"><b>Дизайн сайта</b></p>
                <hr/>
                <p class="qwer">Создание дизайн-пакета, по вашим пожеланиям</p>
            </div>
            <div class="pic123">
                <img src = {development} class="img"/>
                <p class="qwert"><b>Верстка</b></p>
                <hr/>
                <p class="qwer">Полноценная верстка сайта, его астройка и проверка на баги</p>
            </div>
            <div class="pic123">
                <img src = {support} class="img"/>
                <p class="qwert"><b>Поддержка</b></p>
                <hr/>
                <p class="qwer">поддержка сайта во время работы</p>
            </div>
        </div>
    )
}

export default Qwerty