import React, { useState } from 'react'
import XIcon from '@mui/icons-material/X';
import './SidebarOptions.css'
import './Sidebar.css'
import SidebarOptions from './SidebarOptions';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailIcon from '@mui/icons-material/Mail';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import MoreIcon from '@mui/icons-material/More';
import DoneIcon from '@mui/icons-material/Done';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { Button, Divider, ListItemIcon } from '@mui/material'
import { Avatar } from '@mui/material';
import { IconButton, Menu, MenuItem } from '@mui/material';
import Signup from '../Signup/Signup';
import { Link } from 'react-router-dom';





const Sidebar = ({ handleLogout, user, onSignup }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);
  
  const handleClick = e => {
    setAnchorEl(e.target);
  }

  const handleClose = () => {
    setAnchorEl(null);
  }



  return (
    <div className='sidebar'>
      <XIcon className='sidebar__twitterIcon' />
      <SidebarOptions active text='Home' to Icon={HomeIcon} />
      <Link to='/home/explore' style={{textDecoration:'none', color:'black'}}><SidebarOptions active text='Explore' Icon={SearchIcon} /></Link>
      <Link to='/home/notification' style={{textDecoration:'none', color:'black'}}><SidebarOptions active text='Notification' Icon={NotificationsIcon} /></Link>
      <Link to='/home/message' style={{textDecoration:'none', color:'black'}}><SidebarOptions active text='Messages' Icon={MailIcon} /></Link>
      <Link to='/home/bookmark' style={{textDecoration:'none', color:'black'}}><SidebarOptions active text='Bookmarks' Icon={BookmarkIcon} /></Link>
      <Link to='/home/list' style={{textDecoration:'none', color:'black'}}><SidebarOptions active text='Lists' Icon={ListAltIcon} /></Link>
      <Link to='/home/profile'style={{textDecoration:'none', color:'black'}}><SidebarOptions active text='Profile' Icon={PermIdentityIcon} /></Link>
      
      <Link to='/home/more'style={{textDecoration:'none', color:'black'}}><SidebarOptions active text='More' Icon={MoreIcon} /></Link>
      {/* <SidebarOptions active text='Home' Icon={DoneIcon}/>
        <SidebarOptions active text='Home' Icon={FormatListBulletedIcon}/> */}

      <Button className='sidebar__tweet' variant='outlined'>Post</Button>


      <div className="Profile__info">
        <Avatar src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"></Avatar>
        <div className='user__info'>
          <h4>Vaibhav Gohil</h4>
          <h5>gohilvaibhav_88</h5>
        </div>
        <IconButton size='small ' sx={{ ml: 2 }}  aria-controls={openMenu ? 'basic-menu' : undefined} aria-haspopup='true' aria-expanded={openMenu ? 'true' : undefined} onClick={handleClick}>
          <MoreHorizIcon />

        </IconButton>

        <Menu id='basic-menu' anchorEl={anchorEl} open={openMenu} onClose={handleClose}>
          
          <MenuItem className='Profile__info1'>
            <Avatar src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"></Avatar>
            <div className='user__info subUser__info'>
              <div>
                <h4>Vaibhav</h4>
                <h5>gohilvaibhav_88</h5>
              </div>
              <ListItemIcon className='done__icon'><DoneIcon /></ListItemIcon>

            </div>
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleClose}>Add an Existing Account</MenuItem>
          <MenuItem onClick={handleLogout}>Log out @gohilvaibhav_88</MenuItem>

        </Menu>
      </div>
    </div>
  )
}

export default Sidebar
