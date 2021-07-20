import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home/Home';
import Quiz from './pages/Quiz/Quiz';
import Result from './pages/Result/Result';

import './styles/App.css';

type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

function App() {
  const [name, setName] = useState<string>('');

  const [questions, setQuestions] = useState<string[]>([]);
  const [score, setScore] = useState(0);

  const fetchQuestion = async (
    category: string = '',
    difficulty: string = ''
  ) => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10&${
        category && `category=${category}`
      }&${difficulty && `difficulty=${difficulty}`}&type=multiple`
    );
    setQuestions([data.results]);
  };
  return (
    <Router>
      <div className="app" style={{ backgroundImage: 'url(./ques1.png' }}>
        <Header />

        <Switch>
          <Route path="/" exact>
            <Home name={name} setName={setName} fetchQuestion={fetchQuestion} />
          </Route>
          <Route path="/quiz" exact>
            <Quiz
              name={name}
              questions={questions}
              score={score}
              setScore={setScore}
              setQuestions={setQuestions}
            />
          </Route>
          <Route path="/result" exact>
            <Result />
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
