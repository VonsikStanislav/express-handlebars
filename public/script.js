document.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll('.form-group input');
    const deleteBtn = document.getElementById('btn-delete');

    if (!deleteBtn) return;

    inputs.forEach(input => {
        input.addEventListener('input', () => {
            deleteBtn.disabled = true;
        });
    });
});