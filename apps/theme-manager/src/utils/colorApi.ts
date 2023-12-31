import { ColorItem, ThemeItem } from "@/classes/ThemeItem"

interface IColorApiColorHex {
    value: string
    clean: string
}

interface IColorApiColor {
    hex: IColorApiColorHex
}


interface IColorApiResponse {
    mode: string
    count: number
    colors: Array<IColorApiColor>
}


export const generateTheme = (name: string, primaryColor: string, numColors: number = 3, mode: string = "triad"): Promise<ThemeItem> => {
    return new Promise((resolve, reject) => {
        const cleanColor = primaryColor.replace("#", "");
        const url = `https://www.thecolorapi.com/scheme?hex=${cleanColor}&mode=${mode}&count=${numColors}`;

        fetch(url)
            .then((response) => response.json())
            .then((jsonResponse) => jsonResponse as IColorApiResponse)
            .then((response) => response.colors.map((c, i) => new ColorItem(c.hex.value, i === 0 ? 'header' : i === 1 ? 'sidebar' : 'main')))
            .then((colors: ColorItem[]) => {
                let main = colors.filter((c: ColorItem) => c.section === 'main')[0];
                let header = colors.filter((c: ColorItem) => c.section === 'header')[0];
                let sidebar = colors.filter((c: ColorItem) => c.section === 'sidebar')[0];
                return new ThemeItem(name, main, header, sidebar);
            })
            .then((theme) => resolve(theme))
            .catch((error) => reject(error));

    })




    // https://www.thecolorapi.com/scheme?hex=24B1E0&mode=triad&count=6
}