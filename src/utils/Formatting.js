import moment from "moment"

export function OnlyNumbers(value) {
  return value.replace(/[^0-9]/gi, '')
}

export function CpfFlatList(value) {
  return value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
}

export function CepDetailPeople(value) {
  return value.replace(/(\d{5})(\d{3})/, "$1-$2")
}

export function FormatDateBrToUsa(value) {
  return moment(value, 'DD/MM/YYYY').format('YYYY-MM-DD')
}

export function FormatDateUsaToBr(value) {
  return moment(value, 'YYYY-MM-DD').format('DD/MM/YYYY')
}