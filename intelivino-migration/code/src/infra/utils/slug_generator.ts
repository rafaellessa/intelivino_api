export const slugGenerator = (plan: String): string => {
  return plan.replace(/\s/g, '_').toLocaleLowerCase()
}
