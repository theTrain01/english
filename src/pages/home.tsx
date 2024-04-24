import '../home.css';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

export const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-heading">
        Откройте новые горизонты с нами: узнайте свой уровень английского!
      </h1>
      <p className="home-description">
        Наши инструменты оценки помогут вам точно определить ваш текущий уровень владения английским
        языком. Давайте вместе начнем ваше путешествие к свободному общению на английском.
      </p>
      <Link to="/tests">
        <Button variant="contained" size="large" color="primary">
          Проверить себя!
        </Button>
      </Link>
    </div>
  );
};
