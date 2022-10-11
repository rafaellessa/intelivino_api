export const slugGenerator = (plan: String): string => {
  return plan.replace('', '_').toLocaleLowerCase()
}
