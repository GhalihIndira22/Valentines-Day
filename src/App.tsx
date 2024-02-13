import { useState } from "react";
import "./App.css";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure pinguin ?",
      "Really sure pinguin boe ?",
      "Think again pinguin boe !",
      "Last chance pinguin botut !",
      "Surely not bubuncitt ?",
      "You might regret thisbubuncitt !",
      "Give it another thought bubuncitt !",
      "Are you absolutely certain bubuncitt?",
      "This could be a mistake bubuncitt !",
      "Have a heart bubuncitt !",
      "Don't be so cold bubuncitt !",
      "Change of heart bubuncitt botut !?",
      "Wouldn't you reconsider pinguin botut !?",
      "Is that your final answer pinguin botut !?",
      "You're breaking my heart ;( pinguin botut !",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="centered-container">      
      <div className="valentine-container">
        {yesPressed ? (
          <>
            <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
            <div className="text-container">Ok yay !!!</div>
          </>
        ) : (
          <>
            <img
              className="h-[200px]"
              style={{ width: "400x", height: "240px" }}
              src="https://gifdb.com/images/high/cute-sad-bubu-dudu-panda-kick-4cn5usy9xip1m59y.gif"
            />
            <h1 className="text-container">Will you be my Valentine ?</h1>
            <div>
              <button
                className={"yes-button"}
                style={{ fontSize: yesButtonSize }}
                onClick={() => setYesPressed(true)}
              >
                Yes
              </button>

              <button onClick={handleNoClick} className="no-button">
                {noCount === 0 ? "No" : getNoButtonText()}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
