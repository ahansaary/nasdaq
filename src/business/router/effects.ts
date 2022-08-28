import keys from 'lodash/keys'
import page from 'page'
import qs from 'query-string'

export const initialize = (routes: any) => {
  keys(routes).forEach(url => {
    page(url, ({params, querystring}) => {
      const query = qs.parse(querystring)
      const payload = {params, query}
      const action = routes[url]
      action(payload)
    })
  })
  page.start()
}

export const open = (url: string) => page.show(url)
