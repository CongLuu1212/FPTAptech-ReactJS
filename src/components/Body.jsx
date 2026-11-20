import objects from "../data/objects.json";
import subjects from "../data/subjects.json";

import Object from "./Object";
import Subject from "./Subject";

function Body() {
  return (
    <main>
      {/* Banner */}
        <section className="banner">
            <img
                src="/image/banner.png"
                alt="FPT Aptech Banner"
            />
        </section>

      {/* Objects */}
      <section className="objects-section">
        <h2>Should Who Learn Programming in FPT Aptech?</h2>

        <div className="objects-list">
          {objects.map((item) => (
            <Object key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* Subjects */}
      <section className="subjects-section">
        <h2>What Is The Course Program?</h2>

        <div className="subjects-list">
          {subjects.map((item) => (
            <Subject key={item.id} item={item} />
          ))}
        </div>

        <div className="course-description">
          {subjects[0].description}
        </div>
      </section>
    </main>
  );
}

export default Body;
