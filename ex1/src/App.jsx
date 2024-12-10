import React, { useState, useEffect } from 'react';

// =======================
// COMPONENTE EDITOR (Subject)
// =======================
const Editor = ({ onContentChange }) => {
  const [content, setContent] = useState('');

  const handleChange = (e) => {
    setContent(e.target.value);
    onContentChange(e.target.value); // Notifica os observadores
  };

  return (
    <div>
      <h2>Editor</h2>
      <textarea
        value={content}
        onChange={handleChange}
        placeholder="Digite algo..."
      />
    </div>
  );
};

// =======================
// COMPONENTE LOGGER (Observer)
// =======================
const Logger = ({ content }) => {
  useEffect(() => {
    if (content) {
      console.log(`Log: Conteúdo alterado para: ${content}`);
    }
  }, [content]); // Executa quando o conteúdo muda

  return (
    <div>
      <h3>Logger</h3>
      <p>{content ? `Última entrada: ${content}` : 'Sem entradas ainda.'}</p>
    </div>
  );
};

// =======================
// COMPONENTE PRINCIPAL (App)
// =======================
const App = () => {
  const [content, setContent] = useState('');

  return (
    <div style={{ padding: '20px' }}>
      <h1>Exemplo de Padrão Observer em React</h1>
      <Editor onContentChange={setContent} />
      <Logger content={content} />
    </div>
  );
};

export default App;
