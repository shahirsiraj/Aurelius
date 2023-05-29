import React,{useState, useEffect} from "react";

function Happy() {
  const [gratitudeEntry, setGratitudeEntry] = useState('');
  const [journalEntries, setJournalEntries] = useState([]);

  const handleInputChange = (e) => {
    setGratitudeEntry(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (gratitudeEntry.trim() !== '') {
      setJournalEntries([...journalEntries, gratitudeEntry]);
      setGratitudeEntry('');
    }
  };

  const handleRemove = (entry) => {
    setJournalEntries((prevEntries) =>
      prevEntries.filter((prevEntry) => prevEntry !== entry)
    );
  };

  useEffect(() => {
    // storing input name
    localStorage.setItem("journal", JSON.stringify(journalEntries));
  }, [journalEntries]);

  return (
    <div>
      <h1>Tell me what you're happy about today!</h1>
      <h2>Gratitude Journal</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Write your gratitude entry..."
          value={gratitudeEntry}
          onChange={handleInputChange}
        />
        <button type="submit">Add Entry</button>
      </form>
      <ul>
        {journalEntries.map((entry, index) => (
          <li key={index}>
            {entry}
            <button onClick={() => handleRemove(entry)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}



export default Happy