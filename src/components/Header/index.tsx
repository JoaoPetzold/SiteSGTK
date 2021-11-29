import styles from './styles.module.scss';
import { FaBars, FaGlobeAmericas } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import UIModal from '../UI/Modal';
import { i18n } from '../../translate/i18n'
import Router from 'next/router'

const I18N_STORAGE_KEY = 'i18nextLng';

export default function Header() {
    const [showModal, setShowModal] = useState(false);
    const [showModalLang, setShowModalLang] = useState(false);
    const [mounted, setMounted] = useState(false);
    const [language, setLanguage] = useState(null);
    useEffect(() => {
        setMounted(true);
        setLanguage(window.localStorage.getItem(I18N_STORAGE_KEY));
    }, []);

    const [isActive, setActive] = useState(false);
    const changeMenu = () => {
        setActive(!isActive);
    };

    const scrollTopY = () => {
        if (mounted) {
            document.getElementById('welcome').scrollTop = 0;
        }
    };

    const handleLang = event => {
        window.localStorage.setItem(I18N_STORAGE_KEY, event.target.value);
        Router.reload();
    };

    return (
        <header className={styles.headerContainer}>
            <UIModal title={i18n.t('messages.modal.comingSoon.title')} isVisible={showModal} onClickClose={() => setShowModal(false)} >
                {i18n.t('messages.modal.comingSoon.text')}
            </UIModal>
            
            <UIModal title={i18n.t('messages.modal.langOptions.title')} isVisible={showModalLang} onClickClose={() => setShowModalLang(false)} >
                <select onChange={handleLang} value={language}>
                    <option value="en-US">{i18n.t('messages.modal.langOptions.english')}</option>
                    <option value="pt-BR">{i18n.t('messages.modal.langOptions.portuguese')}</option>
                    <option value="es-MX">{i18n.t('messages.modal.langOptions.spanish')}</option>
                </select>
            </UIModal>

            <img src="/logo-min.png" alt="Skin Gamer Token" />
            <p>{i18n.t('titles.app')}</p>

            <div className={isActive ? styles.dropdown : styles.dropdownDisable} onClick={changeMenu}>
                <FaBars className={styles.icone} />
                <div className={styles.dropdownmenu}>
                    <div className={styles.dropdownitens}>
                        <a onClick={scrollTopY} href="#welcome">{i18n.t('titles.menuMobile.home')}</a>
                        <a onClick={changeMenu} href="#">{i18n.t('titles.menuMobile.buy')}</a>
                        <a onClick={changeMenu} href="#tokencomics">{i18n.t('titles.menuMobile.tokencomics')}</a>
                        <a onClick={changeMenu} href="#roadmap">{i18n.t('titles.menuMobile.roadmap')}</a>
                        <a onClick={() => setShowModal(true)}>{i18n.t('titles.menuMobile.nft')}</a>
                        <a onClick={() => setShowModal(true)}>{i18n.t('titles.menuMobile.platform')}</a>
                        <hr />
                        <a onClick={() => setShowModalLang(true)}>{i18n.t('titles.menuMobile.language')}&nbsp;<FaGlobeAmericas /></a>
                    </div>
                </div>
            </div>

            <div className={styles.menu}>            
                <a href="#inicio">{i18n.t('titles.menuDesktop.home')}</a>
                <a href="#">{i18n.t('titles.menuDesktop.buy')}</a>
                <a href="#tokencomics">{i18n.t('titles.menuDesktop.tokencomics')}</a>
                <a href="#roadmap">{i18n.t('titles.menuDesktop.roadmap')}</a>
                <a onClick={() => setShowModal(true)}>{i18n.t('titles.menuDesktop.nft')}</a>
                <a onClick={() => setShowModal(true)}>{i18n.t('titles.menuDesktop.platform')}</a>
            </div>
        </header>
    )
}