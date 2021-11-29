import styles from './styles.module.scss';
import { i18n } from '../../translate/i18n'

export default function Roadmap() {
    return (
        <div className={styles.roadmapContainer}>
            <h1>{i18n.t('roadmap.title')}</h1>

            <div className={styles.thumbRoadmap}>
                <div className={styles.rm}>
                    <h2>{i18n.t('roadmap.phase1.title')}</h2>
                    <ul>
                        <li>{i18n.t('roadmap.phase1.step1')}</li>
                        <li>{i18n.t('roadmap.phase1.step2')}</li>
                        <li>{i18n.t('roadmap.phase1.step3')}</li>
                        <li>{i18n.t('roadmap.phase1.step4')}</li>
                        <li>{i18n.t('roadmap.phase1.step5')}</li>
                        <li>{i18n.t('roadmap.phase1.step6')}</li>
                        <li>{i18n.t('roadmap.phase1.step7')}</li>
                        <li>{i18n.t('roadmap.phase1.step8')}</li>
                    </ul>
                </div>
                <div className={styles.rm}>
                    <h2>{i18n.t('roadmap.phase2.title')}</h2>
                    <ul>
                        <li>{i18n.t('roadmap.phase2.step1')}</li>
                        <li>{i18n.t('roadmap.phase2.step2')}</li>
                        <li>{i18n.t('roadmap.phase2.step3')}</li>
                        <li>{i18n.t('roadmap.phase2.step4')}</li>
                        <li>{i18n.t('roadmap.phase2.step5')}</li>
                        <li>{i18n.t('roadmap.phase2.step6')}</li>
                        <li>{i18n.t('roadmap.phase2.step7')}</li> 
                    </ul>
                </div>
                <div className={styles.rm}>
                    <h2>{i18n.t('roadmap.phase3.title')}</h2>
                    <ul>
                        <li>{i18n.t('roadmap.phase3.step1')}</li>
                        <li>{i18n.t('roadmap.phase3.step2')}</li>
                        <li>{i18n.t('roadmap.phase3.step3')}</li>
                        <li>{i18n.t('roadmap.phase3.step4')}</li>
                        <li>{i18n.t('roadmap.phase3.step5')}</li>
                        <li>{i18n.t('roadmap.phase3.step6')}</li>
                        <li>{i18n.t('roadmap.phase3.step7')}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}