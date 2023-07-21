// Dependancies
import { useState } from "react";
// Components
import SettingModal from "../../components/SettingModal/SettingModal";
import HomePage from "../home-page/HomePage";
import OftenModal from "../../components/OftenModal/OftenModal";
import NotNowModal from "../../components/NotNowModal/NotNowModal";

export default function MainHomePage(){
    const [openModal1, setOpenModal1] = useState(false);
    const [openModal2, setOpenModal2] = useState(false);
    const [openModal3, setOpenModal3] = useState(false);

    return(
        <>
        <HomePage setOpenModal1={setOpenModal1} setOpenModal3={setOpenModal3}/>
        {openModal1 && (
            <SettingModal setOpenModal1={setOpenModal1} setOpenModal2={setOpenModal2}/>)}
        {openModal2 && (
            <OftenModal setOpenModal2={setOpenModal2}/>)}
        {openModal3 && (
            <NotNowModal setOpenModal3={setOpenModal3}/>)}
        </>
    )
}