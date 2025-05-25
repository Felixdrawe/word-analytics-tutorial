import Textarea from './Textarea';
import Stats from './Stats';
import { useState } from 'react';

export default function Container() {
  const [text, setText] = useState('');
  const [isWarningText, setIsWarningText] = useState(false);

  const numberOfCharacters = text.length;
  const numberOfWords = text.trim().split(/\s+/).filter(Boolean).length;

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
      <Stats numberOfWords={numberOfWords} numberOfCharacters={numberOfCharacters} />
    </main>
  );
}
