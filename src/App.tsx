import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './pages/not-found';
import { DisplayCard, GridDisplays, UseFavicon } from "asappy-web-shared-ui";
import allPages from './assets/pages.json'
const color="#A3004C"

allPages.sort((a, b) => {
    // new Date(year, monthIndex, day)
    const dateA = new Date(a.lastEdit[2], a.lastEdit[0] - 1, a.lastEdit[1]);
    const dateB = new Date(b.lastEdit[2], b.lastEdit[0] - 1, b.lastEdit[1]);
    
    // Subtract dateA from dateB for descending order (most recent first)
    return dateB.getTime() - dateA.getTime();
});

export default function App() {
  UseFavicon(color)
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<GridDisplays allPages={allPages} title="Websites — Asappy" root="asappy.tech" largeTitle="websites" description="A collection of websites and experiments built with care. I enjoy
            making useful web applications with a responsive UI and powerful backend. Usually with React-Vite front-end and Supabase database and edge functions and email/sms API. AI integrations and automated work flows for lead confirmation and follow-up."/>} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="*" element={<NotFound />} />
        {allPages.map((item)=>(
          <Route key={item.link} path={"/"+item.link} element={<DisplayCard page={item} root="websites"/>}/>
        ))}
      </Routes>
    </BrowserRouter>
  );
}
