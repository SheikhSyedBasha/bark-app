import './App.css';
import { HeaderComponent } from './header';
import { HomeComponent } from './home';
import FooterComponent from './footer';

function App() {
  return (
    <main className='homescreen-container'><HeaderComponent></HeaderComponent><div className="App">
      <div className='home'>
        <HomeComponent></HomeComponent>
      </div>
    </div>
      <FooterComponent></FooterComponent></main>
  );
}

export default App;
