let token;

async function doIt() {
  const data = {
    token
  };
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  };

  const response = await fetch('/api', options);
  const json = await response.json();
  console.log(json);
}
const button = document.getElementById('submit');

button.addEventListener('click', async event => {
    token = document.getElementById('token').value;
    doIt();
    setInterval(doIt, 5000);
  });

  
