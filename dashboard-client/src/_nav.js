import { CNavItem } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  cilDrop
} from '@coreui/icons'

const _nav = [
    {
        component: CNavItem,
        name: 'Home',
        to: '/',
        icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
    },
    {
        component: CNavItem,
        name: 'Page 1',
        to: '/page1',
        icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
    },
    {
        component: CNavItem,
        name: 'Page 2',
        to: '/page2',
        icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
    },
    {
        component: CNavItem,
        name: 'Graph',
        to: '/graph',
        icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
    }
]

export default _nav
