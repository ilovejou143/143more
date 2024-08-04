import React from "react";
import { Routes, Route } from "react-router-dom";
import Start from "../components/Start";
import Images from "../components/Images";
import Quiz from "../components/Quiz";
import QuizLink from "../components/QuizLink";
import Error from "../components/Error";
import Detour from "../components/Detour";
import Jumpscare from "../components/Jumpscare";
import Question1 from "../components/Questions/Question1";
import Question2 from "../components/Questions/Question2";
import Question3 from "../components/Questions/Question3";
import Question4 from "../components/Questions/Question4";
import Question5 from "../components/Questions/Question5";
import Question6 from "../components/Questions/Question6";
import Question7 from "../components/Questions/Question7";
import Question8 from "../components/Questions/Question8";
import Question9 from "../components/Questions/Question9";
import Question10 from "../components/Questions/Question10";
import End from "../components/End";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="143more/quiz" element={<Quiz />} />
      <Route path="/error" element={<Error />} />
      <Route path="143more/detour" element={<Detour />} />
      <Route path="143more/boo" element={<Jumpscare />} />
      <Route path="143more/question1" element={<Question1 />} />
      <Route path="143more/question2" element={<Question2 />} />
      <Route path="143more/question3" element={<Question3 />} />
      <Route path="143more/question4" element={<Question4 />} />
      <Route path="143more/question5" element={<Question5 />} />
      <Route path="143more/question6" element={<Question6 />} />
      <Route path="143more/question7" element={<Question7 />} />
      <Route path="143more/question8" element={<Question8 />} />
      <Route path="143more/question9" element={<Question9 />} />
      <Route path="143more/question10" element={<Question10 />} />
      <Route path="143more/end" element={<End />} />
    </Routes>
  );
};

const Home = () => (
  <div>
    <Start />
    <Images />
    <QuizLink />
  </div>
);

export default App;
