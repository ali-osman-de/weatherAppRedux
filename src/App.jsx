import MainPage from './pages/mainPage/MainPage';
import NewsPage from './pages/newsPage/NewsPage';
import NotFoundPage from './pages/notFoundPage/NotFoundPage';
import ResultPage from './pages/resultPage/ResultPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {

  return (
    <>
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route path="/result/:city" element={<ResultPage />} />
        <Route path="/news/:assetId/:idx" element={<NewsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
