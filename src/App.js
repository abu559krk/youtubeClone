import Header from "./Header";
// import Sidebar from "./Sidebar";
import "../src/App.css";
// import HomePage from "./HomePage";
import Navigation from "./Navigation.jsx";
// import RecomendedVideos from './RecomendedVideos';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import SearchPage from "./SearchPage";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Navigation/>}>
        {/* <Sidebar/>
      <RecomendedVideos/> */}
        </Route>
        <Route path="searchpage" element={<SearchPage/>}/>
        </Routes>
        </BrowserRouter>
      
      <div className="app-page">
      
      </div>
    </div>
  );
}

export default App;
