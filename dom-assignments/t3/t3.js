function placeInfoInDocument() {
  document.getElementById('target').innerHTML = '';
  const ul = document.createElement('ul');

  const browser = createListElement();
  browser.innerText = `Browser: ${navigator.userAgent})`;

  const operatingSystem = createListElement();
  operatingSystem.innerText = `Operating system: ${navigator.platform}`;

  const screenWidthHeight = createListElement();
  screenWidthHeight.innerText = `Screen width and height: ${screen.width} x ${screen.height}`;

  const browserScreenSpace = createListElement();
  browserScreenSpace.innerText = `Browser Screen Space: ${screen.availWidth} x ${screen.availHeight}`;

  const dateTime = createListElement();

  const date = new Date();
  const dateLocalized = date.toLocaleDateString('fi-FI', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const timeLocalized = date.toLocaleTimeString('fi-FI', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
    timeZone: 'Europe/Helsinki',
  });

  dateTime.innerText = `Date and Time: ${dateLocalized} ${timeLocalized}`;

  ul.appendChild(browser);
  ul.appendChild(operatingSystem);
  ul.appendChild(screenWidthHeight);
  ul.appendChild(browserScreenSpace);
  ul.appendChild(dateTime);


  document.getElementById('target').appendChild(ul);

  function createListElement() {
    return document.createElement('li');
  }
}

placeInfoInDocument();
