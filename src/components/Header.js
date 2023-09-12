import React from 'react'

const Header = ({ toggleTheme }) => {
  const handleToggleTheme = () => {
    toggleTheme()
  };

  return (
    <header>
      <div>
        <h1>To-Do List</h1>
        <button
          type="button"
          className="toggle-dark-theme"
          aria-label="Change theme"
          onClick={handleToggleTheme}
        >
        </button>
      </div>
    </header>
  )
};

export default Header