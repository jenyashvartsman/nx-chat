const { getJestProjects } = require('@nrwl/jest');

module.exports = {
  projects: [
    ...getJestProjects(),
    '<rootDir>/apps/client',
    '<rootDir>/apps/server',
    '<rootDir>/libs/client/sign-in-view',
    '<rootDir>/libs/client/chat-view',
  ],
};
