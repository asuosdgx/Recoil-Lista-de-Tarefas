import { useRecoilState } from 'recoil';
import { filterAtom } from '../atoms/filterAtom';

export default function FiltroTarefas() {
  const [filtro, setFiltro] = useRecoilState(filterAtom);

  return (
    <div className="filtros filtros-vermelhos">
      <button
        onClick={() => setFiltro('all')}
        disabled={filtro === 'all'}
        className={filtro === 'all' ? 'active' : ''}
      >Todas</button>
      <button
        onClick={() => setFiltro('completed')}
        disabled={filtro === 'completed'}
        className={filtro === 'completed' ? 'active' : ''}
      >Concluídas</button>
      <button
        onClick={() => setFiltro('pending')}
        disabled={filtro === 'pending'}
        className={filtro === 'pending' ? 'active' : ''}
      >Pendentes</button>
    </div>
  );
}
