# VISTA - Design Decisions

This document outlines the core decisions, trade-offs, and workflows utilized during the creation of the VISTA frontend concept for the Acdyon Technologies challenge.

### 1. Why did I choose this product and homepage approach over the obvious alternative?

The obvious alternative for a venue-booking product would be a standard ticketing or e-commerce layout that immediately pushes pricing tiers, grids of availability, and aggressive checkout flows. 

Instead, I chose a highly experiential, narrative-driven homepage approach for VISTA. Because the product is an ultra-premium "sensory suite," the homepage itself needed to simulate that premium, immersive experience. By prioritizing scroll-triggered parallax worlds, interactive live-simulated configurators, and dynamic room previews, the design builds emotional investment and demonstrates the value proposition visually. The booking section is presented as a sophisticated "reservation of a custom chamber" rather than a standard cart checkout, which aligns perfectly with a high-end brand identity.

### 2. What trade-off did I make under the time limit, and what would I do with a real week?

**The Trade-off:** 
Given the time constraints and the challenge's focus on crafting a premium homepage experience, I traded backend functionality for frontend "wow factor" and mobile responsiveness. The booking system, experience configurator, and dynamic room previews are entirely client-side. The reservation flow generates dynamic dates and produces a highly polished confirmation animation, but it is intentionally frontend-only. There is no real database, authentication, or payment API attached to this concept.

**With a Real Week:** 
I would evolve this static concept into a full-stack application (e.g., using Next.js, Node/Express, and PostgreSQL). I would implement a robust backend to handle actual real-time slot availability, persist user-created presets from the Experience Configurator, and integrate Stripe for secure checkout. Additionally, I would build out the user dashboard, allowing guests to customize their room's scent, climate, and visuals on their phone before they even arrive at the VISTA center.

### 3. Where did I use AI tools, and what did I personally verify or change afterward?

**AI Usage:** 
I utilized an AI coding assistant extensively to accelerate the development of this project. The AI generated the complex Tailwind CSS layout structures, drafted the Framer Motion scroll-reveal animations, and wrote the boilerplate React state management for the interactive UI components. I did not write the raw code from scratch; instead, I acted as the architect and director.

**Personal Verification and Intervention:** 
While the AI executed the code generation, I rigorously directed the implementation and verified the output:
- **Responsive Architecture:** I recognized that the AI simply shrunk the desktop layout for mobile, which broke the UI. I personally directed a strict 390px responsive audit, instructing the AI to redesign the `RoomExperience` component to decouple absolute-positioned overlays and fix sticky scrolling issues on mobile devices.
- **Brand Alignment:** I audited the AI's initial content and explicitly ordered the removal of generic "star ratings" and cheap pricing tags to enforce the ultra-premium aesthetic.
- **Data Structure:** I enforced a strict separation of concerns, ensuring the AI moved hardcoded environment data out of the UI components and into a dedicated `src/data/` directory.
- **Debugging:** I manually caught and instructed the AI to fix broken (hallucinated) Unsplash image URLs and a Babel parsing error caused by an unmatched `</div>` tag during the mobile refactor.
