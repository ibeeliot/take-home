import React, { useState, useEffect } from 'react';
import Rows from './rows';
import '../styles/all.scss';

const Chessboard = () => {
	// prop drill
	const [input, setInput] = useState(0);
	const [number, setNumber] = useState(input);
	const [board, setBoard] = useState([]);

	const reChess = () => {
		setNumber(input);
	};

	return (
		<>
			<Rows input={input}></Rows>
			<div className='test'>
				<input
					onChange={(e) => {
						setInput(e.target.value);
					}}
				></input>
				<button
					onSubmit={() => {
						reChess();
					}}
				></button>
			</div>
			<h1>TEST</h1>
		</>
	);
};

export default Chessboard;
