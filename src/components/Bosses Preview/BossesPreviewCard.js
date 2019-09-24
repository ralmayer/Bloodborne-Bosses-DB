import React from 'react'

const BossesPreviewCard = ({bosses}) => {

    return (
        <div className='boss-preview-cards'>
            <div className='boss-preview-avatar'>{bosses !== null && <img src={bosses.bosses[0].avatar} alt=''/>}</div>
            <div className='boss-preview-text'></div>
            <div className='boss-preview-text'></div>
            <div className='boss-preview-avatar'></div>
        </div>
    )
}

export default BossesPreviewCard