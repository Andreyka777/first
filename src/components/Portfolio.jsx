import React from 'react'

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
                <img src="img/portfolio/site1.png" class="portfolio-mobile-cell"/>
                <img src="img/portfolio/site2.png" class="portfolio-mobile-cell"/>
                <img src="img/portfolio/site3.png" class="portfolio-mobile-cell"/>
                <img src="img/portfolio/site4.png" class="portfolio-mobile-cell"/>
            </div>
        </div>
    </div>
    )
}

export default Portfolio