export function choiseSizeFunc(){
    const inputs = document.querySelectorAll('input[name="size"]')
    const blocks = document.querySelectorAll('.block-switch')
    inputs.forEach((input, index) => {
        input.addEventListener('change', () => {
            blocks.forEach((block, i) => {
                const isChecked = i === index && input.checked;
                block.classList.toggle('none', !isChecked);
            });
        });
    });
}