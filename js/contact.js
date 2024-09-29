document.getElementById('contact-form').addEventListener('submit', async function (event) {
    event.preventDefault();

    const formData = new FormData(this);

    const data = {};

    formData.forEach((value, key) => {
        data[key] = value;
    });

    const scriptURL = 'https://script.google.com/macros/s/AKfycbzFJSrT9hkIfFm960_-zDPmxfkzen2OytSncCo_1M6z7qiZM-uZU32489H4X3mIqN24/exec'
    try {
        const response = await fetch(scriptURL, {
            redirect: "follow",
            method: 'POST',
            mode: "no-cors",
            body: new URLSearchParams(data),
        })
    } catch (error) {
        console.log(error)
    } finally {
        const messageBox = document.getElementById('success-message');
        messageBox.classList.remove('hidden');
        messageBox.classList.add('show');

        setTimeout(() => {
            messageBox.classList.remove('show');
            messageBox.classList.add('hidden');
        }, 3000);
    }
});
