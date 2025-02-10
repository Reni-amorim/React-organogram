import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';

function App() {

  const [colabs, setColabs] = useState([])

  const newColabAdd = (colab) => {
//    setcolabs([...colabs, colab])
    console.log(colab)
    setColabs([...colabs, colab])
}

  return (
    <div className="App">
      <Banner />
      <Formulario colabCadastrado={colab => newColabAdd(colab)}/>
    </div>
  );
}

export default App;
