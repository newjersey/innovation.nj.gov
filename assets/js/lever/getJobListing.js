function getJobListing(leverID) {
  var url =
    "https://api.lever.co/v0/postings/NJStateOfficeofInnovation/" +
    leverID.replace("#", "");
  console.log(url);
  $.ajax({
    dataType: "json",
    url: url,
    success: function (data) {
      console.log(data);
      var mainHTML = buildJobListing(data);
      document.getElementById("main-content").innerHTML = mainHTML;
    },
  });
}

function buildJobListing(data) {
  var jobListing = `<h1>${data.text}</h1>`;
  if (data.description !== undefined || data.description !== null) {
    jobListing += data.description
      .replaceAll(`<div><b style="font-size: 18px">`, `<h2>`)
      .replaceAll(`</b></div>`, `</h2></div>`)
      .replaceAll(`<div><br></div>`, ``)
      .replaceAll(`<div>`, `<p>`)
      .replaceAll(`</div>`, `</p>`);
  }

  if (data.lists !== undefined || data.lists !== null) {
    for (var i = 0; i <= data.lists.length; i++) {
      var list = data.lists[i];
      if (
        list !== undefined &&
        Object.hasOwn(list, "text") &&
        Object.hasOwn(list, "content")
      ) {
        jobListing += `<h3>${data.lists[i].text}</h3><ul>${data.lists[i].content}</ul>`;
      }
    }
  }

  if (Object.hasOwn(data, "additional")) {
    jobListing += data.additional
      .replaceAll(`<div><b style="font-size: 18px">`, `<h2>`)
      .replaceAll(`</b></div>`, `</h2></div>`)
      .replaceAll(`<div><br></div>`, ``)
      .replaceAll(`<div>`, `<p>`)
      .replaceAll(`</div>`, `</p>`);
  }

  if (Object.hasOwn(data, "applyUrl")) {
    jobListing += `<a class="usa-button" href="${data.applyUrl}">Apply For This Job</a>`;
  }

  return jobListing;
}
