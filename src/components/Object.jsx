function Object({ item }) {
  return (
    <div className="object-card">
      <img
        src={item.image}
        alt={item.title}
        className="object-image"
      />

      <h3>{item.title}</h3>

      <p>{item.description}</p>
    </div>
  );
}

export default Object;
