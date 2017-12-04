import { createAPI } from '../util';
import config from '../config';

const baseUrl = {
  mock: 'https://www.easy-mock.com/mock/5a24d0ef475c043670250893/api',
  development: '/api',
  prepub: 'http://api.douban.com/v2',
  production: 'http://api.douban.com/v2'
}[config.env || 'mock'];

export default createAPI(baseUrl);
