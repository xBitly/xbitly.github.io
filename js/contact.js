document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(this);

    const data = {};

    formData.forEach((value, key) => {
        data[key] = value;
    });

    const scriptURL = 'https://script.google.com/macros/s/AKfycbyM-zMKUReSlNkHLeaDMQGBDb7KDz43F9HhhBD9tFNxOdhwQOB6UtSacIWq2oKbcL88/exec';

    fetch(scriptURL, {
        method: 'POST',
        body: new URLSearchParams(data)
    })
        .then(response => response.json())
        .then(data => {
            if (data.result === 'success') {
                alert('Заявка успешно отправлена!');
            } else {
                alert('Ошибка при отправке заявки');
            }
        })
        .catch(error => {
            alert('Произошла ошибка: ' + error);
        });
});
