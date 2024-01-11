import React from 'react'
import * as FaIcons from 'react-icons/fa'

export const SidebarData = [
    {
        title: 'Home',
        path: '/home',
        icon: <FaIcons.FaHome />
    },
    {
        title: 'Admin',
        path: '/admin',
        icon: <FaIcons.FaLock />
    },
    {
        title: 'Reference',
        path: '/reference',
        icon: <FaIcons.FaTasks />
    },
    {
        title: 'Logout',
        path: '/login',
        icon: <FaIcons.FaSignOutAlt />
    }
]