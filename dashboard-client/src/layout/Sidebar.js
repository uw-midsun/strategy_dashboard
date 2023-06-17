import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { CSidebar, CSidebarBrand, CSidebarNav, CSidebarToggler } from '@coreui/react'

import { SidebarNav } from './SidebarNav'

import SimpleBar from 'simplebar-react'
import 'simplebar-react/dist/simplebar.min.css'

// sidebar nav config
import navigation from '../_nav'

const AppSidebar = () => {
  const dispatch = useDispatch()
  const unfoldable = useSelector((state) => state.sidebarUnfoldable)

  return (
    <CSidebar
      position="fixed"
      unfoldable={unfoldable}
    >
      <CSidebarBrand className="d-none d-md-flex" to="/">
        <h6 className="sidebar-brand-full">Midnight Sun</h6>
        <h6 className="sidebar-brand-narrow">MS</h6>
      </CSidebarBrand>
      <CSidebarNav>
        <SimpleBar>
          <SidebarNav items={navigation} />
        </SimpleBar>
      </CSidebarNav>
      <CSidebarToggler
        className="d-none d-lg-flex"
        onClick={() => dispatch({ type: 'set', sidebarUnfoldable: !unfoldable })}
      />
    </CSidebar>
  )
}

export default React.memo(AppSidebar)