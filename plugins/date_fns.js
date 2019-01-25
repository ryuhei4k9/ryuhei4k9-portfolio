import format from 'date-fns/format'
import ja from 'date-fns/locale/ja'
import parse from 'date-fns/parse'

export default ({ app }, inject) => {
  inject('date_format', (date = new Date(), formatStr) => {
    return format(parse(date), formatStr, { locale: ja })
  })
}
