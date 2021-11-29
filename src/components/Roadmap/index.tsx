import styles from './styles.module.scss';

export default function Roadmap() {
    return (
        <div className={styles.roadmapContainer}>
            <h1>Roadmap</h1>

            <div className={styles.thumbRoadmap}>
                <div className={styles.rm}>
                    <h2>Primeira Fase</h2>
                    <ul>
                        <li>Lançamento na Pancakeswap</li>
                        <li>Liquidity Locked DxSale</li>
                        <li>Lançamento do site</li>
                        <li>1000 membros do Telegram</li>
                        <li>Plataforma Skin Gamer Token</li>
                        <li>Divulgação e marketing em massa</li>
                        <li>Parcerias fechadas com sites de skins</li>
                        <li>Listagem nas principais plataformas de divulgação</li>
                    </ul>
                </div>
                <div className={styles.rm}>
                    <h2>Segunda Fase</h2>
                    <ul>
                        <li>Procurar marketing com influenciadores</li>
                        <li>Competição NFT</li>
                        <li>Anúncios PooCoin</li>
                        <li>2.500 Holders</li>
                        <li>Listagem no CoinGecko, Coin Hunt e Coin Sniper</li>
                        <li>Ícone BSC Scam e Trust Wallet </li>
                        <li>Auditoria com CertiK</li> 
                    </ul>
                </div>
                <div className={styles.rm}>
                    <h2>Terceira Fase</h2>
                    <ul>
                        <li>Lançamento da Plataforma principal da S.G.T</li>
                        <li>Máximo de impulso no nosso marketing</li>
                        <li>Listagem CMC</li>
                        <li>5.000 Holders</li>
                        <li>Publicidade física em locais estratégicos</li>
                        <li>Desenvolvimento de CriptoGames</li>
                        <li>Lançamento de CriptoGames</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}