type Route = {
  name: string
  path: string
}

export const routes: Route[] = [
  { name: 'home', path: '/' },
  { name: 'about', path: 'about' },
  { name: 'experience', path: 'experience' },
  { name: 'projects', path: 'projects' },
  { name: 'repositories', path: 'repositories' },
  { name: 'contact', path: 'contact' },
]

export function getRouteByName(name: string) {
  return routes.find((el) => el.name === name) ?? routes[0]
}
