import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { tarefasAtom } from '../atoms/tarefasAtom';

export default function FormularioTarefa() {
  const [texto, setTexto] = useState('');
  const setTarefas = useSetRecoilState(tarefasAtom);

  const aoEnviar = (e) => {
    e.preventDefault();
    if (!texto.trim()) return;
    setTarefas(prev => [
      ...prev,
      { id: Date.now(), text: texto, completed: false }
    ]);
    setTexto('');
  };

  return (
    <form onSubmit={aoEnviar}>
      <input
        type="text"
        value={texto}
        onChange={e => setTexto(e.target.value)}
        placeholder="Nova tarefa"
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}
