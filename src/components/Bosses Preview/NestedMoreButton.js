import React from 'react'
import { Link } from 'react-router-dom'

const NestedMoreButton = ({ path }) =>
    <div id='nestedBossesPreviewMoreButton'>
        <Link to={`/bosses/${path}`}>
            <div>
                learn more
            </div>
        </Link>
    </div>

export default NestedMoreButton