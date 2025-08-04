import { selector } from 'recoil';
import { tarefasAtom } from '../atoms/tarefasAtom';
import { filterAtom } from '../atoms/filterAtom';

export const tarefasFiltradasSelector = selector({
  key: 'tarefasFiltradasSelector',
  get: ({ get }) => {
    const tarefas = get(tarefasAtom);
    const filtro = get(filterAtom);
    if (filtro === 'completed') {
      return tarefas.filter(tarefa => tarefa.completed);
    } else if (filtro === 'pending') {
      return tarefas.filter(tarefa => !tarefa.completed);
    }
    return tarefas;
  },
});
