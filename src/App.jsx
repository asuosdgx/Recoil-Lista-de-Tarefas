import { RecoilRoot, useRecoilValue } from 'recoil';
import FormularioTarefa from './components/FormularioTarefa';
import ListaTarefas from './components/ListaTarefas';
import FiltroTarefas from './components/FiltroTarefas';
import Login from './components/Login';
import { userAtom } from './atoms/userAtom';



function MainContent() {
  const usuario = useRecoilValue(userAtom);
  if (!usuario) {
    return (
      <main>
        <h1>Login</h1>
        <Login />
      </main>
    );
  }
  return (
    <main>
      <h1>Lista de Tarefas</h1>
      <p>Bem-vindo, {usuario}!</p>
      <FormularioTarefa />
      <FiltroTarefas />
      <ListaTarefas />
    </main>
  );
}

function App() {
  return (
    <RecoilRoot>
      <MainContent />
    </RecoilRoot>
  );
}

export default App
