/**
 * @author monkeywang
 * Date: 17/12/4
 */
function router (app) {
  let _paramsStr = ''
  let _queryStr = ''
  function _obj2str (params, query) {
    Object.keys(params).forEach((key) => {
      _paramsStr += `/${params[key]}`
    })
    Object.keys(query).forEach((key, i) => {
      _queryStr += i ? `&${key}=${query[key]}` : `?${key}=${query[key]}`
    })
  }

  return {
    push (url, params = {}, query = {}) {
      _obj2str(params, query)
      app.go(url + _paramsStr + _queryStr)
    },

    replace (url, params = {}, query = {}) {
      _obj2str(params, query)
      app.replace(url + _paramsStr + _queryStr)
    },

    go (value) {
      app.go(value)
    },

    getQuery (key) {
      return key ? app.query[key] : app.query
    },

    getParams (key) {
      return key ? app.params[key] : app.params
    }
  }
}

router.install = function (Vue, options) {
  Vue.prototype.$router = router(options)
}

export default router
