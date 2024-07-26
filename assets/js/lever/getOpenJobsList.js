function createJobsList(_data, siteLink) {
  var jobListHtml = "<ul>";
  for (i = 0; i < _data.length; i++) {
    for (j = 0; j < _data[i].postings.length; j++) {
      var posting = _data[i].postings[j];
      var title = posting.text;

      jobListHtml += `<li><a href="${siteLink}listing#${posting.id}">${title}</a></li>`;
    }
  }
  jobListHtml += "</ul>";

  $("#jobs-container .jobs-list").append(jobListHtml);
}

function displayJobs(siteLink) {
  url =
    "https://api.lever.co/v0/postings/NJStateOfficeofInnovation?group=team&mode=json";
  //Fetching job postings from Lever's postings API
  $.ajax({
    dataType: "json",
    url: url,
    success: function (data) {
      createJobsList(data, siteLink);
    },
  });
}
