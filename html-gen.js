


const htmlStr = (data) => {
  return `
  <!doctype html>
  <html lang="en">
    <head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${data.name}</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu" crossorigin="anonymous">
  
    <!-- Optional theme -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap-theme.min.css" integrity="sha384-6pzBo3FDv/PJ8r2KRkGHifhEocL+1X2rVCTTkUfGk7/0pbek5mMa1upzvWbrUbOZ" crossorigin="anonymous">
    </head>
    <body>
      <div class="container">
      <div class="panel panel-primary">
        <div class="panel-heading">
          <h3 class="panel-title">${data.name}</h3>
        </div>
        <div class="panel-body">
          <p>${data.bio}</p>
          <ul>
            <li><a href="https://www.linkedin.com/in/${data.linkedin}" target="_blank">LinkedIn</li>
            <li><a href="https://www.github.com/${data.github}" target="_blank">Github</li>
          </ul>
        </div>
      </div>
    </div>
    </body>
  </html>`;

}

function generateHTML(data) {
  return htmlStr(data);
}

module.exports = generateHTML;