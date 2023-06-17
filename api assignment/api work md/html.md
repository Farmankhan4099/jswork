<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>api assignment</title>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"
    />
    <link rel="stylesheet" href="css/style.css" />
  </head>
  <body>
    <div class="container">
      <div class="main mt-4 mx-auto">
        <div class="mb-4">
          <input
            class="input"
            type="text"
            placeholder="Please Enter Country Name"
            id="countryDetail"
          />
          <button
            class="btn"
            type="button"
            id="countryDetailBtn"
            onclick="countrySearch()"
          >
            Submit
          </button>
        </div>
        <div class="text-center" style="display: none" id="countryName">
          <div class="img-main mx-auto rounded-circle">
            <img src="" class="rounded-circle" id="countryImg" alt="" />
          </div>

          <table class="table table-hover table-dark">
            <tr>
              <td>Capital Name</td>
              <td id="capital">capital name</td>
            </tr>
            <tr>
              <td>Country Population</td>
              <td id="population">population</td>
            </tr>
            <tr>
              <td>Country Languages</td>
              <td id="languages">languages</td>
            </tr>
            <tr>
              <td>Country Independent</td>
              <td id="independent">independent</td>
            </tr>
            <tr>
              <td>Country Currencies</td>
              <td id="currencies">currencies</td>
            </tr>
          </table>
        </div>
      </div>
    </div>

    <script src="js/script.js"></script>

  </body>
</html>
