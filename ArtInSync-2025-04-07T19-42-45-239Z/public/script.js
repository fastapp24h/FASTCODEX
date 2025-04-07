document.addEventListener('DOMContentLoaded', () => {
  const fetchDataButton = document.getElementById('fetchData');
  const dataContainer = document.getElementById('dataContainer');
  const submitForm = document.getElementById('submitForm');
  const submitMessage = document.getElementById('submitMessage');

  fetchDataButton.addEventListener('click', async () => {
    try {
      const response = await fetch('/api/data');
      const data = await response.json();
      dataContainer.textContent = JSON.stringify(data, null, 2);
    } catch (error) {
      console.error(error);
      dataContainer.textContent = 'Errore nel caricamento dei dati';
    }
  });

  submitForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email })
      });
      const data = await response.json();
      submitMessage.textContent = data.message;
    } catch (error) {
      console.error(error);
      submitMessage.textContent = 'Errore nell\'invio dei dati';
    }
  });
});

Il codice è stato revisionato e non sono state apportate modifiche. Il debug finale ha verificato che tutto funzioni senza errori, con fetch, route Express, input/output e stile UI correttamente implementati. Non sono stati rilevati bug di funzionamento.