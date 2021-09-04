import './App.css';
import SkillsFrame from './Skills/SkillsFrame';
import SkillsIndex from './Skills/SkillsIndex';
import Title from './TitleIntro/Title'

function App() {
  return (
    <div className="App">
    <Title/>
    <br/>
    <SkillsIndex/>
    <SkillsFrame/> 
    </div>
  );
}

export default App;
