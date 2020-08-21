export const ComponentOnCondition = ({ conditions }: { conditions: [boolean, React.FunctionComponentElement<any>][] }) => {
  return conditions.find(([condition]) => condition)?.[1] || null
}
