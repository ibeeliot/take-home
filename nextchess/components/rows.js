import React, { useState } from 'react';
import Squares from './squares';

const Rows = ({ input }) => {
	// const [rows, setRows] = useState([]);
	const rows = [];
	for (let i = 0; i < input; i++) {
		rows.push(
			<style jsx>{`
				.row {
					margin: 0;
					padding: 0;
					display: block;
				}
			`}</style>,
			<Squares
				className='row'
				passedClass={i % 2 === 0 ? 'even' : 'odd'}
				input={input}
				key={`squares ${i}`}
			/>
		);
	}
	return <>{rows}</>;
};

export default Rows;
