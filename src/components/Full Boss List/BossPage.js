import React, { Fragment, useContext } from 'react'
import { BossesContext } from '../contexts/BossesContext'


const BossPage = () => {
    const { bossesList } = useContext(BossesContext)

    return (
        <Fragment>
            {bossesList ? bossesList.bosses.map(boss => <div key={boss.id}>{boss.name}</div>) : null}
        </Fragment>
    )
}

export default BossPage