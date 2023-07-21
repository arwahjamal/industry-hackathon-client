import './SettingModal.scss'
import React from 'react';
import buddy from '../../assets/Icons/Buddy=Squished.png'

export default function SettingModal({ setOpenModal1, setOpenModal2 }) {


    return (
        <div className='SettingModal' id='overlay'>
            <div className='SettingModal__container'>
                <img className='buddy' src= {buddy} alt="" />
                <h1 className='SettingModal__title'>Security Questions</h1>
                <form>
                    <div className='SettingModal__question'>
                        <label>
                            Sharing Steps
                        </label>
                        <input type="checkbox" />
                    </div>
                    <div className='SettingModal__question'>
                        <label>
                            Sharing Cycle
                        </label>
                        <input type="checkbox" />
                    </div>
                    <div className='SettingModal__question'>
                        <label>
                            Track Your Daily Goals
                        </label>
                        <input type="checkbox" />
                    </div>
                </form>
                <div className='button__div'>
                <button className='SettingModal__button' onClick={() => { setOpenModal2(true); setOpenModal1(false) }}>Continue </button>
                <button className='SettingModal__cancelbutton' onClick={() => setOpenModal1(false)}>Cancel</button>
                </div>
            </div>
        </div>
    )
}