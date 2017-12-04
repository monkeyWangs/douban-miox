import instance from './instance';
import { convertRESTAPI } from '../util';

/** 正在上映 */
function v2_movie_in_theaters_get(opts) {
  return instance({
    method: 'get',
    url:  '/v2/movie/in_theaters',
    opts: opts
  });
}

/** 电影详情 */
function v2_movie_subject_get(opts) {
  return instance({
    method: 'get',
    url:  `/v2/movie/subject/${opts}`
  });
}

export {
  v2_movie_in_theaters_get,
  v2_movie_subject_get
};
