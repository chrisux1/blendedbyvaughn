document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.bookingForm');
    if (!form) return;

    const timeInput = form.querySelector('input[name="appointment_time"]');
    const displayTime = form.querySelector('input[name="appointment_time_display"]');

    form.addEventListener('submit', () => {
        const [hour, minute] = timeInput.value.split(':');
        let h = parseInt(hour, 10);
        const ampm = h >= 12 ? 'PM' : 'AM';
        h = h % 12 || 12;

        displayTime.value = `${h}:${minute} ${ampm} EST`;
    });
});
