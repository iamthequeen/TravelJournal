import data from './data'
import Header from './components/Header';
import Travel from './components/Travel'

function App() {
  const destinations = data.map(place => {
        
    return (
        <Travel 
        key={place.id}
        {...place}
        />
    )
})

return (
    <div>
        <Header />
        {destinations}
    </div>
  );
}

export default App;
