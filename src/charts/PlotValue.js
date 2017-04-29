import Nh from '../helpers/NumberHelper'

const PlotValue = {

  format: (value, valueType) => {
      if (valueType === PlotValue.RUPEE) {
        return Nh.rupee(value)
      } else if (valueType === PlotValue.PERCENTAGE) {
        return Nh.per(value)
      } else if (valueType === PlotValue.BIG_NUMBER) {
        return Nh.abbr(value)
      } else {
        return Nh.humanize(value)
      }
  }
}

PlotValue.RUPEE = 'RUPEE'
PlotValue.PERCENTAGE = 'PERCENTAGE'
PlotValue.BIG_NUMBER = 'BIG_NUMBER'
PlotValue.NUMBER = 'NUMBER'

export default PlotValue