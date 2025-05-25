export default function Stats() {
  // Define stats data in a single array
  const statsData = [
    { label: 'Words', value: 0 },
    { label: 'Characters', value: 0 },
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
