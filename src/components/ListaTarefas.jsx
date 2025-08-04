import { useRecoilValue, useSetRecoilState } from 'recoil';
import { tarefasFiltradasSelector } from '../selectors/filteredTasksSelector';
import { tarefasAtom } from '../atoms/tarefasAtom';

export default function ListaTarefas() {
  const tarefas = useRecoilValue(tarefasFiltradasSelector);
  const setTarefas = useSetRecoilState(tarefasAtom);

  const alternarConcluida = (id) => {
    setTarefas(prev => prev.map(tarefa =>
      tarefa.id === id ? { ...tarefa, completed: !tarefa.completed } : tarefa
    ));
  };

  const removerTarefa = (id) => {
    setTarefas(prev => prev.filter(tarefa => tarefa.id !== id));
  };

  if (tarefas.length === 0) return <p>Nenhuma tarefa encontrada.</p>;

  return (
    <ul>
      {tarefas.map(tarefa => (
        <li key={tarefa.id} style={{ textDecoration: tarefa.completed ? 'line-through' : 'none' }}>
          {tarefa.text}
          <button onClick={() => alternarConcluida(tarefa.id)}>
            {tarefa.completed ? 'Desmarcar' : 'Concluir'}
          </button>
          <button onClick={() => removerTarefa(tarefa.id)}>Remover</button>
        </li>
      ))}
    </ul>
  );
}
