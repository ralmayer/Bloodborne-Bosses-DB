import React, { Fragment } from 'react'

const BossesPreviewCard = ({ bosses }) => {

    return (
        <div className='boss-preview-cards'>
            {bosses.bosses.map((boss) => 
                <Fragment>
                    <div className='boss-preview-avatar'><img src={boss.avatar} alt={boss.id} /></div>
                    <div className='boss-preview-text'>r</div>
                </Fragment>
            )}
        </div>
    )
}

export default BossesPreviewCard