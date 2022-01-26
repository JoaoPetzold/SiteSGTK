import styles from './styles.module.scss';
import { FaChartLine, FaShoppingCart, FaScroll, FaFileContract } from 'react-icons/fa';
import React from "react";
import { useState } from 'react';
import Countdown from 'react-countdown';
import { i18n } from '../../translate/i18n';
import UIModal from '../UI/Modal';

import Tokencomics from '../Tokencomics';
import Roadmap from '../Roadmap';
import Footer from '../Footer';

export default function Welcome() {
    const [showModal, setShowModal] = useState(false);

    const PrevendaOK = () => <span>{i18n.t('titles.preSale.completed')}</span>;
    const renderPrevenda = ({ days, hours, minutes, completed }) => {
        if (completed) {
            return <PrevendaOK />
        } else {
            return <span>{i18n.t('titles.preSale.title')}&nbsp;{days} {i18n.t('titles.days')}, {hours} {i18n.t('titles.hours')} {i18n.t('titles.and')} {minutes} {i18n.t('titles.minutes')}</span>
        }
    }

    const VendaOK = () => <span>{i18n.t('titles.launch.completed')}</span>
    const renderVenda = ({ days, completed }) => {
        if (completed) {
            return <VendaOK />
        } else {
            return <span>{i18n.t('titles.launch.title')}&nbsp;{days} {i18n.t('titles.days')} {i18n.t('titles.launch.subtitle')}</span>
        }
    }

    return (
        <div id='welcome' className={styles.welcomeContainer}>
            <UIModal id='buy' title={i18n.t('messages.modal.launchPcs.title')} isVisible={showModal} onClickClose={() => setShowModal(false)}>
                {i18n.t('messages.modal.launchPcs.text')}
            </UIModal>
            
            <div id="inicio" className={styles.inicio}>
                <h1>{i18n.t('titles.welcome')}</h1>
                <h2>
                    <Countdown date={Date.parse('2021-12-24')} renderer={renderPrevenda} />
                </h2>
                <h2>
                    <Countdown date={Date.parse('2021-12-28')} renderer={renderVenda} />
                </h2>
                <h3>{i18n.t('messages.introduction')}</h3>
                <div>
                    <button onClick={() => setShowModal(!showModal)}><FaShoppingCart />&nbsp;{i18n.t('buttons.buyPcs')}</button>

                    <a href="https://bscscan.com/token/0xb17fb5b0e3dbc143e15361d1dad46d5b738d954e" target= "_blank" rel="noreferrer noopener">
                        <button><FaFileContract />&nbsp;{i18n.t('buttons.contractBcs')}</button>
                    </a>
                    <a href="whitepaper.pdf" target= "_blank" rel="noreferrer noopener">
                        <button><FaScroll />&nbsp;{i18n.t('buttons.whitepaper')}</button>
                    </a>
                    <a href="https://poocoin.app/tokens/0xb17fb5b0e3dbc143e15361d1dad46d5b738d954e" target= "_blank" rel="noreferrer noopener">
                        <button><FaChartLine />&nbsp;{i18n.t('buttons.chartPoo')}</button>
                    </a>
                </div>
            </div>
            <div id="tokencomics" className={styles.tkcomics}>
                <Tokencomics />
            </div>
            <div id='roadmap' className={styles.rmap}>
                <Roadmap />   
            </div>
            <div id='footer' className={styles.footer}>
                <Footer />  
            </div>
            <div className={styles.endpage} />
        </div>
    )
}