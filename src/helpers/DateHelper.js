import format from 'date-fns/format'

const DateHelper = {

  format: (input) => {
    return  (typeof input) === 'string' ? format(input, 'DD MMM YYYY') : input
  }

}

export default DateHelper

