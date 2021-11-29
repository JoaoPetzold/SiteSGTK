import styles from './styles.module.scss';

import { i18n } from '../../translate/i18n'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Tokencomics() {
    const dados = {
        labels: [i18n.t('tokencomics.preSale'), i18n.t('tokencomics.marketing'), i18n.t('tokencomics.devTeam'), i18n.t('tokencomics.reward'), i18n.t('tokencomics.publicSale')],
        datasets: [
            {
                label: 'Tokencomics',
                data: [30, 10, 5, 5, 50],
                backgroundColor: [
                    '#6A4C93',
                    '#1982C4',
                    '#8AC926',
                    '#FFCA3A',
                    '#FF595E'
                ],
                hoverBackgroundColor: [
                    '#fff',
                    '#fff',
                    '#fff',
                    '#fff',
                    '#fff',
                    '#fff'
                ],
                borderColor: [
                    '#9782b3',
                    '#5ea8d6',
                    '#add967',
                    '#ffda75',
                    '#ff8b8e'
                ],
                borderWidth: 3,
            }
        ]
    }

    return (
        <div className={styles.tokencomicsContainer}>
            <h1>{i18n.t('tokencomics.title')}</h1>
            <h2>{i18n.t('tokencomics.subtitle')}</h2>
            <div className={styles.grafico}>
                <Doughnut 
                    id='grafico'
                    className={styles.doughnuts}
                    data={dados} 
                    options={ {
                        responsive: true, 
                        maintainAspectRatio: false, 
                        cutout: '95%', 
                        plugins:{
                            legend:{
                                labels:{
                                    color: 'rgb(255, 255, 255)',
                                    font:{
                                        family: 'Outfit',
                                        size: 18
                                    }
                                }
                            }
                        }
                    } }
                />
            </div>
        </div>
    )
}