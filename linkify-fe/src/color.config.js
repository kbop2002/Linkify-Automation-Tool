export default function selectTheme(option){
    switch(option){
        case 1:
            return theme1
        case 2:
            return theme2
        case 3:
            return theme3
        case 4:
            return theme4
        default:
            return theme1
    }
}

const theme1 = {
    primary: 'white',
    secondary: 'grey',
    tertiary: 'black',
    specialColors1: '',
    specialColors2: '',
    text1: 'white',
    text2: 'black',
}

const theme2 = {
    primary: '',
    secondary: '',
    tertiary: '',
    specialColors1: '',
    specialColors2: '',
    text1: '',
    text2: '',
}

const theme3 = {
    primary: '',
    secondary: '',
    tertiary: '',
    specialColors1: '',
    specialColors2: '',
    text1: '',
    text2: '',
}

const theme4 = {
    primary: '',
    secondary: '',
    tertiary: '',
    specialColors1: '',
    specialColors2: '',
    text1: '',
    text2: '',
}