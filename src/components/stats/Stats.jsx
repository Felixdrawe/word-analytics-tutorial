export default function Stats({ stats }) {
  const { numberOfCharacters, numberOfWords, blueskyCharactersLeft, threadsCharactersLeft } = stats;

  const statsData = [
    { label: 'Words', value: numberOfWords, cssClass: 'stat__number' },
    { label: 'Characters', value: numberOfCharacters, cssClass: 'stat__number' },
    {
      label: 'Bluesky',
      value: blueskyCharactersLeft,
      cssClass: blueskyCharactersLeft < 0 ? 'stat__number stat__number--limit' : 'stat__number',
    },
    {
      label: 'Threads',
      value: threadsCharactersLeft,
      cssClass: threadsCharactersLeft < 0 ? 'stat__number stat__number--limit' : 'stat__number',
    },
  ];

  return (
    <section className="stats">
      {statsData.map((stat, index) => (
        <section key={index} className="stat">
          <span className={stat.cssClass}>{stat.value}</span>
          <h2 className="second__heading">{stat.label}</h2>
        </section>
      ))}
    </section>
  );
}
