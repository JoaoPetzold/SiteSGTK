import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { i18n } from '../../../translate/i18n';

import styles from './styles.module.scss';

type ModalInfo = {
    title: string;
    children?: React.ReactNode;
    isVisible: Boolean
    onClickClose : () => void;
}

const UIModal = (modalInfo : ModalInfo) => {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);



    const modalContent = modalInfo.isVisible ? (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <div className={styles.header}>
                    <h1>{modalInfo.title}</h1>
                </div>
                <div className={styles.message}>
                    <p>{modalInfo.children}</p>
                </div>
                <button className={styles.close} onClick={modalInfo.onClickClose}>{i18n.t('messages.modal.closeBtn')}</button>
            </div>
        </div>
    ) : null;

    if (mounted) {
        if (modalInfo.isVisible) {
            document.getElementById('grafico').style.visibility = 'hidden';
        } else {
            document.getElementById('grafico').style.visibility = 'visible';
        }
        
        return ReactDOM.createPortal( modalContent, document.getElementById('portal-root') );
    } else {
        return null;
    }
};

export default UIModal;