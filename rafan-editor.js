// JavaScript for changing background color
const colorPicker = document.getElementById('colorPicker');

colorPicker.addEventListener('change', function() {
    document.body.style.backgroundColor = colorPicker.value;
});