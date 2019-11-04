import React, { Fragment } from 'react'
import { Comments } from './Comments'
import Nav from './nav/Nav'
import Footer from './Home/Footer'

const Shouts = () => {
    return <>
        <div id='shouts'>
        <Nav />
            <div id='shoutsBanner'>
                <img src='https://i.imgur.com/Rthl4CD.png' alt='praisin' />
                <div className='break'></div>
                <div>
                    <h1>ありがとうございました！</h1>
                    <p>このページは、Bloodborne、Dark Souls、Demon Souls、Sekiroの作成者である宮崎秀隆に感謝したかったからです。 それらは今まで私のお気に入りのゲームであり、どれだけ多くの素晴らしい思い出をそれらと結び付けたかを明確にすることはできません。 私は彼に直接感謝する機会を得ることができるかどうかわからないので、いつか彼がこれを見ることを願っています！ ありがとうございました！</p>
                </div>
            </div>
            <div className='break'></div>
        </div>
        <Comments pageName='shouts' />
        <Footer />
    </>
}

export default Shouts