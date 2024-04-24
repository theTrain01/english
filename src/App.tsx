import { Home } from './pages/home';
import { TestSkill } from './pages/test-skill';
import { Routes, Route } from 'react-router-dom';

function EnglishTest() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tests" element={<TestSkill />} />
      </Routes>
    </div>
  );
}

export default EnglishTest;
