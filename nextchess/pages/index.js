import Nav from '../components/Nav';
import Chessboard from '../components/chessBoard';

const IndexPage = () => (
	<>
		<style jsx>{`
			.even {
				background: blue;
				border: 1px solid blue;
			}

			.odd {
				background: red;
				border: 1px solid red;
			}
		`}</style>

		<Nav />
		<Chessboard className='test'></Chessboard>
	</>
);

export default IndexPage;

// localhost:3000
// index.js -> '/'
// about.js -> /about
