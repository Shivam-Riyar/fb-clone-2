import React from 'react'
import './SidebarRow.css'
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';

function SidebarRow({ src, Icon, title }) {
    return (
        <div className="sidebarRow">
            {src && <AccountCircleRoundedIcon src={src} />}
            {Icon && <Icon />}

            <h4>{title}</h4>
        </div>
    )
}

export default SidebarRow
