export function NavigationOption({ option }) {
  return <a to={option.href}>{option.label}</a>;
}
