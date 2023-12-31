export class ColorItem {
    hex: string
    section: 'header' | 'main' | 'sidebar'
    constructor(hex: string, section: 'header' | 'main' | 'sidebar') {
        this.hex = hex
        this.section = section
    }
}

export class ThemeItem {
    name: string
    main: ColorItem
    header: ColorItem
    sidebar: ColorItem
    constructor(name: string, main: ColorItem, header: ColorItem, sidebar: ColorItem) {
        this.name = name
        this.main = main
        this.header = header
        this.sidebar = sidebar

    }
}