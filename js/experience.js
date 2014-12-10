$(document).ready(function() {
  $.getJSON('https://s3-us-west-2.amazonaws.com/s.cdpn.io/104946/alexinfo.json')
  .done(function(data) {
    console.log(data);

    var experienceNode = $('.experience-block'),
    educationNode = $('.education-block');

    if (data) {
      data.experience.forEach(function(el, i) {
        experienceNode.append(
          '<div class="experience-post">' +
          '<h2 class="title">' + el.title + '</h2>' +
          '<h5 class="subtitle">' + el.subtitle + '</h5>' +
          '<h6 class="date">' + el.date + '</h6>' +
          '<p class="description">' + el.description + '</p>' +
          '</div>'
        );
      });

      data.education.forEach(function(el, i) {
        educationNode.append(
          '<div class="experience-post">' +
          '<h2 class="title">' + el.title + '</h2>' +
          '<h5 class="subtitle">' + el.subtitle + '</h5>' +
          '<h6 class="date">' + el.date + '</h6>' +
          '<p class="description">' + el.description + '</p>' +
          '</div>'
        );
      });
    }
  })
  .fail(function(error) {
    console.log(error);
  });
});
