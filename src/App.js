import './App.scss';
import Header from './components/header/header'
import Footer from './components/footer/footer';
import Container from './components/container/container';
import {registerRequestInterceptor, registerResponseInterceptor} from './common/http/interceptor'

function App() {

  registerRequestInterceptor()
  registerResponseInterceptor()
  
  return (
    <div id="app">
      <Header></Header>
      <Container></Container>
      <Footer></Footer>
    </div>
  );
}

export default App;
