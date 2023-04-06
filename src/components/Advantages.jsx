import React from 'react'
import advcircle from './img/background/advantages_bg_1.svg'
import advhexagon from './img/background/advantages_bg_2.svg'

function Advantages(){
    return(
        <div class="advantages" id = "advantages">
        <div class="container">
            <div class="advantages-content">
                <h2 class="section-title advantages-title">Почему мы хороши?</h2>
                <div class="advantages-card adv-card1">
                    <h3 class="advantages-card-title">В дизайне</h3>
                    <ul class="advantages-list">
                        <li class="section-text">Опытная команда дизайнеров</li>
                        <li class="section-text">Внимание к деталям</li>
                        <li class="section-text">Фильтрация идей</li>
                    </ul>
                </div>
                <div class="advantages-card adv-card2">
                    <h3 class="advantages-card-title">В разработке</h3>
                    <ul class="advantages-list">
                        <li class="section-text">Огромный багаж собственных библиотек и плагинов</li>
                        <li class="section-text">Мы любим чистый, красивый и масштабируемый код</li>
                        <li class="section-text">Планируем архитектуру сайта</li>
                    </ul>
                </div>
                <div class="advantages-card adv-card3">
                    <h3 class="advantages-card-title">В поддержке</h3>
                    <ul class="advantages-list">
                        <li class="section-text">Самые дружелюбная тех поддержка</li>
                        <li class="section-text">Работаем 24/7</li>
                        <li class="section-text">Чем дольше поддержка, тем дешевле стоимость</li>
                    </ul>
                </div>
            </div>
            <div class="advantages-bg">
                <img src = {advcircle} class="advangages-circle"/>
                <img src = {advhexagon} class="advangages-hexagon"/>
            </div>
        </div>
    </div>
    )
}

export default Advantages