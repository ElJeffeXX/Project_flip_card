// script.js
// Step 1 — Get the Container
const container = document.getElementById('card-container');

// Step 2 — Create the Outer Card Wrapper
const card = document.createElement('div');
card.className = 'card';

// Step 3 — Create the Inner Wrapper
const cardInner = document.createElement('div');
cardInner.className = 'card-inner';

// Step 4 — Create the Front Face Element
const cardFront = document.createElement('div');
cardFront.className = 'card-front';

// Step 5 — Create the Profile Image
const image = document.createElement('img');
image.src = 'avatar.png';
image.alt = 'Profile Picture';

// Step 6 — Create the Name Heading
const name = document.createElement('h2');
name.textContent = 'John Redfield';

// Step 7 — Create the Job Title Paragraph
const job = document.createElement('p');
job.textContent = 'Web Developer';

// Step 8 — Create the "View Details" Button
const flipBtn = document.createElement('button');
flipBtn.textContent = 'View Details';
flipBtn.onclick = function() {
  cardInner.classList.toggle('flipped');
};

// Step 9 — Assemble the Front Face
cardFront.appendChild(image);
cardFront.appendChild(name);
cardFront.appendChild(job);
cardFront.appendChild(flipBtn);

// Step 10 — Create the Back Face Element
const cardBack = document.createElement('div');
cardBack.className = 'card-back';

// Step 11 — Create the Back Heading
const detailsTitle = document.createElement('h2');
detailsTitle.textContent = 'Profile Details';

// Step 12 — Create the Detail Paragraphs
const email = document.createElement('p');
email.textContent = 'Email: john@example.com';
const phone = document.createElement('p');
phone.textContent = 'Phone: (123) 456-7890';
const city = document.createElement('p');
city.textContent = 'City: Phoenix, Arizona';
const hobby = document.createElement('p');
hobby.textContent = 'Hobby: Photography';

// Step 13 — Create the "Go Back" Button
const backBtn = document.createElement('button');
backBtn.textContent = 'Go Back';
backBtn.onclick = function() {
  cardInner.classList.toggle('flipped');
};

// Step 14 — Assemble the Back Face
cardBack.appendChild(detailsTitle);
cardBack.appendChild(email);
cardBack.appendChild(phone);
cardBack.appendChild(city);
cardBack.appendChild(hobby);
cardBack.appendChild(backBtn);

// Step 15 — Attach Both Faces to the Inner Wrapper
cardInner.appendChild(cardFront);
cardInner.appendChild(cardBack);

// Step 16 — Attach the Inner Wrapper to the Card
card.appendChild(cardInner);

// Step 17 — Add the Card to the Page
container.appendChild(card);
