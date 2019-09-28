import React, { Fragment, useContext } from 'react'
import { BossesContext } from '../contexts/BossesContext'
import NestedMoreButton from './NestedMoreButton'

const BossesPreviewCard = () => {

    const { bossesList } = useContext(BossesContext)

    return (
            <div className='boss-preview-cards'>
                {bossesList.bosses.slice(0, 3).map((boss, index) =>
                    <Fragment>
                        <div className='boss-preview-avatar' id={`bossPreviewAvatar${index}`}><img src={boss.avatar} alt={boss.id} /></div>
                        <div className='boss-preview-title' id={`bossPreviewTitle${index}`}><a href='#'>{boss.name}</a></div>
                        <div className='boss-preview-text' id={`bossPreviewText${index}`}><div className='boss-preview-title-nested'><a href='#'>{boss.name}</a></div><br />{`${boss.lore.substring(0, 300)}...`}<NestedMoreButton /></div>
                    </Fragment>
                )}
            </div>

    )
}

export default BossesPreviewCard