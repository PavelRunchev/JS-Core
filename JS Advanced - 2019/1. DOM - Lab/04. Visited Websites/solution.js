function solve() {
  const allLinks = document.querySelectorAll('.link-1');

  let softUniHref = allLinks[0].querySelector('.link-1 a');
  let googleHref = allLinks[1].querySelector('.link-1 a');
  let youtubeHref = allLinks[2].querySelector('.link-1 a');
  let wikipediaHref = allLinks[3].querySelector('.link-1 a');
  let gmailHref = allLinks[4].querySelector('.link-1 a');
  let stackoverflowHref = allLinks[5].querySelector('.link-1 a');


  softUniHref.addEventListener('click', function(e) {
    e.preventDefault();
    let visit = allLinks[0].querySelector('.link-1 p');
    visit.textContent = incrementVisitSite(visit.textContent);
  });

  googleHref.addEventListener('click', function(e) {
    e.preventDefault();
    let visit = allLinks[1].querySelector('.link-1 p');
    visit.textContent = incrementVisitSite(visit.textContent);
  });

  youtubeHref.addEventListener('click', function(e) {
    e.preventDefault();
    let visit = allLinks[2].querySelector('.link-1 p');
    visit.textContent = incrementVisitSite(visit.textContent);
  });

  wikipediaHref.addEventListener('click', function(e) {
    e.preventDefault();
    let visit = allLinks[3].querySelector('.link-1 p');
    visit.textContent = incrementVisitSite(visit.textContent);
  });

  gmailHref.addEventListener('click', function(e) {
    e.preventDefault();
    let visit = allLinks[4].querySelector('.link-1 p');
    visit.textContent = incrementVisitSite(visit.textContent);
  });

  stackoverflowHref.addEventListener('click', function(e) {
    e.preventDefault();
    let visit = allLinks[5].querySelector('.link-1 p');
    visit.textContent = incrementVisitSite(visit.textContent);
  });
 
  function incrementVisitSite(oldVisit) {
    let oldValue = Number(oldVisit.split(' ')[1]);
    return `visited ${oldValue + 1} times`;
  }
}