import Hero from "./Hero";
import FeatureList from "./FeatureList";

export default function LandingPage() {
  return (
    <div className="page">
      <main className="card">
        <Hero />
        <FeatureList />
        <footer className="footer">More to come. Follow the build on GitHub.</footer>
      </main>
    </div>
  );
}
