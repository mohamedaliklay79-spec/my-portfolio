
import { Link } from "react-router-dom";
import "./Flavora.css";

const screenshots = [
  {
    title: "Home Page",
    description: "Discover recipes and explore the app.",
    image: "/flavora/home.jpg",
  },
  {
    title: "Login Page",
    description: "The entry screen for users.",
    image: "/flavora/login.jpg",
  },
  {
    title: "Recipe Cards",
    description: "Browse recipes with their images.",
    image: "/flavora/recipe-card.jpg",
  },
  {
    title: "Categories",
    description: "Explore different types of dishes.",
    image: "/flavora/categories.jpg",
  },
  {
    title: "Add Recipe",
    description: "Create a recipe with ingredients and steps.",
    image: "/flavora/add-recipe.jpg",
  },
  {
    title: "My Recipes",
    description: "View recipes you have added.",
    image: "/flavora/my-recipes.jpg",
  },
  {
    title: "My Favorites",
    description: "Keep your favorite recipes in one place.",
    image: "/flavora/favorites.jpg",
  },
];

export default function Flavora() {
  return (
    <main className="flavora-page">
      <nav className="flavora-nav">
        <Link to="/" className="flavora-logo">
          <span className="flavora-logo-icon">F</span>
          Flavora
        </Link>

        <Link to="/" className="flavora-back">
          ← Back to Portfolio
        </Link>
      </nav>

      <section className="flavora-hero">
        <div className="flavora-hero-content">
          <p className="flavora-label">MOBILE APPLICATION · CASE STUDY</p>

          <h1>
            Discover food.
            <br />
            <span>Create something delicious.</span>
          </h1>

          <p className="flavora-description">
            Flavora is a recipe mobile application that helps users discover
            recipes, explore food categories, save favorites, and share their
            own recipes.
          </p>

          <div className="flavora-actions">
            <a
              href="https://github.com/mohamedaliklay79-spec/recipes-app-flavora"
              target="_blank"
              rel="noreferrer"
              className="flavora-button flavora-button-primary"
            >
              View Source Code ↗
            </a>

            <a
              href="#screenshots"
              className="flavora-button flavora-button-secondary"
            >
              View App Screens
            </a>
          </div>

          <div className="flavora-tech">
            <span>React Native</span>
            <span>TypeScript</span>
            <span>Node.js</span>
            <span>MongoDB</span>
          </div>
        </div>

        <div className="flavora-visual">
          <div className="flavora-glow" />

          <div className="flavora-phone">
            <img
              src="/flavora/home.jpg"
              alt="Flavora mobile app home screen"
              className="flavora-phone-screenshot"
            />
          </div>
        </div>
      </section>

      <section className="flavora-overview">
        <div>
          <p className="flavora-label">THE PROJECT</p>
          <h2>Made for people who love food.</h2>
        </div>

        <p>
          Built as a full-stack mobile project, Flavora combines a React Native
          interface with a REST API and a MongoDB database to deliver a
          practical recipe-browsing experience.
        </p>
      </section>

      <section className="flavora-screenshots" id="screenshots">
        <p className="flavora-label">INSIDE THE APP</p>
        <h2>Explore the Flavora experience.</h2>
        <p className="flavora-gallery-description">
          A closer look at the screens and features of my mobile application.
        </p>

        <div className="flavora-screenshot-grid">
          {screenshots.map((screen) => (
            <article className="flavora-screenshot-card" key={screen.title}>
              <div className="flavora-screenshot-image">
                <img src={screen.image} alt={`${screen.title} screenshot`} />
              </div>

              <div className="flavora-screenshot-info">
                <h3>{screen.title}</h3>
                <p>{screen.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="flavora-features" id="features">
        <p className="flavora-label">WHAT YOU CAN DO</p>
        <h2>Features that make cooking easier.</h2>

        <div className="flavora-feature-grid">
          <article className="flavora-feature-card">
            <span>⌕</span>
            <h3>Discover Recipes</h3>
            <p>Browse recipes and find inspiration for your next meal.</p>
          </article>

          <article className="flavora-feature-card">
            <span>♡</span>
            <h3>Save Favorites</h3>
            <p>Keep your favorite recipes together for easy access.</p>
          </article>

          <article className="flavora-feature-card">
            <span>＋</span>
            <h3>Add Recipes</h3>
            <p>Add your own recipes, ingredients, steps, and images.</p>
          </article>

          <article className="flavora-feature-card">
            <span>▦</span>
            <h3>Explore Categories</h3>
            <p>Find dishes organized into useful food categories.</p>
          </article>
        </div>
      </section>

      <section className="flavora-stack">
        <p className="flavora-label">UNDER THE HOOD</p>
        <h2>Technology stack</h2>

        <div className="flavora-stack-list">
          <span>React Native</span>
          <span>TypeScript</span>
          <span>Node.js</span>
          <span>Express.js</span>
          <span>MongoDB</span>
          <span>Cloudinary</span>
        </div>
      </section>

      <footer className="flavora-footer">
        <p>Designed and developed with care.</p>
        <a
          href="https://github.com/mohamedaliklay79-spec/recipes-app-flavora"
          target="_blank"
          rel="noreferrer"
        >
          Explore the repository ↗
        </a>
      </footer>
    </main>
  );
}
