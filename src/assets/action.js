const buttons = document.querySelectorAll('#seleccion button');
const selectedButton = null;

export function selectButton(index) {
    if (selectedButton != null) {
        buttons[selectedButton].classList.remove('bg-red-300');
    }
    buttons[index].classList.add('bg-red-300');
    selectedButton = index;
}