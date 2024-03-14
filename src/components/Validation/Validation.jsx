import * as Yup from 'yup'
import { nameExpression } from '../../constants/constants'

const name = Yup.string().matches(nameExpression.name, 'от 2 до 30').required('Введите имя')

export const schemas = {
  custom: Yup.object().shape({
    name,
  }),
}

export const initialValues = {
  name: '',
  email: '',
  password: '',
}
