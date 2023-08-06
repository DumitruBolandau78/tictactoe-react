import React, { useState } from "react";
import Modal from "./Modal";

const Board = () => {
  const [playerXPoints, setPlayerXPoints] = useState(0);
  const [playerOPoints, setPlayerOPoints] = useState(0);
  const [turn, setTurn] = useState("X");
  const [cells, setCells] = useState(Array(9).fill(null));
  const [modal, setModal] = useState(false);
  const [winPlayer, setWinPlayer] = useState();
  const [stopClick, setStopClick] = useState(false);

  function clickCellHandler(index) {
    if (cells[index] === "X" || cells[index] === "O") return;

    if(stopClick === false){
        if (turn === "X") {
            cells[index] = turn;
            setTurn("O");
            verifyWin();
            return;
        } else if (turn === "O") {
            cells[index] = turn;
            setTurn("X");
            verifyWin();
        }
    }
  }

  function combos(symbol){
    if (
        (cells[0] === symbol && cells[1] === symbol && cells[2] === symbol) ||
        (cells[3] === symbol && cells[4] === symbol && cells[5] === symbol) ||
        (cells[6] === symbol && cells[7] === symbol && cells[8] === symbol) || 
        (cells[0] === symbol && cells[3] === symbol && cells[6] === symbol) ||
        (cells[1] === symbol && cells[4] === symbol && cells[7] === symbol) ||
        (cells[2] === symbol && cells[5] === symbol && cells[8] === symbol) || 
        (cells[0] === symbol && cells[4] === symbol && cells[8] === symbol) ||
        (cells[2] === symbol && cells[4] === symbol && cells[6] === symbol)
      ) {
        if(symbol === 'X'){
            setPlayerXPoints(playerXPoints + 1);
            setModal(true);
            setWinPlayer('X');
            setStopClick(true);
        } else if(symbol === 'O'){
            setPlayerOPoints(playerOPoints + 1);
            setModal(true);
            setWinPlayer('O');
            setStopClick(true);
        }
      }
  }

  function verifyWin() {
    combos("X");
    combos("O");
  }

  return (
    <div className="board">
      <div className="players">
        <div className="player-x">Player X: {playerXPoints}</div>
        <div className="player-o">Player O: {playerOPoints}</div>
      </div>
      <div className="turn">Player {turn} have to click.</div>
      <div className="table">
        {cells.map((item, index) => {
          return (
            <div
              onClick={() => {
                clickCellHandler(index);
              }}
              key={index}
              className="cell"
            >
              {item}
            </div>
          );
        })}
      </div>
      {modal ? <Modal setStopClick={setStopClick} setCells={setCells} player={winPlayer} setModal={setModal}></Modal> : ''}
    </div>
  );
};

export default Board;
