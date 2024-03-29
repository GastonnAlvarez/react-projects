import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import dummy__notes from "./dummy__notes";
import CreateNotes from "./pages/CreateNotes";
import EditNotes from "./pages/EditNotes";
import Notes from "./pages/Notes";


export const App = () => {
  const [notes,setNotes] = useState(JSON.parse(localStorage.getItem('notes')) || []);
  useEffect(() => {
    localStorage.setItem('notes',JSON.stringify(notes));
  }, [notes])
  
  return (
    <main id="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Notes notes={notes}/>} />
          <Route path="/create-note" element={<CreateNotes setNotes={setNotes}/>} />
          <Route path="/edit-note/:id" element={<EditNotes notes={notes} setNotes={setNotes}/>} />
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;
