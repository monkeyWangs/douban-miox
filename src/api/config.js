import config from '../config.json'

export default {
  env: process.env.BUILD_ENV || config.apiEnv
};
