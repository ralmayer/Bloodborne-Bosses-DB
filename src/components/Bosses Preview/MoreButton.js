import React from 'react'
import { Link } from 'react-router-dom'

const MoreButton = () =>
    <div id='bossesPreviewMoreButton'>
        <Link to='/bosses'>
            <div>
                full list
            </div>
        </Link>
    </div>

export default MoreButton