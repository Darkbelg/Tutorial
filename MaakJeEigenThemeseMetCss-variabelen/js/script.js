/**
 * Created by stijn on 05-Jun-17.
 */
document.addEventListener('DOMContentLoaded',function () {
    // Ready to interact with the DOM

    const primarySelector = document.getElementById('primary-theme-color');
    const secondarySelector = document.getElementById('secondary-theme-color');

    updateSelectors(primarySelector,secondarySelector);

    primarySelector.addEventListener('input',updateTheme,false);
    secondarySelector.addEventListener('input',updateTheme,false);
    },false);

function updateSelectors(primaryInput,secondaryInput) {
    //Code from stpe 9 to select variables
    const rootE1=getComputedStyle(document.documentElement);
    const primaryThemeColor = rootE1.getPropertyValue('--theme-primary').trim();
    const secondaryThemeColor = rootE1.getPropertyValue('--theme-secondary').trim();

    primaryInput.value = primaryThemeColor;
    secondaryInput.value = secondaryThemeColor;
}
function updateTheme() {
    const inputName = this.getAttribute('name');
    const newColor = this.value;

    document.documentElement.style.setProperty('--theme-'+inputName, newColor);

    if (inputName === 'primary') {
        const textColor = getContrastYIQ(newColor);
        document.documentElement.style.setProperty('--theme-text', textColor);
    }
}
function getContrastYIQ(hexcolor) {
    const color = hexcolor.substring(1);
    console.log(color);
    const r = parseInt(color.substr(0,2),16);
    console.log(r);
    const g = parseInt(color.substr(2,2),16);
    console.log(g);
    const b = parseInt(color.substr(4,2),16);
    console.log(b);
    const yiq = ((r*299)+(g*587)+(b*114))/1000;
    return (yiq >= 128)?'#000000':'#ffffff';
}