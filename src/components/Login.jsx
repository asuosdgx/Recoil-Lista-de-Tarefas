import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { userAtom } from '../atoms/userAtom';

export default function Login() {
  const [nome, setNome] = useState('');
  const setUser = useSetRecoilState(userAtom);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nome.trim()) return;
    setUser(nome.trim());
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={nome}
        onChange={e => setNome(e.target.value)}
        placeholder="Digite seu nome"
      />
      <button type="submit">Entrar</button>
    </form>
  );
}
