import { useEffect, useState } from 'react';

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Comprobar el modo oscuro guardado en localStorage al cargar la página
    const savedMode = localStorage.getItem('darkMode') === 'true';
    setIsDarkMode(savedMode);

    // Aplicar el tema según el modo
    if (savedMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const handleToggle = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    
    // Guardar la preferencia en localStorage
    localStorage.setItem('darkMode', newMode);
    
    // Aplicar el tema en el documento
    if (newMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <label className="flex items-center cursor-pointer">
      <span className="mr-2">Modo oscuro</span>
      <input 
        type="checkbox" 
        checked={isDarkMode} 
        onChange={handleToggle} 
        className="w-10 h-5 rounded-full appearance-none cursor-pointer bg-gray-300 dark:bg-gray-600 transition-colors"
      />
    </label>
  );
};

export default DarkModeToggle;
