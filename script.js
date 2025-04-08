document.addEventListener('DOMContentLoaded', function () {
    const otherServiceCheckbox = document.getElementById('other_service');
    const serviceTypeSelect = document.getElementById('service_type');
    const serviceDescription = document.getElementById('service_description');

    // Обработка переключения чекбокса
    otherServiceCheckbox.addEventListener('change', function () {
        if (this.checked) {
            serviceDescription.disabled = false;
            serviceTypeSelect.disabled = true;
        } else {
            serviceDescription.disabled = true;
            serviceTypeSelect.disabled = false;
            serviceDescription.value = ''; // Очистить текстовое поле
        }
    });
});