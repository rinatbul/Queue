import s from './Language.module.css';
import React from "react";
import i18n from "i18next";
import {useTranslation} from "react-i18next";

export const Language=()=>{
    const {i18n}=useTranslation()
    return (
        <div className={s.wrapper}>
            <button className={s.langButton} onClick={()=>{i18n.changeLanguage('kz')}}>kz</button>
            <button className={s.langButton} onClick={()=>{i18n.changeLanguage('ru')}}>ru</button>
            <button className={s.langButton} onClick={()=>{i18n.changeLanguage('en')}}>en</button>
        </div>
    )
}