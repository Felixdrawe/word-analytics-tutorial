import { useState } from 'react';
import Warning from './Warning';

export default function Textarea() {
  const [text, setText] = useState('');
  const [isWarningText, setIsWarningText] = useState(false);

  const handleChange = (e) => {
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
    <div className="textarea">
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Enter your text"
        spellCheck="false"
      />
      <Warning warningText={isWarningText} />
    </div>
  );
}
