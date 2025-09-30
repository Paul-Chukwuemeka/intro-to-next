// Hero component displays the main hero section of the page.
// It typically contains a headline, description, and call-to-action.
import Header from "../layout/Header"

const Hero = () => {
  // Import necessary dependencies (React, etc.)
  // Main functional component for the hero section
  // Destructure props if needed
  return (
    <div className="w-full h-screen bg-primary-blue border">
      {/* Hero content goes here */}
        <Header/> 
    </div>
  )
}

// Export the Hero component for use in other parts of the app
export default Hero