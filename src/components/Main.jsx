import React from 'react'
import circle1 from './img/background/circle1.svg'
import circle2 from './img/background/circle2.svg'
import circle3 from './img/background/circle3.svg'
import circlebordered from './img/background/circle1.svg'
import circledashedborder from './img/background/circle-dashed-border.svg'
import triangle from './img/background/triangle.svg'
import octagon from './img/background/octagon.svg'

function Main(){
  return(
    <div class="main-section" id = "main-section">
        <div class="main-content">
            <h1 class="main-content-text">Мы создаем сайты</h1>
            <a href="" class="main-content-btn">Познакомиться с нами</a>
        </div>
        <div class="main-background">
            <img src = {circle1} class ="circle1"/>
            <img src = {circle2} class ="circle2"/>
            <img src = {circle3} class ="circle3"/>
            <img src = {circlebordered} class ="circle-border"/>
            <img src = {circledashedborder} class ="circle-dashed-border"/>
            <img src = {triangle} class ="triangle"/>
            <img src = {octagon} class ="octagon"/>
        </div>
    </div>
  )
}

export default Main