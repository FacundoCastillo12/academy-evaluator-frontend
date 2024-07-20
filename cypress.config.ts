import { defineConfig } from 'cypress';
import codeCoverageTask from '@cypress/code-coverage/task';

export default defineConfig({
  component: {
    devServer: {
      framework: 'next',
      bundler: 'webpack',
    },
    setupNodeEvents(on, config) {
      codeCoverageTask(on, config);
      return config;
    },
  },
  e2e: {
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {
      codeCoverageTask(on, config);
      return config;
    },
    env: {
      codeCoverage: {
        // At end of run, call this endpoint to retrieve code coverage info from the backend
        // and combine with coverage info from frontend code executed in the browser
        url: 'http://localhost:3000/api/__coverage__',
      },
    },
  },
});
