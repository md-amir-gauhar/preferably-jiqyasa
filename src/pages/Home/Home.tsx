import { useState, Dispatch, SetStateAction } from 'react';
import { useHistory } from 'react-router-dom';
import { TextField, MenuItem, Button } from '@material-ui/core';

import Categories from '../../Data/Category';
import ErrorMessage from '../../components/ErrorMessage';

import '../../styles/Home.css';

interface Category {
  value: number;
  category: string;
}

interface Props {
  name: string;
  setName: Dispatch<SetStateAction<string>>;
  fetchQuestion: (category: string, difficulty: string) => any;
}

const Home: React.FC<Props> = ({ name, setName, fetchQuestion }) => {
  const [difficulty, setDifficulty] = useState('');
  const [category, setCategory] = useState('');
  const [error, setError] = useState(false);

  const history = useHistory();

  const handleSubmit = () => {
    if (!category || !difficulty || !name) {
      setError(true);
      return;
    } else {
      setError(false);
      fetchQuestion(category, difficulty);
      history.push('/quiz');
    }
  };
  return (
    <div className="home">
      <div className="settings">
        <span className="setting-heading">Quiz Settings</span>
        <div className="setting_select">
          {error && <ErrorMessage>Please fill all the fields</ErrorMessage>}
          <TextField
            label="Enter your name"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <TextField
            select
            label="Select Category"
            variant="outlined"
            value={category}
            onChange={(e) => setCategory(e.target.value)}>
            {Categories.map((category: Category) => (
              <MenuItem key={category.category} value={category.value}>
                {category.category}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            select
            label="Select Difficulty"
            variant="outlined"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}>
            <MenuItem key="Easy" value="easy">
              Easy
            </MenuItem>
            <MenuItem key="Medium" value="medium">
              Medium
            </MenuItem>
            <MenuItem key="Hard" value="hard">
              Hard
            </MenuItem>
          </TextField>

          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleSubmit}>
            Start Quiz
          </Button>
        </div>
      </div>
      <img
        src="https://raw.githubusercontent.com/piyush-eon/Reactjs-Quiz-App/800cec3ad30b4669df73766564b8b85202f44f41/public/quiz.svg"
        className="banner"
        alt="quiz-img"
      />
    </div>
  );
};

export default Home;
