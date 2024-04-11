import { Route, Routes } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { VideoList } from "../components/VideoList";

export const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<VideoList />} />
      </Routes>
    </div>
  );
};
