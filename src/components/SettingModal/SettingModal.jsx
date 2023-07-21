import './SettingModal.scss'
import React from 'react';
import { useState } from 'react';

export default function SettingModal ({setOpenModal1 , setOpenModal2}){


    return(
        <>
        <h1>Security Questions</h1>
        <form>
            <div>
                <label>
                    Sharing Steps
                </label>
                <input type="checkbox"/>
            </div>
            <div>
                <label>
                    Sharing Cycle
                </label>
                <input type="checkbox"/>
            </div>
            <div>
                <label>
                    Track Your Daily Goals
                </label>
                <input type="checkbox"/>
            </div>
        </form>
        <button onClick={()=> setOpenModal1(false)}>Cancel</button>
        <button onClick={()=> {setOpenModal2(true) ; setOpenModal1(false)}}>Continue</button>
        </>
    )
}