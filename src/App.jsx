import { useContext, useEffect } from "react";
import { QuizContext } from "./context/quiz";

import Welcome from "./components/Welcome";
import Question from "./components/Question";
import GameOver from "./components/GameOver";

import PickCategory from "./components/PickCategory";

import "./App.css";

function App() {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div className="App">
      <h1>Quiz do Autoconhecimento</h1>
      {quizState.gameStage === "Start" && <Welcome />}
      {quizState.gameStage === "Category" && <PickCategory />}
      {quizState.gameStage === "Playing" && <Question />}
      {quizState.gameStage === "End" && <GameOver />}
      <h2 className="desenvolvido">Desenvolvido por Gabriel barbarino, Gustavo cardoso e Lucas Rabelo</h2>
    </div>
  );
}

export default App;
