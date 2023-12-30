import { ThemeItem } from "@/classes/ThemeItem"

// export const warble = {
//     header: {
//         hexColor: '#c686f4',
//         red: '198',
//         green: '134',
//         blue: '244',
//         alpha: '1'
//     },
//     main: {
//         hexColor: '#3f86f5',
//         red: '63',
//         green: '134',
//         blue: '245',
//         alpha: '1'
//     },
//     sidebar: {
//         hexColor: '#75f9ad',
//         red: '117',
//         green: '249',
//         blue: '173',
//         alpha: '1'
//     },
// }

export const warble = new ThemeItem('warble', {hex: '#3f86f5', section: 'main'}, {hex: '#c686f4', section: 'header'}, {hex: '#75f9ad', section: 'sidebar'});