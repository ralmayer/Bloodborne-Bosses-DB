import React, { Fragment, useContext } from 'react'
import { BossesContext } from '../contexts/BossesContext'

const BossPage = ({match: {params: {id}}}) => {
    
    const { bossesList } = useContext(BossesContext)

    return (
        
        <Fragment>
            <div>
                {bossesList ? bossesList.bosses.filter(obj => obj.id === id)[0].name : null}
            </div>
        </Fragment>
    )
}

export default BossPage