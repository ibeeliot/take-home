import React, { useState } from 'react';
// each square bein rendered has to follow an odd or even rule

const Squares = ({ input, passedClass }) => {
	// const [even, setEven] = useState('even');
	const even = passedClass === 'even' ? 'odd' : 'even';
	const squares = [];
	for (let i = 0; i < input; i++) {
		const j = even === 'even' ? i + 1 : i;
		squares.push(
			<style jsx>{`
				.even {
					background: red;
					height: 30px;
					width: 30px;
					display: inline-block;
					margin: 0;
				}

				.odd {
					background: blue;
					height: 30px;
					width: 30px;
					display: inline-block;
					margin: 0;
				}
			`}</style>,
			<span className={j % 2 === 0 ? 'even' : 'odd'} key={`square ${i}`}>
				{' '}
			</span>
		);
	}
	return <div style={{ margin: '-10px 0px -5px 0px' }}>{squares}</div>;
};

export default Squares;
