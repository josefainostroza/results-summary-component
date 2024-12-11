import style from './cards.module.css';
import { CARDS_INFO } from '../../../constants/cards-info';

const Cards = () => {
	return (
		<>
			{CARDS_INFO.map(card => {
				return (
					<section
						className={`${style.container} ${style[card.color]}`}
						key={card.id}
					>
						<div className={style.titleContainer}>
							<img className={style.img} src={card.img} alt='' />
							<p className={`${style.name} ${style[`${card.color}2`]}`}>
								{card.title}
							</p>
						</div>
						<div className={style.scoreContainer}>
							<p className={style.range}>{card.range}</p>
							<p className={style.rangeTotal}>{card.rangeTotal}</p>
						</div>
					</section>
				);
			})}
		</>
	);
};

export default Cards;
