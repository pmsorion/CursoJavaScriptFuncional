const compose = (...functions) => data =>
  functions.reduceRight((value, func) => func(value), data)

let description = $('#description')
let calories = $('#calories')
let carbs = $('#carbs')
let protein = $('#protein')

let list = [
  {
  description: 'Manzana',
  calories: 10,
  carbs: 10,
  protein: 10
  },
  {
    description: 'Durazno',
    calories: 10,
    carbs: 10,
    protein: 10
  },
  {
    description: 'Fresa',
    calories: 10,
    carbs: 10,
    protein: 10
  },
  {
    description: 'Uva',
    calories: 10,
    carbs: 10,
    protein: 10
  }
]

description.keypress(() => {
  description.removeClass('is-invalid')
})

calories.keypress(() => {
  calories.removeClass('is-invalid')
})

carbs.keypress(() => {
  carbs.removeClass('is-invalid')
})

protein.keypress(() => {
  protein.removeClass('is-invalid')
})

const validateInputs = () => {

  description.val() ? '' : description.addClass('is-invalid')
  calories.val() ? '' : calories.addClass('is-invalid')
  carbs.val() ? '' : carbs.addClass('is-invalid')
  protein.val() ? '' : protein.addClass('is-invalid')

  if(
    description.val() &&
    calories.val() &&
    carbs.val() &&
    protein.val()
  ) console.log('Agregar item a lista')
}
