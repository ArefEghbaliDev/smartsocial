import { Route, Routes } from '@solidjs/router';
import type { Component } from 'solid-js';
import DashboardPageView from './pages/dashboard/view';
import SignupPageView from './pages/signup/view';

const App: Component = () => {
  return (
    <Routes>
      <Route path="/signup" component={SignupPageView} />
      <Route path="/dashboard" component={DashboardPageView} />
    </Routes>
  );
};

export default App;
