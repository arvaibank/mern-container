import React from 'react'
import './Details.css';
import '../App.css'

function CharacterDetails({character, onAddMemberToCouncil, onKill}) {

  const familyName = character.family.split(' ')[1]
  let banner=`./assets/${familyName}.jpg`
  
  return (
    <div className='pic'>
      <img src={banner} style={{height: 550}} alt=''></img>
      <div className='details'>
        <img src={character.imgurl} alt='./assets/baby.jpg' style={{height: 400}}></img>
        <div>Name: {character.name}</div>
        <div>Title: {character.title}</div>
        <div>Family: {character.family}</div>
        <div>Location: {character.location}</div>
        <div name='buttons'>
          {character.councilMember === false &&  <button className='header-btn' onClick={() => onAddMemberToCouncil(character)}>Add to Council</button>}
          <button className='header-btn' onClick={()=>onKill(character)}>Kill</button>      
        </div>
      </div>
      <img src={banner} style={{height: 550}} alt=''></img> 
    </div>
  )
}

export default CharacterDetails;