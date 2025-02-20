import { useState, useEffect } from "react";
import axios from "axios";
import './index.css'

const Clicker = ({ userId }) => {
  const [score, setScore] = useState(0);
  const [prizes, setPrizes] = useState(0);
  const [message, setMessage] = useState({
    prizeWon: "",
    extraPoints: false
  });

  useEffect(() => {
    axios.get(`http://localhost:5000/users/${userId}`)
      .then((res) => {
        setScore(res.data.score);
        setPrizes(res.data.prizes);
      })
      .catch(error => console.error("Error fetching user data:", error));
  }, [userId]);

  const handleClick = () => {
    axios.post("http://localhost:5000/click", { userId }).then((res) => {
      setScore(res.data.score);
      setPrizes(res.data.prizes);
      setMessage({
        prizeWon: res.data.prizeWon ? "🎉 You won a prize!" : "",
        extraPoints: res.data.extraPoints
      })

      if (res.data.prizeWon) {
        setTimeout(() => {
          setMessage((prev) => ({ ...prev, prizeWon: "" }));
        }, 500);
      }

      if (res.data.extraPoints) {
        setTimeout(() => {
          setMessage((prev) => ({ ...prev, extraPoints: false }));
        }, 500);
      }
    });
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Points: <span className="data">{score}</span>
        {message.extraPoints && <span id='extraPoints'>+10 points</span>}
      </h1>
      <h1>Prizes:  <span className="data">{prizes}</span></h1>
      
      <button 
        className="click-btn"
        onClick={handleClick}
      >
        Click
      </button>
      {message.prizeWon && (
        <div id='prizeWon'>
          <p>{message.prizeWon}</p>
          <img src='https://media.emailonacid.com/wp-content/uploads/2020/01/ScratchOffInteractive-Blog.gif' alt='prize' width='200'/>
        </div>
      )}
    </div>
  );
};

export default Clicker;