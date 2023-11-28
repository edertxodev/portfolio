type Route = {
  name: string
  path: string
}

export const routes: Route[] = [
  { name: 'home', path: '/' },
  { name: 'about', path: '#about' },
  { name: 'repositories', path: '#repositories' },
]

export function getRouteByName(name: string) {
  return routes.find((el) => el.name === name) ?? routes[0]
}
