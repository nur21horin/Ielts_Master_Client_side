import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Writing from "./components/Writting/Writing.jsx";
import Speaking from "./components/Speaking/Speaking.jsx";
import Reading from "./components/Reading/Reading.jsx";
import Listening from "./components/LIstening/Listening.jsx";
import QueCard from "./components/QueCard/QueCard.jsx";
import Vocabulary from "./components/Vocabulary/AddVocabullary/Vocabulary.jsx";
import ShowVocabulary from "./components/Vocabulary/ShowVocabulary/ShowVocabulary.jsx";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import VocabPage from "./components/Vocabulary/VocabPage.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/vocabulary", element: <Vocabulary /> },
  { path: "/writing", element: <Writing /> },
  { path: "/speaking", element: <Speaking /> },
  { path: "/reading", element: <Reading /> },
  { path: "/listening", element: <Listening /> },
  { path: "/quecard", element: <QueCard /> },
  {
    path: "/showvocab",
    element: <ShowVocabulary />,
    // loader: () => fetch("https://ielts-master-server.vercel.app/users"),
    loader:()=>fetch("/data.json"),
  },{
    path:"/vocabpage", element:<VocabPage/>
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);