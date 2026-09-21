import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './pages/not-found';
import { DisplayCard, GridDisplays, UseFavicon } from "asappy-web-shared-ui";
import allPages from '../pages.json'
const color="#A3004C"

export default function App() {
  UseFavicon(color)
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<GridDisplays allPages={allPages} title="Websites — Asappy" root="asappy.tech" largeTitle="websites" description="A collection of websites and experiments built with care. I enjoy
            making useful web applications with a responsive UI and powerful backend."/>} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="*" element={<NotFound />} />
        {allPages.map((item)=>(
          <Route key={item.link} path={"/"+item.link} element={<DisplayCard page={item} root="websites"/>}/>
        ))}
      </Routes>
    </BrowserRouter>
  );
}
