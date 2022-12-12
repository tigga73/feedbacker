export function validateEmptyAndLength3(value) {
  if (!value) {
    return '*Este campo é obrigatório.'
  }

  if (value.length < 3) {
    return '*Este campo precisa ter no mínimo 3 caracteres.'
  }

  return true
}

export function validateEmptyAndEmail(value) {
  if (!value) {
    return '*Este campo é obrigatório.'
  }

  const regex = /^[a-z0-9.-]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i

  if (!regex.test(value)) {
    return '*Este campo precisa ser um e-mail válido.'
  }

  return true
}
