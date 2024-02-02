import React from 'react'
import './board.scss'
import { ReactComponent as StarIcon } from '../../../assets/star.svg'
import { ReactComponent as MemberIcon } from '../../../assets/member.svg'
import { ReactComponent as BoardIcon } from '../../../assets/board.svg'
import { ReactComponent as ArrowIcon } from '../../../assets/arrow.svg'
import { ReactComponent as RocketIcon } from '../../../assets/rocket.svg'
import { ReactComponent as PyramidIcon } from '../../../assets/pyramid.svg'
import { ReactComponent as ShareIcon } from '../../../assets/share.svg'
import { ReactComponent as DotIcon } from '../../../assets/threeDot.svg'
import { ReactComponent as BarIcon } from '../../../assets/bar.svg'


const Board = () => {
  return (
    <div className='wrapper'>
      <div className='board'>
        <BarIcon />
      </div>
      <div className='board_container'>
        <h1 className='board_name'>My Trello board</h1>
        <StarIcon />
        <MemberIcon />
        <button className='btn-board'> <BoardIcon /> Board</button>
        <ArrowIcon />
        <RocketIcon />
        <img className='thunder' src="https://trello.com/assets/664d88a0fc08655e416b.svg" alt="thuder" />
        <PyramidIcon />
        <p className='filter_txt'>Filters</p>
        <img className='booster_icon' src="	https://trello.com/assets/88a4454280d68a816b89.png" alt="asset" />
        <span className="id_icon_boost">BR</span>
        <button className='btn-share'><ShareIcon /> Share</button>
        <DotIcon />

      </div>
    </div>
  )
}

export default Board
