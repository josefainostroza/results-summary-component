import './styles/index.css';
import Cards from './components/cards/Cards';
import Result from './components/result/Result';

const App = () => {
	return (
		<div>
			<section>
				<Result
					titleResult={'Your Result'}
					number={'76'}
					ofNumber={'of 100'}
					titleText={'Great'}
					text={
						'Your performance exceed 65% of the people conducting the test here!'
					}
				></Result>
			</section>
			<section className='box2'>
				<Cards />
			</section>
		</div>
	);
};

export default App;
