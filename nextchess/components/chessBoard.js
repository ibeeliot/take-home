import React, { useState, useEffect } from 'react';
import Rows from './rows';

const Chessboard = () => {
	// prop drill
	const [input, setInput] = useState(0);
	const [number, setNumber] = useState(0);
	// const [board, setBoard] = useState([]);
	return (
		<>
			<Rows input={number}></Rows>
			<div>
				<input
					onChange={(e) => {
						setInput(e.target.value);
					}}
				></input>
				<style jsx>{`
					.saveBtn {
						height: 21px;
						width: 60px;
						margin-top: px;
					}
				`}</style>
				<button
					className='saveBtn'
					onClick={() => {
						setNumber(input);
						console.log(number);
					}}
				>
					ENTER
				</button>
			</div>
			<h1>TEST</h1>
		</>
	);
};

export default Chessboard;
