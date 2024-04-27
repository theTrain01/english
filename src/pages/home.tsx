import '../home.css';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import images from "../img/images1.jpg"
import images1 from "../img/images2.jpg"
export const Home = () => {
  return (
    <div className="home-container">
      <div className="left-box">
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

      <div className="right-box">
        <img src={images} alt="img" />
        <img src={images1} alt="img" />
      </div>
    </div>
  );
};
