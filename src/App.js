import HeaderBtns from './components';

function App() {

  // Show Modal
  function showModal() {
    const popup = document.querySelector('.popup-container');
    popup.style.display = 'flex';
  }

  return (
      <HeaderBtns onClick={showModal}/>
  );
}

export default App;
