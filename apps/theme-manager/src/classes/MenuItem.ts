class RouteLink {
    name: string
    constructor (name: string) {
        this.name = name
    }
}
export class MenuItem {
    key: string
    value: string
    description: string
    to: RouteLink
  
    constructor(key: string, value: string, description: string, to: RouteLink) {
      this.key = key
      this.value = value
      this.description = description
      this.to = to
    }
  
  }