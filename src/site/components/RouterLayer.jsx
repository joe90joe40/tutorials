import React from 'react';
import { Switch } from 'react-router-dom';

import Layout1 from './layouts/Layout1';
import Layout2 from './layouts/Layout2';

import Home from './pages/Home';
import About from './pages/About';
import Topics from './pages/Topics';

const RouterLayer = () => (
    <Switch>
		<Layout1 exact path="/"><Home/></Layout1>
		<Layout2 path="/about"><About/></Layout2>
		<Layout1 path="/topics"><Topics/></Layout1>
    </Switch>
);

export default RouterLayer;