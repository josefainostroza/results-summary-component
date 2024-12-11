import style from './result.module.css';

const Result = ({ titleResult, number, ofNumber, titleText, text }) => {
	return (
		<div className={style.containerTop}>
			<h2 className={style.titleResult}>{titleResult}</h2>
			<div className={style.containerNumber}>
				<span className={style.number}>{number}</span>
				<span className={style.ofNumber}>{ofNumber}</span>
			</div>
			<div className={style.containerText}>
				<h2 className={style.titleText}>{titleText}</h2>
				<p className={style.text}>{text}</p>
			</div>
		</div>
	);
};
export default Result;
