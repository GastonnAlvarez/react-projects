import { CiSearch } from "react-icons/ci";
import { BsPlusLg } from "react-icons/bs";
import { GrClose } from "react-icons/gr";
import NoteItem from "../components/NoteItem";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Notes = ({ notes }) => {
  const [showSearch, setShowSearch] = useState(false);
  const [text, setText] = useState("");
  const [filteredNotes, setFilteredNotes] = useState(notes);



  const handleSearch = () => {
    setFilteredNotes(
      notes.filter((note) => {
        if (note.title.toLowerCase().match(text.toLocaleLowerCase())) {
          return note;
        }
      })
    );
  };

  useEffect(handleSearch, [text]);

  return (
    <section>
      <header className="notes__header">
        {!showSearch && <h2>My Notes</h2>}
        {showSearch && (
          <input
            type="text"
            value={text}
            onChange={(e) => {setText(e.target.value);handleSearch();}}
            autoFocus
            placeholder="Keyword..."
          />
        )}
        <button
          className="btn"
          onClick={(e) => setShowSearch((prevState) => !prevState)}
        >
          {showSearch ? <GrClose /> : <CiSearch/>}
        </button>
      </header>
      <div className="notes__container">
        {
          filteredNotes.length == 0 && <p className="empty__notes">No se encontro la notas...</p>
        }
        {filteredNotes.map((note) => (
          <NoteItem key={note.id} note={note} />
        ))}
      </div>
      <Link to="/create-note" className="btn add__btn">
        <BsPlusLg />
      </Link>
    </section>
  );
};

export default Notes;
