export default function Stats({ numberOfWords, numberOfCharacters }) {
  const statsData = [
    { label: 'Words', value: numberOfWords },
    { label: 'Characters', value: numberOfCharacters },
    { label: 'Instagram', value: 280 },
    { label: 'Facebook', value: 2200 },
  ];

  return (
    <section className="stats">
      {statsData.map((stat, index) => (
        <section key={index} className="stat">
          <span className="stat__number">{stat.value}</span>
          <h2 className="second__heading">{stat.label}</h2>
        </section>
      ))}
    </section>
  );
}
