import React from 'react'
import BossesPreviewCard from './BossesPreviewCard'

const BossesPreview = ({bosses}) => 
    <div className='bosses-preview'>
        <BossesPreviewCard bosses={bosses}/>
    </div>


export default BossesPreview