import Textarea from '../form/Textarea';
import Stats from '../stats/Stats';
import { useState } from 'react';
import { BLUESKY_MAX_CHARS, THREADS_MAX_CHARS } from '../../lib/constants';

export default function Container() {
  const [text, setText] = useState('');
  const [isWarningText, setIsWarningText] = useState(false);

  const stats = {
    numberOfCharacters: text.length,
    numberOfWords: text.trim().split(/\s+/).filter(Boolean).length,
    blueskyCharactersLeft: BLUESKY_MAX_CHARS - text.length,
    threadsCharactersLeft: THREADS_MAX_CHARS - text.length,
  };

  const handleTextChange = (e) => {
    let newText = e.target.value;
    if (newText.includes('<script>')) {
      setIsWarningText('No script tags allowed');
      newText = newText.replace('<script>', '');
      setText(newText);
    } else if (newText.includes('@')) {
      setIsWarningText('No @ symbols allowed');
      newText = newText.replace('@', '');
      setText(newText);
    } else {
      setIsWarningText('');
      setText(newText);
    }
  };

  return (
    <main className="container">
      <Textarea text={text} onTextChange={handleTextChange} isWarningText={isWarningText} />
      <Stats stats={stats} />
    </main>
  );
}
