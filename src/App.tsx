import React, {FC} from 'react';
import './App.css';
import {Footer, Header, Main} from "./components";
import {Layout} from "./layouts";

const App: FC = () => {
  return (
      <Layout>
        <Header/>
        <Main/>
        <Footer/>
      </Layout>
  );
}

export default App;
