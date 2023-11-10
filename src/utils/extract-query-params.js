export function extractQueryParams(query = '') {
  return query
    .substring(1)
    .split('&')
    .reduce((queryParams, param) => {
      console.log('d', param)
      const [key, value] = param.split('=')
      console.log(key, value)

      queryParams[key] = value
      return queryParams
    }, {})
}
