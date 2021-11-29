import styles from './styles.module.scss';
import { FaChartLine, FaShoppingCart, FaScroll, FaFileContract } from 'react-icons/fa';
import React from "react";
import Countdown from 'react-countdown';
import { i18n } from '../../translate/i18n'

import Tokencomics from '../Tokencomics';
import Roadmap from '../Roadmap';
import Footer from '../Footer';

export default function Welcome() {
    return (
        <div id='welcome' className={styles.welcomeContainer}>
            <div id="inicio" className={styles.inicio}>
                <h1>{i18n.t('titles.welcome')}</h1>
                <h2>
                    <span>{i18n.t('titles.preSale')}&nbsp;</span>
                    <Countdown date={Date.parse('2021-12-03')} />
                </h2>
                <h2>
                    <span>{i18n.t('titles.launch')}&nbsp;</span>
                    <Countdown date={Date.parse('2021-12-10')} />
                </h2>
                <h3>{i18n.t('messages.introduction')}</h3>
                <div>
                    <button><FaShoppingCart />&nbsp;{i18n.t('buttons.buyPcs')}</button>
                    <button><FaFileContract />&nbsp;{i18n.t('buttons.contractBcs')}</button>
                    <button><FaScroll />&nbsp;{i18n.t('buttons.whitepaper')}</button>
                    <button><FaChartLine />&nbsp;{i18n.t('buttons.chartPoo')}</button>
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