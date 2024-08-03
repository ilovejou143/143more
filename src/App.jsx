import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
    <Router basename={import.meta.env.DEV ? "/" : "/143more/"}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/error" element={<Error />} />
        <Route path="/detour" element={<Detour />} />
        <Route path="/boo" element={<Jumpscare />} />
        <Route path="/question1" element={<Question1 />} />
        <Route path="/question2" element={<Question2 />} />
        <Route path="/question3" element={<Question3 />} />
        <Route path="/question4" element={<Question4 />} />
        <Route path="/question5" element={<Question5 />} />
        <Route path="/question6" element={<Question6 />} />
        <Route path="/question7" element={<Question7 />} />
        <Route path="/question8" element={<Question8 />} />
        <Route path="/question9" element={<Question9 />} />
        <Route path="/question10" element={<Question10 />} />
        <Route path="/end" element={<End />} />
      </Routes>
    </Router>
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
