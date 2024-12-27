import * as model from './model'
import * as nav from './View/nav'
import * as shop from './View/shop'

const render = async function () {
  await model.loadData()
  console.log(model.state.items)
}

const init = function () {
  render()
}

init()
