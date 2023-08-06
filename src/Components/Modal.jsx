const Modal = ({ setModal, player, setCells, setStopClick }) => {

    function clickHandler(){
        setModal(false);
        setCells(Array(9).fill(null));
        setStopClick(false);
    }
  return (
    <div className="modal">
      <h1 className="title">Player {player} Won</h1>
      <button onClick={clickHandler} className="ok">Ok</button>
    </div>
  );
};

export default Modal;