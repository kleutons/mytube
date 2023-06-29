import { useEffect, useRef, useState } from 'react';

function Testebt() {
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonMenuUserRef = useRef<HTMLDivElement>(null);
  const [openMenuUser, setOpenMenuUser] = useState(false);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as HTMLElement) &&
        buttonMenuUserRef.current &&
        !buttonMenuUserRef.current.contains(event.target as HTMLElement)
      ) {
        setOpenMenuUser(false);
        console.log('Clique fora do menu');
      }
    }

    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  function handleOpenMenuUser() {
    setOpenMenuUser(!openMenuUser);
    console.log('Menu do usuário clicado');
  }

  return (
    <div>
      <div ref={buttonMenuUserRef} onClick={handleOpenMenuUser}>
        Menu do Usuário
      </div>
      {openMenuUser && (
        <div ref={menuRef}>
          {/* Conteúdo do menu */}
          <p>Item 1</p>
          <p>Item 2</p>
          <p>Item 3</p>
        </div>
      )}
    </div>
  );
}

export default Testebt;