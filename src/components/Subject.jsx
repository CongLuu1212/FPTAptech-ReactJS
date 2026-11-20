function Subject({ item }) {
  return (
    <div className="subject-item">
      <img
        src={item.image}
        alt={item.subject}
        className="subject-image"
      />

      <h3>{item.subject}</h3>
    </div>
  );
}

export default Subject;
