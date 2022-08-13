import React from 'react';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import { render } from 'react-dom';
import Dashboard from './Dashboard';
import 'antd/dist/antd.less';
import PageTemplate from './_shared/components/PageTemplate';
import NodeQuality from './NodeQuality';
import Stamina from './Stamina';
import NotFound from './NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <PageTemplate>
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/node-quality" element={<NodeQuality />} />
            <Route path="/stamina" element={<Stamina />}/>
            <Route path="*" element={<NotFound />}/>
        </Routes>
      </PageTemplate>
    </BrowserRouter>
  );
};

render(<App />, document.getElementById('root'));