import {useState,useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './pages/not-found';
import { DisplayCard, GridDisplays, UseFavicon } from "asappy-web-shared-ui";
const color="#A3004C"


export default function App() {
  UseFavicon(color)
  const [allPages, setData] = useState(null);

  useEffect(() => {
    fetch('/pages.json')
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData))
      .catch((error) => console.error('Error loading JSON:', error));
  }, []);

  if (!allPages) return <div>Loading...</div>;
  allPages.sort((a, b) => {
    // new Date(year, monthIndex, day)
    const dateA = new Date(a.lastEdit[2], a.lastEdit[0] - 1, a.lastEdit[1]);
    const dateB = new Date(b.lastEdit[2], b.lastEdit[0] - 1, b.lastEdit[1]);
    // Subtract dateA from dateB for descending order (most recent first)
    return dateB.getTime() - dateA.getTime();
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GridDisplays allPages={allPages} title="Websites — Asappy" root="asappy.tech" largeTitle="websites" description="A collection of websites and experiments built with care. I enjoy
            making useful web applications with a responsive UI and powerful backend. Usually with React-Vite front-end and Supabase database and edge functions and email/sms API. AI integrations and automated work flows for lead confirmation and follow-up."/>} />
        <Route path="*" element={<NotFound />} />
        {allPages.map((item)=>(
          <Route key={item.link} path={"/"+item.link} element={<DisplayCard page={item} root="websites"/>}/>
        ))}
      </Routes>
    </BrowserRouter>
  );
}
