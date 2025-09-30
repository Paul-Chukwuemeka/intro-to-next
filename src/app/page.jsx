// Home page component for the application.
// Renders the main Hero section.
import Hero from "@/components/features/Hero";


export default function Home() {
  // Main functional component for the home page
  return (
    // Container for the home page content
    <div className="font-barlow">
      {/* Render the Hero section */}
      <Hero/>
    </div>
  );
}
