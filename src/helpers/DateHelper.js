import format from 'date-fns/format'

const DateHelper = {
  format: (date) => {
    return format(date, 'DD MMM YYYY')
  }
}

export default DateHelper

