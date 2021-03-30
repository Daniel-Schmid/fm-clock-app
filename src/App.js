import Layout from './components/Layout'
import QuoteBlock from './components/QuoteBlock'
import TimeBlock from './components/TimeBlock'

function App() {
  return (
    <div className="App">
      <Layout>
        <div className="h-full flex flex-col justify-between">
        <QuoteBlock />
        <TimeBlock />
        </div>
      </Layout>
    </div>
  );
}

export default App;
