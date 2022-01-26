import styles from './styles.module.scss';
import { useState, useEffect } from 'react';

import UIModal from '../UI/Modal';
import { i18n } from '../../translate/i18n'
import Router from 'next/router';

import { FaTwitter, FaTelegramPlane, FaGlobeAmericas } from 'react-icons/fa';

const I18N_STORAGE_KEY = 'i18nextLng';

export default function Footer() {
    const [showModalLang, setShowModalLang] = useState(false);
    const [language, setLanguage] = useState(null);
    useEffect(() => {
        setLanguage(window.localStorage.getItem(I18N_STORAGE_KEY));
    }, []);

    const handleLang = event => {
        window.localStorage.setItem(I18N_STORAGE_KEY, event.target.value);
        Router.reload();
    };

    return (
        <footer className={styles.footerContainer}>
            <UIModal id='lang' title={i18n.t('messages.modal.langOptions.title')} isVisible={showModalLang} onClickClose={() => setShowModalLang(false)} >
                <select onChange={handleLang} value={language}>
                    <option value="en-US">{i18n.t('messages.modal.langOptions.english')}</option>
                    <option value="pt-BR">{i18n.t('messages.modal.langOptions.portuguese')}</option>
                    <option value="es-MX">{i18n.t('messages.modal.langOptions.spanish')}</option>
                </select>
            </UIModal>
            <div>
                <FaGlobeAmericas onClick={() => setShowModalLang(true)} className={styles.redesSociais}/>
                <a href="https://t.me/skintoken/" target= "_blank" rel="noreferrer noopener">
                    <FaTelegramPlane className={styles.redesSociais}/>
                </a>
            </div>
        </footer>
    )
}