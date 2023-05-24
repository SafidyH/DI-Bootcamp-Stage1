const planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];

const moons = [
  { planet: 'Mercury', moon: 'Moon of Mercury' },
  { planet: 'Venus', moon: 'Moon of Venus' },
  { planet: 'Earth', moon: 'Moon of Earth' },
  { planet: 'Mars', moon: 'Moon of Mars' },
  { planet: 'Jupiter', moon: 'Moon of Jupiter' },
  { planet: 'Jupiter', moon: 'Another Moon of Jupiter' },
  { planet: 'Saturn', moon: 'Moon of Saturn' },
  { planet: 'Saturn', moon: 'Another Moon of Saturn' },
  { planet: 'Uranus', moon: 'Moon of Uranus' },
  { planet: 'Neptune', moon: 'Moon of Neptune' },
];

const section = document.querySelector('.listPlanets');

planets.forEach((planet, index) => {
  const planetDiv = document.createElement('div');
  planetDiv.classList.add('planet');
  planetDiv.style.backgroundColor = `hsl(${index * 50}, 70%, 60%)`;
  planetDiv.textContent = planet;
  section.appendChild(planetDiv);

  const planetMoons = moons.filter((moon) => moon.planet === planet);
  planetMoons.forEach((moon) => {
    const moonDiv = document.createElement('div');
    moonDiv.classList.add('moon');
    moonDiv.textContent = moon.moon;
    planetDiv.appendChild(moonDiv);
  });
});