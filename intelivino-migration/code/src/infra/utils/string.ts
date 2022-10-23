export const cleanString = (plan: string) => {
  return plan.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
}
