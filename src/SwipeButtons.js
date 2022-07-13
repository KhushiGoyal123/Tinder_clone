import React from 'react';
import './swipebuttons.css';

import { IconButton } from '@material-ui/core';
import { CloseOutlined, FavoriteBorderOutlined, FlashOnOutlined, ReplayOutlined, StarBorderOutlined, } from '@material-ui/icons';

function SwipeButtons() {
  return (
    <div className='swipeButtons'>

    <IconButton className='swipeButtons__repeat'> 
        <ReplayOutlined  fontSize="large" />
    </IconButton>

    <IconButton className='swipeButtons__left'> 
        <CloseOutlined  fontSize="large"/>
    </IconButton>

    <IconButton className='swipeButtons__star'> 
        <StarBorderOutlined  fontSize="large"/>
    </IconButton>

    <IconButton className='swipeButtons__right'> 
        <FavoriteBorderOutlined fontSize="large" />
    </IconButton>

    <IconButton className='swipeButtons__lightning'> 
        <FlashOnOutlined fontSize="large" />
    </IconButton>

    </div>
  )
}

export default SwipeButtons;