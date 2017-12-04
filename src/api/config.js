import config from '../config.json'

export default {
  env: process.env.BUILD_ENV === 'undefined' ? config.apiEnv : process.env.BUILD_ENV
};
