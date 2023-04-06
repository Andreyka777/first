import React from 'react'
import site1 from './img/portfolio/site1.png'
import site2 from './img/portfolio/site2.png'
import site3 from './img/portfolio/site3.png'
import site4 from './img/portfolio/site4.png'

function Portfolio(){
    return(
        <div class="portfolio">
        <div class="container">
            <h2 class="section-title">Наши работы</h2>
            <table class="portfolio-table">
                <tr class="portfolio-row">
                    <td class="portfolio-cell cell1"></td>
                    <td class="portfolio-cell cell2"></td>
                </tr>
                <tr class="portfolio-row">
                    <td class="portfolio-cell cell3"></td>
                    <td class="portfolio-cell cell4"></td>
                </tr>
            </table>
            <div class="portfolio-mobile">
                <img src = {site1} class="portfolio-mobile-cell"/>
                <img src = {site2} class="portfolio-mobile-cell"/>
                <img src = {site3} class="portfolio-mobile-cell"/>
                <img src = {site4} class="portfolio-mobile-cell"/>
            </div>
        </div>
    </div>
    )
}

export default Portfolio