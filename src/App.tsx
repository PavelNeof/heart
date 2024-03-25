import './App.css';
import 'twin.macro';
import { AppRouter } from './router';
import { Theme } from '@radix-ui/themes';

import './App.css';

function App() {
  return (
    <div tw="p-0">
      <Theme tw="p-0" accentColor="crimson" grayColor="sand" radius="large" scaling="95%">
        <AppRouter />
      </Theme>
    </div>
  );
}

export default App;
