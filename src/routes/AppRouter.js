import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "../style/GlobalStyle";
import Header from "../components/Header/Header.component";
import NotFound from "../components/NotFound/NotFound.component";
import Home from "../pages/Home/Home.component";
import Movie from "../pages/Movie/Movie.component";

const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact={true} element={<Home />} />
        <Route path="/id/:movieId" exact={true} element={<Movie />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <GlobalStyle />
    </Router>
  );
};

export default AppRouter;
