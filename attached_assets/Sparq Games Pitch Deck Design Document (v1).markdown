## **Sparq Games Pitch Deck - Design Document for Replit Agent** 
Version: 1.1 

Date: April 23, 2025 

Goal: Provide detailed instructions for Replit Agent to generate a static HTML pitch deck for Sparq Games, incorporating brand identity, specific content, and visual inspiration. 

**Key Inputs:** 

- **Content:** Pitch\_Deck\_Content.txt (All text must be included) 
- **Brand Guidelines:** Sparq\_Brand\_Guide.pdf (Colors, Fonts, Logos, Archetype: Outlaw) 
- **Logos:** Sparq\_Logos\_Grid.pdf, Logos\_Grid2.pdf 
- **Images:** Headshots\_Grid.pdf, Character\_Images\_Grid.pdf, Support\_Images\_Grid.pdf 
- **Previous Version/Feedback:** Sparq\_Deck v0 (v1.0).pdf, Current\_Sparq\_Deck.pdf, Comprehensive Feedback for Sparq Deck v0 v1.pdf 
- **Inspiration:** INK\_Games\_Deck(for\_reference).pdf 
- **Fonts:** ADAM.CG PRO (Primary Titles), Inter (Body Text - Recommended Standard Sans-Serif), Neodex (Accent Headlines/Callouts - .woff to be provided by user to Agent) 

**Core Requirements:** 

- **Static HTML:** No complex animations or interactive elements (suitable for HTML-to-Figma). 
- **Visual Style:** Energetic, modern, incorporating Sparq branding (Red, Teal, Black/Dark Greys, White, Accents). Brighter and more brand-aligned than v0. Inspired by INK Games deck's layout and energy. 
- **Content Inclusion:** All text from Pitch\_Deck\_Content.txt must be present. Use smaller font sizes where necessary for the designated body font. 
- **Structure:** 33 slides, using titles exactly as listed in Pitch\_Deck\_Content.txt. 
- **Detail:** Instructions must be explicit and unambiguous for AI generation. 
1. **Overall Design Principles** 
1. **Layout:** 
- **Full Screen:** Design slides to utilize screen space effectively. Assume a 16:9 aspect ratio. 
- **Padding:** Apply consistent padding around the edges of each slide (e.g., p-8 or p-12 in Tailwind terms, approx 2rem-3rem). 
- **Grid System:** Use flexible grids (e.g., Tailwind CSS Grid) for organizing content, especially on text-heavy slides or team/advisor slides. 
- **Hierarchy:** Establish clear visual hierarchy using typography, color, and 

  spacing. Titles should be prominent. 

- **White Space:** Use white space (or dark space, given the palette) effectively to avoid clutter, even on dense slides. 
- **Static:** Avoid animations, transitions, or interactive elements like hover effects (beyond basic link styling). 
2. **Color Palette (from Brand Guide):** 
- **Primary:** 
- Outlaw Red: #EB0028 (Use for key highlights, accents, icons, some backgrounds) 
- Grit Teal: #00A19C (Use for secondary highlights, accents, data viz, some backgrounds) 
- **Supporting (Backgrounds/Text):** 
- Carbon: #2B2842 (Primary dark background) 
- Graphite: #404BF2 (Slightly lighter dark background/element) - *Use sparingly, may clash.* 
- Steel: #1E1E24 (Alternative dark background, very dark) 
- White: #FFFFFF (Primary text color on dark backgrounds, some light backgrounds/elements) 
- **Accent:** 
- Victory Gold: #FFD700 (Use sparingly for emphasis, e.g., key numbers, highlights) 
- Cyber Teal: #C0F2EA (Lighter teal for accents, gradients) 
- Rebel Pink: #FF3864 (Use very sparingly for specific callouts, potentially data viz) 
- **Gradients:** Use subtle gradients (e.g., Outlaw Red to Carbon, Grit Teal to Carbon, Carbon to Steel) for backgrounds or container elements to add depth, inspired by INK deck. 
3. **Typography:** *(UPDATED SECTION)* 
- **Primary Title Font:** ADAM.CG PRO (Ensure font is loaded/available) 
  - Usage: Main slide titles. 
  - Style: Bold, Uppercase. 
  - Color: Primarily White (#FFFFFF) on dark backgrounds. Occasionally Outlaw Red (#EB0028) or Grit Teal (#00A19C) for emphasis. 
- **Body Text Font:** Inter (Recommended standard sans-serif - ensure loaded via CDN or similar) 
- Usage: All paragraphs, lists, descriptions, captions, labels, disclaimer text. 
- Style: Regular weight. 
- Color: Primarily White (#FFFFFF) or a very light grey (e.g., #E0E0E0) on dark backgrounds for readability. Carbon (#2B2842) on light backgrounds. 
- Size: Adjust dynamically to fit content. Start with a base (e.g., 16px-18px) and reduce (down to 12px-14px if absolutely necessary) for dense slides. Ensure legibility. 
- **Accent Font:** Neodex (.woff file to be provided by user) 
  - Usage: *Use sparingly* for specific secondary headlines, subheadings, impactful quotes (like Slides 17 & 26), or large data callouts where its unique style adds visual interest without compromising readability of dense information. **Do not use for paragraphs or long lists.** 
  - Style: Regular weight (as provided). 
  - Color: White (#FFFFFF), Outlaw Red (#EB0028), Grit Teal (#00A19C), or Victory Gold (#FFD700) depending on context and desired emphasis. 
- **Hierarchy Sizes (Examples - adjust as needed):** 
- Main Title (ADAM.CG PRO): 48px - 60px 
- Subtitle / Accent Headline (Neodex or ADAM.CG PRO): 24px - 36px 
- Section Head (ADAM.CG PRO or Neodex): 20px - 24px 
- Body Text (Inter): 14px - 18px (reduce only if necessary) 
- Quotes (Neodex or Inter): 24px - 48px (depending on length and style) 
- Captions/Labels (Inter): 12px - 14px 
- **Line Spacing:** Use appropriate line spacing for the chosen font (e.g., leading-relaxed for Inter body text, potentially tighter like leading-snug for dense lists/captions). 
4. **Logos:** 
   1. **Primary:** Use Sparq\_Skull\_Wordmark\_Tagline(Red).png or variations (Black, White) as specified per slide. 
   1. **Mark:** Use Logo\_Skull(Red).png (or White/Black) for icons, bullet points, and footers. 
   1. **Footer:** Place Logo\_Skull(Red).png (small, e.g., 24px height) in the bottom-left corner of *every* slide (except potentially full-bleed image slides like Slide 31). Ensure contrast. 
   1. **Partner/Other Logos:** Use logos from Logos\_Grid2.pdf (e.g., NCAA, CLC, media outlets, partner companies) where relevant, ensuring clarity and proper sizing. 
4. **Icons:** 
- **Bullet Points:** Consistently use Logo\_Skull(Red).png (small size, e.g., 16px) as per feedback, unless specified otherwise (e.g., Crown U icon on Slide 30). Ensure alignment with text. 
- **Other Icons:** Use simple, clean icons (potentially line icons matching the brand style) if needed to represent concepts (e.g., Web1/2/3, revenue streams). Keep style consistent. 
6. **Imagery:** 
- Use specified images from Headshots\_Grid.pdf, Character\_Images\_Grid.pdf, Support\_Images\_Grid.pdf. Reference specific filenames when possible or describe the image clearly. 
- Ensure images are high-resolution. 
- Integrate images dynamically, sometimes as background elements (with overlay/opacity), sometimes as foreground content blocks. Draw inspiration from INK deck's use of imagery. 
- Use consistent styling for headshots (e.g., circular masks, consistent size in grids). 
7. **Data Visualization:** 
- Redesign charts (Slides 5, 7, 24) based on Comprehensive Feedback. 
- Style: Clean, modern, professional. Use Sparq brand colors (Outlaw Red, Grit Teal, Victory Gold, Rebel Pink, Cyber Teal for different series). 
- Labels: Ensure clear labels, axes, legends, and direct data labeling for clarity. Use 'Inter' font for labels. 
- Accuracy: Represent data accurately and proportionally. 
8. **Containers/Dividers:** 
- Use subtle containers (boxes with slight background color difference, e.g., Graphite on Carbon, or borders in Outlaw Red/Grit Teal) to group related content, especially on dense slides. 
- Use thin lines (Outlaw Red or Grit Teal) as dividers where appropriate. 
2. **Slide-by-Slide Design Instructions** 

**(Note:** Assumes a base dark background like Carbon (#2B2842) unless otherwise specified. Text is White (#FFFFFF) unless specified. Default bullet icon is Logo\_Skull(Red).png unless specified. **Apply updated typography rules from Section I.3 to all slides.**) 

**Slide 1: SPARQ** 

- **Objective:** Title slide, introduce Sparq Games and its core premise. 
- **Content Source:** Pitch\_Deck\_Content.txt - Slide 1 
- **Layout:** Centered, high-impact. 
- **Background:** Gradient from Outlaw Red (#EB0028) (top) to Carbon (#2B2842) (bottom). Consider adding a very subtle, large, low-opacity character image (e.g., Hero1.png from Character\_Images\_Grid.pdf at 10% opacity) blended into the background. 
- **Logo:** Prominently feature Sparq\_Skull\_Wordmark\_Tagline(Red).png in the center, large size (e.g., 30-40% of slide width). Ensure tagline "BREAK FREE PLAY 

  FUTURE" is readable below it (Use Inter font for tagline). 

- **Text:** Place the introductory paragraph below the logo/tagline. 
  - Font: Inter, Medium size (e.g., 18px), White, centered. Keep line length reasonable. 
- **Additional Logos:** Place the NCAA\_Logo2.png (from Logos\_Grid2.pdf) subtly, perhaps bottom-right corner, moderate size (e.g., 60px height), ensuring contrast. 
- **Footer:** Sparq Skull logo (Red), bottom-left. 
- **Year:** Add "2025" subtly, perhaps bottom-right near NCAA logo, small Inter font, White. 

**Slide 2: Mission** 

- **Objective:** State the company's mission and core values. 
- **Content Source:** Pitch\_Deck\_Content.txt - Slide 2 
- **Layout:** Two main sections: Mission (top), Core Values (bottom). Use ample spacing. 
- **Background:** Solid Carbon (#2B2842) or a very subtle dark texture/gradient. 
- **Title:** "Mission" - ADAM.CG PRO, Large (e.g., 48px), Uppercase, Grit Teal (#00A19C), centered or top-left aligned. 
- **Mission Text:** Paragraphs below the title. 
  - Font: Inter, Medium size (e.g., 18px), White. Use increased line spacing for readability. Left-aligned. 
- **Core Values Section:** 
- Subtitle: "Our Core Values" - ADAM.CG PRO or Neodex, Medium-Large (e.g., 30px), White or Grit Teal, centered above the values. 
- Layout: Use a 2x2 grid for the four values ("People-Centric", "Unleash Creativity", "Enrich Lives", "Fun Above All"). 
- Container: Each value in a subtle container (e.g., slightly lighter background like Graphite or a thin Grit Teal border). 
- Icon: Place Logo\_Skull(Red).png (medium size, e.g., 24px) above each value title within its container. 
- Value Title: ADAM.CG PRO or Neodex, Medium (e.g., 20px), Outlaw Red (#EB0028). 
- Value Text: Inter, Small-Medium (e.g., 14-16px), White. Use bullet points (Logo\_Skull(Red).png icon, small) for the sub-points within "People-Centric". Ensure all text fits. 
- **Footer Logo:** Logo\_Skull(Red).png, bottom-left. 

**Slide 3: Web3 Simplified** 

- **Objective:** Explain Web1, Web2, and Web3 concepts clearly. 
- **Content Source:** Pitch\_Deck\_Content.txt - Slide 3 
- **Layout:** Top section for definitions, bottom section for market context. 
- **Background:** Solid Carbon (#2B2842). 
- **Title:** "Web3 Simplified" - ADAM.CG PRO, Large, Uppercase, Grit Teal (#00A19C), top-left. 
- **Web1/2/3 Comparison:** 
- Layout: Use a 3-column layout. 
- Headings: "Web 1", "Web 2", "Web 3" - ADAM.CG PRO or Neodex, Medium, White or Grit Teal. 
- Icons: Add simple, distinct line icons above each heading representing "Read", "Read-Write", "Read-Write-Own". Use Grit Teal or Outlaw Red for icons. 
- Description: Inter, Small-Medium, White. Use bullet points (Logo\_Skull(Red).png) for sub-points. Ensure text fits within columns. 
- Visual Flow: Add subtle arrows (e.g., ->) in Outlaw Red between columns to show progression. 
- **Market Context Section (Bottom):** 
- Text: Inter, Small-Medium, White. Left-aligned. Ensure sufficient spacing from the columns above. Use bold (Inter Bold) for emphasis on "fundamental economic shift". 
- **Footer Logo:** Logo\_Skull(Red).png, bottom-left. 

**Slide 4: The Problem** 

- **Objective:** Define the Web3 adoption gap problem. 
- **Content Source:** Pitch\_Deck\_Content.txt - Slide 4 
- **Layout:** Two-column layout. Left: Text description. Right: Chart/Visualization. 
- **Background:** Solid Carbon (#2B2842) or a gradient suggesting a challenge (e.g., Carbon to Steel). 
- **Title:** "The Problem" - ADAM.CG PRO, Large, Uppercase, Outlaw Red (#EB0028), top-left. 
- **Left Column (Text):** 
- Main Paragraph: Inter, Medium, White. 
- Bullet Points: Use Logo\_Skull(Red).png icons. Inter, Small-Medium, White. Ensure text fits. 
- **Right Column (Chart):** 
- Redesign Graph: Create a professional market adoption curve (S-curve). 
- Type: Line or Area chart showing penetration percentage over time/phases (Innovators, Early Adopters, Early Majority, Late Majority, Laggards). 
- Data Representation: Clearly mark the current ~5% penetration within the "Early Adopters" phase. Visually highlight the "gap" or "chasm" before the "Early Majority". Indicate the relative market sizes ($5.7B, $31B, $77B - ensure these are represented proportionally or clearly labeled). 
- Labels: Clear axis labels (e.g., "Market Penetration (%)", "Adoption Phase"). Use Inter, Small, White. Add data labels directly on the chart. 
- Colors: Use Sparq colors (e.g., Grit Teal for achieved penetration, Outlaw Red for the gap/challenge, Victory Gold for potential). 
- Title: Add a clear title above the chart, e.g., "Web3 Adoption Gap" - ADAM.CG PRO or Neodex, Medium, White. 
- Annotation: Add a small text box near the gap pointing to it, e.g., "Critical Challenge: Crossing the Chasm". Inter, Small, Outlaw Red. 
- **Footer Logo:** Logo\_Skull(Red).png, bottom-left. 

**Slide 5: Web3 Games Failed to Match Web2 Mobile Game Success** 

- **Objective:** Detail the reasons for Web3 game failures. 
- **Content Source:** Pitch\_Deck\_Content.txt - Slide 5 
- **Layout:** Text-heavy slide. Use a two-column layout or a well-structured single column with clear headings to improve scannability. Ensure all text fits. 
- **Background:** Solid Carbon (#2B2842). Consider a subtle background element suggesting failure or barriers (e.g., cracked texture overlay, low opacity). 
- **Title:** "Web3 Games Failed to Match Web2 Mobile Game Success" - ADAM.CG PRO, Large, Uppercase, Outlaw Red (#EB0028), top-left. Shorten if needed for space, e.g., "Why Web3 Games Stumbled". 
- **Content:** 
- Structure: Group the bullet points under clear subheadings (e.g., "High Costs", "Speculation Focus", "Poor UX", "Technical Issues", etc.) derived from the content. 
- Subheadings: ADAM.CG PRO or Neodex, Medium, Grit Teal (#00A19C). 
- Bullet Points: Use Logo\_Skull(Red).png icons (small). Inter, Small (reduce size, e.g., 14px, potentially 12px if needed), White. Use tight line spacing. 
- Layout Strategy: If two-column, balance the points. If single-column, use clear visual separation (spacing, thin lines in Grit Teal) between subheadings. 
- **Footer Logo:** Logo\_Skull(Red).png, bottom-left. 

**Slide 6: By Contrast, Mobile Gaming is Recession Proof** 

- **Objective:** Highlight the resilience and size of the mobile gaming market. 
- **Content Source:** Pitch\_Deck\_Content.txt - Slide 6 
- **Layout:** Combination of text and data visualization. Maybe text left, chart right, or chart top, text bottom. 
- **Background:** Solid Carbon (#2B2842) or a gradient suggesting growth/stability 

  (e.g., Carbon to Grit Teal). 

- **Title:** "By Contrast, Mobile Gaming is Recession Proof" - ADAM.CG PRO, Large, Uppercase, Grit Teal (#00A19C), top-left. 
- **Chart:** 
- Redesign Graph: Show mobile gaming market growth over time, potentially highlighting recession periods (e.g., 2008, 2020). 
- Type: Line chart showing revenue or user growth. 
- Data Representation: Clearly label axes (Years, Revenue/Users). Add annotations or shaded areas for recession periods to show continued growth. Highlight key stats like "2X size of music/film", "53% of gaming", "18.2% CAGR". 
- Labels: Inter, Small, White. 
- Colors: Use Sparq colors (Grit Teal for growth line, Victory Gold for highlights). 
- Title: Add a clear title above the chart, e.g., "Mobile Gaming: Consistent 

  Growth Through Economic Cycles" - ADAM.CG PRO or Neodex, Medium, White. 

- **Text Content:** 
- Place text strategically around or below the chart. 
- Font: Inter, Small-Medium, White. Use bullet points (Logo\_Skull(Red).png) for the examples (2008, 2020, 2024). 
- Source Citation: Include "Source: Sensor Tower, December 2025 Research Paper" in very small Inter font, bottom of the text section. 
- **Footer Logo:** Logo\_Skull(Red).png, bottom-left. 

**Slide 7: COLLEGE SPORTS:** 

- **Objective:** Emphasize the market size and potential of college sports IP. 
- **Content Source:** Pitch\_Deck\_Content.txt - Slide 7 
- **Layout:** Multi-section layout. Title, Revenue Comparison, Pent Up Demand, Unique Market Position. 
- **Background:** Use a relevant, high-quality background image like Fans\_Background.png or Huddle\_Background.png (from Support\_Images\_Grid.pdf) with a dark overlay (e.g., Carbon at 70-80% opacity) to ensure text readability. 
- **Title:** "COLLEGE SPORTS: The Multi-Billion Dollar IP Powerhouse Feeding Sparq's Games Slate" - ADAM.CG PRO, Large, Uppercase, Victory Gold (#FFD700) or White, centered or top-left. 
- **Revenue Comparison:** 
- Present the league revenue data clearly. Use a simple bar chart or a visually enhanced table. 
- Highlight NCAA's position near the top. Use Grit Teal or Victory Gold for NCAA 

  bar/row. 

- Include league logos (NFL, MLB, NBA, etc. - find generic versions if not in provided assets) subtly next to names. 
- Use Inter, Small-Medium, White for labels and numbers. Ensure currency symbols ($) and "Billions" are clear. 
- **Pent Up Demand Section:** 
- Heading: "PENT UP DEMAND" - ADAM.CG PRO or Neodex, Medium, Outlaw Red (#EB0028). 
- Bullet Points: Use Logo\_Skull(Red).png. Inter, Small-Medium, White. Highlight key stats (10+ years, 65%, 70%, $500M) using bold or Victory Gold. 
- **Unique Market Position Section:** 
- Heading: "UNIQUE MARKET POSITION" - ADAM.CG PRO or Neodex, Medium, Outlaw Red (#EB0028). 
- Text: Inter, Small-Medium, White. 
- **Source Citation:** Include sources (Sports Media Watch, Statistica) in very small Inter font, bottom-right. 
- **Footer Logo:** Logo\_Skull(Red).png, bottom-left. 

**Slide 8: Sparq Gaming Ecosystem™** 

- **Objective:** Explain Sparq's model of bridging Web2 gamers to Web3 rewards. 
- **Content Source:** Pitch\_Deck\_Content.txt - Slide 8 
- **Layout:** Title, descriptive text, visual representation of the ecosystem, NCAA logo. Address feedback to avoid overlap. 
- **Background:** Solid Carbon (#2B2842) or a subtle tech/network pattern. 
- **Title:** "Sparq Gaming Ecosystem™" - ADAM.CG PRO, Large, Uppercase, Grit Teal (#00A19C), top-left. Add subtitle: "Crossing the Chasm to Web3" - Inter, Medium, White. 
- **Text Description:** Place the main paragraphs below the title. Inter, Medium, White. Use bullet points (Logo\_Skull(Red).png) for the key actions (Building user bases, Seamlessly transitioning, Creating value). 
- **Ecosystem Visual:** 
- Redesign: Create a *clear, non-overlapping* visual flow diagram. 
- Elements: Represent "Web2 Games (Mass Appeal)", "Sparq Locker Room™ (Bridge)", "Web3 Rewards/Collectibles". Use simple shapes/containers. 
- Flow: Use clear arrows (e.g., in Outlaw Red) showing the transition from Web2 -> Sparq Locker Room -> Web3. 
- Branding: Use Sparq colors and potentially the Skull logo within the elements. 
- Placement: Position this visual distinct from the text, perhaps to the right or below. 
- **NCAA Logo:** Place NCAA\_Logo2.png prominently but balanced within the slide, perhaps near the ecosystem visual. 
- **Footer Logo:** Logo\_Skull(Red).png, bottom-left. 

**Slide 9: The Playbook** 

- **Objective:** Outline Sparq's 4-step strategy for mass adoption. 
- **Content Source:** Pitch\_Deck\_Content.txt - Slide 9 
- **Layout:** Visually represent a 4-step process. Use numbered steps or a clear flow. Inspired by INK's structured layouts. 
- **Background:** Gradient background, e.g., Grit Teal to Carbon, suggesting a process flow. 
- **Title:** "The Playbook" - ADAM.CG PRO, Large, Uppercase, White or Victory Gold, top-center. Add subtitle: "Leveraging Web2 Reach for Web3 Adoption" - Inter, Medium, White, centered below title. 
- **Playbook Steps:** 
- Layout: Use four distinct sections/boxes arranged horizontally or in a 2x2 grid. Number them 1-4. 
- Container: Each step in a container with a thin Outlaw Red border or a slightly different background shade. 
- Icons: Add a simple icon representing each step (e.g., Joystick for Games, Funnel/Magnet for Acquisition, Bridge/Link for Integration, Network/Community for Virality). Use Grit Teal or White for icons. 
- Step Title (e.g., "Develop Addictive Web2 AAA Sports Games"): ADAM.CG PRO or Neodex, Medium, Grit Teal (#00A19C). 
- Step Description: Inter, Small-Medium, White. Use bullet points (Logo\_Skull(Red).png, small) for sub-points. Ensure text fits within containers. 
- **Logo:** Place Sparq\_Skull\_Wordmark\_Tagline(Red).png small, bottom-center or corner. 
- **Footer Logo:** Logo\_Skull(Red).png, bottom-left. 

**Slide 10: Use AI Everywhere to Be Fast and Ultra-Efficient** 

- **Objective:** Showcase the extensive use of AI in Sparq's operations. 
- **Content Source:** Pitch\_Deck\_Content.txt - Slide 10 
- **Layout:** Dynamic visual representation of AI applications. Avoid a simple list. 
- **Background:** Tech-themed background. Subtle circuit pattern, abstract AI visualization, or a gradient like Carbon to Grit Teal. 
- **Title:** "Use AI Everywhere to Be Fast and Ultra-Efficient" - ADAM.CG PRO, Large, Uppercase, Grit Teal (#00A19C), top-center. 
- **AI Applications:** 
- Layout: Arrange the list items (Game Genre Selection, Ad Monetization, etc.) in a circular, hexagonal, or hub-and-spoke layout around a central AI core visual (e.g., a stylized brain or network icon in Outlaw Red). 
- Icons: Use Logo\_Skull(Red).png (small) next to each item, or find simple line icons representing each application area (e.g., controller for Game Dev, chart for Ad Monetization). 
- Text: Inter, Medium, White. Keep text concise. 
- **Connecting Lines:** Use thin lines in Grit Teal or Outlaw Red connecting the central AI core to each application point. 
- **Footer Logo:** Logo\_Skull(Red).png, bottom-left. 

**Slide 11: Media Coverage** 

- **Objective:** Display positive media mentions and quotes. (Note: Content file says Slide 11, Feedback doc says Slide 12 - following content file order). 
- **Content Source:** Pitch\_Deck\_Content.txt - Slide 11 
- **Layout:** Feature the media quotes and article screenshots prominently. Address feedback regarding title and layout. 
- **Background:** Clean, neutral background like Carbon (#2B2842) or a very light grey #E0E0E0 to make clippings stand out. If light background, use dark text. Assume dark background for now. 
- **Title:** "Media Coverage" (Corrected from content file) - ADAM.CG PRO, Large, Uppercase, Grit Teal (#00A19C), top-left. 
- **Media Clippings:** 
- Layout: Use a 3-column layout for CoinTrust, VentureBeat, Mashable. 
- Screenshots: Use the provided article screenshots (Cointrust\_Article.png, Venture\_Beat\_Article.png, Mashable\_Article.png from Support\_Images\_Grid.pdf). Place them prominently within each column. 
- Containers: Place each screenshot within a container with a subtle gradient background (e.g., Carbon fading to Graphite) and a thin Outlaw Red or Grit Teal border, as per feedback. 
- Quotes: Place the corresponding quote below each screenshot. Use Inter, Medium, Italic, White. 
- Attribution: Place the publication name (e.g., "- CoinTrust") below the quote. Inter, Small, Grit Teal. 
- Logos (Optional): If using Cointrust\_Logo.png, Venture\_Beat\_Logo.png, Mashable\_Logo.png (from Logos\_Grid2.pdf), place them small and subtly within each container, perhaps bottom-right corner. 
- **Footer Logo:** Logo\_Skull(Red).png, bottom-left. 

**Slide 12: Go To Market** 

- **Objective:** Outline the go-to-market strategy components. (Note: Content file says Slide 12, Feedback doc says Slide 13 - following content file order). 
- **Content Source:** Pitch\_Deck\_Content.txt - Slide 12 
- **Layout:** Structured layout, possibly using columns or distinct blocks for each strategy component. Inspired by INK deck's organized information display. 
- **Background:** Solid Carbon (#2B2842) or a background suggesting strategy/direction (e.g., subtle arrows, network lines). 
- **Title:** "Go To Market" - ADAM.CG PRO, Large, Uppercase, Grit Teal (#00A19C), top-left. 
- **Strategy Components:** 
- Layout: Arrange the 6 points (Premium Sports IP, Team + AI, Proprietary Engine, Sparq Locker Room, Community Growth, Tokenomics) in a 2x3 grid or two columns. 
- Containers: Place each point in a subtle container (light border or background shade). 
- Icons: Use Logo\_Skull(Red).png before each title, or find simple representative icons (Trophy for IP, Brain+Team for Team+AI, Engine/Cog for Engine, Locker for Locker Room, People Network for Community, Token for Tokenomics). Use Outlaw Red or Grit Teal for icons. 
- Title: ADAM.CG PRO or Neodex, Medium, Grit Teal. 
- Description: Inter, Small-Medium, White. Ensure text fits. 
- **Visual Element:** Consider adding a simple visual representation of the Sparq Locker Room concept connecting Web2 and Web3 elements, placed subtly. 
- **Footer Logo:** Logo\_Skull(Red).png, bottom-left. 

**Slide 13: Introducing the Sparq Locker Room™** 

- **Objective:** Detail the Sparq Locker Room concept and its benefits. (Note: Content file says Slide 13, Feedback doc doesn't explicitly mention it by number but discusses the concept). 
- **Content Source:** Pitch\_Deck\_Content.txt - Slide 13 
- **Layout:** Two columns. Left: Explaining the concept ("Web3 Without the Friction"). Right: Quote and potentially a visual. 
- **Background:** Use Locker\_Room\_Background.png (from Support\_Images\_Grid.pdf) if suitable, with a dark overlay for text readability. Otherwise, use a Carbon to Grit Teal gradient. 
- **Title:** "Introducing the Sparq Locker Room™" - ADAM.CG PRO, Large, Uppercase, Grit Teal (#00A19C), top-left. Subtitle: "The Seamless Bridge to Web3" - Inter, Medium, White. 
- **Left Column (Concept):** 
- Heading: "Web3 Without the Friction" - ADAM.CG PRO or Neodex, Medium, Outlaw Red. 
- Text: Main paragraphs explaining the platform. Inter, Medium, White. 
- Bullet Points: Use Logo\_Skull(Red).png. List the benefits (Earn rewards, Own collectibles, Participate in promotions, Turn rewards into FIAT). Inter, Small-Medium, White. 
- **Right Column (Quote & Visual):** 
- Quote: Present the quote from Dan Algattas attractively. Use Inter, Medium, Italic, White. Use large stylized quotation marks in Grit Teal. 
- Attribution: "Dan 'DA' Algattas, Director – Company Strategy" - Inter, Small, White. Include his headshot (DanielA\_(Headshot).png from Headshots\_Grid.pdf) small next to the attribution. 
- Visual (Optional): If space allows, add a conceptual visual of the Locker Room interface or benefits. 
- **Footer Logo:** Logo\_Skull(Red).png, bottom-left. 

**Slide 14: Market Opportunity** 

- **Objective:** Showcase the large and growing market sizes Sparq operates within. (Note: Content file says Slide 14, Feedback doc says Slide 14). 
- **Content Source:** Pitch\_Deck\_Content.txt - Slide 14 
- **Layout:** Data-heavy slide. Organize market stats clearly. Use a multi-column layout (e.g., 2 or 3 columns) or distinct blocks. Ensure all text fits. 
- **Background:** Solid Carbon (#2B2842). Consider using the Double\_Unicorn(slide14\_Market\_Opportunity).png (from Support\_Images\_Grid.pdf) subtly integrated, perhaps faded in a corner or as a watermark, if it fits the aesthetic. 
- **Title:** "Market Opportunity" - ADAM.CG PRO, Large, Uppercase, Victory Gold (#FFD700), top-left. Subtitle: "Intersection of High-Growth Markets" - Inter, Medium, White. 
- **Market Stats:** 
- Layout: Group stats by market (Web3, AI, Mobile Games, NIL, Sports Analytics, College Fans). Use clear headings for each. 
- Headings: ADAM.CG PRO or Neodex, Medium, Grit Teal. 
- Stats: Inter, Small-Medium, White. 
- Highlighting: Make key numbers ($229B, $1.3T, $775.7B, CAGR percentages) stand out using bold, larger size, or Victory Gold color. 
- Icons: Use Logo\_Skull(Red).png for bullet points listing fan stats. Consider adding small icons representing each market (e.g., Globe/Blocks for Web3, 

  Brain for AI, Phone for Mobile, Graduation Cap for NIL). 

- **Visual Element:** A simple Venn diagram or overlapping circles visual showing the intersection of Gaming, Sports, Web3, and AI could be effective if space permits. Use Sparq colors. 
- **Footer Logo:** Logo\_Skull(Red).png, bottom-left. 

**Slide 15: Business Model** 

- **Objective:** Outline Sparq's diverse revenue streams. (Note: Content file says Slide 15, Feedback doc says Slide 15). 
- **Content Source:** Pitch\_Deck\_Content.txt - Slide 15 
- **Layout:** Structured layout to present revenue streams clearly. Use columns or a flow diagram. Ensure all text fits. 
- **Background:** Solid Carbon (#2B2842). 
- **Title:** "Business Model" - ADAM.CG PRO, Large, Uppercase, Grit Teal (#00A19C), top-left. Subtitle: "Diversified Revenue Across Web2 & Web3" - Inter, Medium, White. 
- **Revenue Streams:** 
- Layout: Use two main columns: "Web2 Gaming" and "Web3 / Platform". Or use a central "Sparq Ecosystem" element with streams flowing from it. 
- Headings: ADAM.CG PRO or Neodex, Medium, Outlaw Red or Grit Teal. 
- Bullet Points: Use Logo\_Skull(Red).png. List the specific streams under each heading (Microtransactions, Ad Sales, etc.). Inter, Small-Medium, White. 
- Icons: Add simple icons representing each stream (e.g., Cart for Microtransactions, Play Button for Ads, Token for Web3 Sales, Graph for Data, Chain links for DeFi). Use White or Grit Teal. 
- **Visual Integration:** Create a simple visual showing how Web2 activities feed into Web3 opportunities within the Sparq model. Use arrows and Sparq colors. 
- **Footer Logo:** Logo\_Skull(Red).png, bottom-left. 

**Slide 16: Traction** 

- **Objective:** Highlight key achievements and milestones. (Note: Content file says Slide 16, Feedback doc says Slide 16). 
- **Content Source:** Pitch\_Deck\_Content.txt - Slide 16 
- **Layout:** Dynamic layout emphasizing key numbers and accomplishments. Use columns or a timeline approach. Ensure all text fits. 
- **Background:** Background suggesting momentum, like Background1.jpg or Background2.jpg (from Support\_Images\_Grid.pdf) with a dark overlay, or a Carbon to Outlaw Red gradient. 
- **Title:** "Traction" - ADAM.CG PRO, Large, Uppercase, Victory Gold (#FFD700), top-left. Subtitle: "Mid-Field Momentum" - Inter, Medium, White. 
- **Traction Points:** 
- Layout: Arrange points logically (e.g., Partnerships, Team, Tech, Community, Token). Use distinct blocks or sections. 
- Highlighting Metrics: Make numbers (700+ universities, 190k athletes, 140+ years experience, 35+ titles, 45k game titles data, 41.8K followers, 26K followers, 14+ months work) highly visible. Use ADAM.CG PRO or Neodex (for stylistic numbers), Large size, Victory Gold or Outlaw Red. Add brief descriptive labels below each metric using Inter, Small, White. 
- Bullet Points: For descriptive points, use Logo\_Skull(Red).png. Inter, Small-Medium, White. 
- Logos: Include CLC logo (if available, otherwise text), Sensor Tower logo (if available). 
- Icons: Use icons for Twitter (X) and Discord followers. 
- **Footer Logo:** Logo\_Skull(Red).png, bottom-left. 

**Slide 17: Quote 1** 

- **Objective:** Present the first inspirational quote. (Note: Content file says Slide 17, Feedback doc says Slide 17). 
- **Content Source:** Pitch\_Deck\_Content.txt - Slide 17 (Corrected Quote from Feedback: "Diversity is the art of thinking independently together.") 
- **Layout:** Focused, impactful quote presentation. 
- **Background:** Use the Sparq\_Diversity\_Pyramid(Quote1\_Slide).png (from Support\_Images\_Grid.pdf) as a background element if it fits visually, perhaps faded or positioned to one side. Otherwise, use a clean Carbon background or a subtle gradient. 
- **Quote Text:** "Diversity is the art of thinking independently together." 
  - Font: Neodex (for style) or a clean Serif, Large size (e.g., 36-48px), White or Victory Gold. Centered. 
  - Style: Use large, stylized quotation marks (e.g., in Grit Teal). 
- **Attribution:** "- Malcolm Forbes" 
  - Font: Inter, Medium size, White or Grit Teal, centered below the quote. 
- **Visual Element:** Add Logo\_Skull(Red).png subtly as a watermark or small element in a corner. 
- **Footer Logo:** Logo\_Skull(Red).png, bottom-left. 

**Slide 18: Game Experienced CEO** 

- **Objective:** Showcase Jan Horsfall's background and expertise. (Note: Content file says Slide 18, Feedback doc says Slide 18). 
- **Content Source:** Pitch\_Deck\_Content.txt - Slide 18 
- **Layout:** Professional profile layout. Combine text and images effectively. 
- **Background:** Solid Carbon (#2B2842) or a professional dark gradient. 
- **Title:** "Game Experienced CEO" - ADAM.CG PRO, Large, Uppercase, Grit Teal (#00A19C), top-left. Add Name: "Jan Horsfall" - ADAM.CG PRO or Neodex, Medium-Large, White, below title. 
- **Images:** 
- Main Headshot: Use JanH\_(Headshot).png (from Headshots\_Grid.pdf) prominently, perhaps left-aligned. Apply a clean frame or mask. 
- Supporting Images: Integrate Jan\_Nasdaq (Experienced\_CEO\_Slide).png and Jan\_Hoops (Experienced\_CEO\_Slide).png (from Headshots\_Grid.pdf) smaller, perhaps below the main text or alongside relevant points. 
- LOTRO Images: Integrate Lotro\_Character.png and Lotro\_Logo.png (from Logos\_Grid2.pdf / Support\_Images\_Grid.pdf) subtly when mentioning Turbine Games/LOTRO experience. 
- **Text Content:** 
- Structure: Break down the bio into key achievements or career phases (Valvoline, Lycos, Turbine, etc.). Use paragraphs or bullet points (Logo\_Skull(Red).png). 
- Font: Inter, Small-Medium, White. Ensure readability. 
- Highlighting: Bold key company names (Valvoline, Lycos, Turbine, Warner Bros.) or achievements ($4.5B sale, F2P innovation). 
- **Logos:** Include logos for Valvoline, Lycos, Turbine, Warner Bros., MIT (use generic text/simple logo if actual logos unavailable) next to relevant text sections. 
- **Footer Logo:** Logo\_Skull(Red).png, bottom-left. 

**Slide 19: 140 Years of Game Development Leadership** 

- **Objective:** Introduce key game development leaders: Jeffrey Steefel, Daniel Algattas, Chase Huber. (Note: Content file says Slide 19, Feedback doc says Slide 19). 
- **Content Source:** Pitch\_Deck\_Content.txt - Slide 19 
- **Layout:** Balanced 3-column grid. 
- **Background:** Solid Carbon (#2B2842). 
- **Title:** "140 Years of Game Development Leadership" - ADAM.CG PRO, Large, Uppercase, Grit Teal (#00A19C), centered across the top. 
- **Columns (One for each person):** 
- Headshot: Place headshot at the top of the column (JeffreyS.png, DanielA\_(Headshot).png, ChaseH.png from Headshots\_Grid.pdf). Consistent size and style (e.g., circular mask). 
- Name: ADAM.CG PRO or Neodex, Medium-Large, White, centered below headshot. 
- Title: Inter, Medium, Grit Teal, centered below name. 
- Bio Text: Inter, Small, White. Use concise bullet points (Logo\_Skull(Red).png) for key experience/franchises. Ensure text fits. 
- Logos: Include relevant company/franchise logos mentioned in bios (Sony, Warner Bros., Wizards/Hasbro, Disney, LOTR, D&D, UCLA, CSU, Liberty Mutual, Digitas, Cal Berkeley) subtly within each column. Use simplified/monochrome versions if needed for consistency. 
- **Footer Logo:** Logo\_Skull(Red).png, bottom-left. 

**Slide 20: Deep Relationships in the Sports World** 

- **Objective:** Introduce key sports relationship leaders: Tony Dye, Rob Vogel, Sean Embree. (Note: Content file says Slide 20, Feedback doc says Slide 20). 
- **Content Source:** Pitch\_Deck\_Content.txt - Slide 20 
- **Layout:** Balanced 3-column grid, similar to Slide 19. Remove overlapping graphics from v0. 
- **Background:** Solid Carbon (#2B2842). Consider a subtle sports-themed texture (e.g., field lines, net pattern) at low opacity. 
- **Title:** "Deep Relationships in the Sports World" - ADAM.CG PRO, Large, Uppercase, Grit Teal (#00A19C), centered across the top. 
- **Columns (One for each person):** 
- Image: Place primary image at the top (TonyD\_Bengals(Deep\_Relationships\_Slide).png, RobV(Deep\_Relationships\_Slide).png or RobV.png, SeanE(Deep\_Relationships\_Slide).png from Headshots\_Grid.pdf). Use action shots where available. Consistent size/framing. 
- Name: ADAM.CG PRO or Neodex, Medium-Large, White, centered below image. 
- Title: Inter, Medium, Grit Teal, centered below name. 
- Bio Text: Inter, Small, White. Use bullet points (Logo\_Skull(Red).png) for key affiliations/experience. Ensure text fits. 
- Logos: Include relevant team/company logos (UCLA, Bengals, Raiders, J5 Partners, CU Buffs, NFL, NBA, NHL, ACC, Big 12, Ohio State, Miami, UNC, UT, Dolphins, Chiefs, Patriots) subtly within each column. 
- **Footer Logo:** Logo\_Skull(Red).png, bottom-left. 

**Slide 21 & 22: Sparq Inc. Advisory Board** 

- **Objective:** Showcase the extensive advisory board across two slides. (Note: 

  Content file combines into Slide 21 & 22, Feedback doc splits them but requests all 12 shown). *Decision: Combine onto one slide using a dense grid, as per feedback intent.* 

- **Content Source:** Pitch\_Deck\_Content.txt - Slides 21 & 22 
- **Layout:** Dense grid layout (e.g., 4x3 or 3x4) to fit all 12 advisors. Prioritize showing breadth over detailed bios. 
- **Background:** Solid Carbon (#2B2842). 
- **Title:** "Sparq Inc. Advisory Board" - ADAM.CG PRO, Large, Uppercase, Grit Teal (#00A19C), centered across the top. 
- **Grid Cells (One for each advisor):** 
- Headshot: Use headshots from Headshots\_Grid.pdf (MichelleK, DavidO, CraigA\_Headshot, AdamM\_Headshot, JonE\_Headshot, JimD\_Headshot, RogerMJr\_Headshot, MarkC\_Headshot, JosefS\_Headshot, RJMorley\_Headshot, RogerMJr\_Headshot, RudyKoch\_Headshot). Keep headshots small, consistent size, circular mask. 
- Name: ADAM.CG PRO or Neodex, Small-Medium, White, below headshot. 
- Title/Company: Inter, Very Small (e.g., 10-12px), Grit Teal, below name. Keep it brief (e.g., "CEO, SimWin Sports"). 
- Logo: Place affiliated company logo (Valvoline, SimWin, Endless Games, Amplifier Group, Dolphins, G-P, Wilkes Artis, Atlanta Esports, Polytech, Greenlists, NBA PA, Mythical Games - use logos from Logos\_Grid2.pdf where available) very small, below or beside the text. Use monochrome versions for consistency. 
- **Organization:** Ensure the grid is neat and aligned, despite density. Use thin lines (Grit Teal, low opacity) to separate cells if needed. 
- **Footer Logo:** Logo\_Skull(Red).png, bottom-left. 

**Slide 23: Sparq Inc. Board of Directors** 

- **Objective:** Introduce the Board of Directors. (Note: Content file says Slide 23, Feedback doc says Slide 22 - Following content file. Feedback doc requests highlighting Fumbi Chima). 
- **Content Source:** Pitch\_Deck\_Content.txt - Slide 23 
- **Layout:** Grid layout (e.g., 3x2) for the 6 positions (including TBDs). 
- **Background:** Solid Carbon (#2B2842). 
- **Title:** "Sparq Inc. Board of Directors" - ADAM.CG PRO, Large, Uppercase, Grit Teal (#00A19C), centered across the top. 
- **Grid Cells:** 
- Headshot/Placeholder: Use headshots (JanH\_Headshot.png, TonyD\_Bengals...png (use headshot if available), SeanE...png (use headshot if 

  available), FumbiC\_Headshot.png, RogerMJr\_Headshot.png - use Mark 

  Rogers headshot if different) or a clean placeholder silhouette for TBDs. Consistent size/style. 

- Name: ADAM.CG PRO or Neodex, Medium, White. 
- Title/Role: Inter, Small-Medium, Grit Teal. (e.g., "Founder & CEO", "Independent Director"). 
- Fumbi Chima Highlight: Use a distinct container background (e.g., Grit Teal low opacity) or border (Outlaw Red) for Fumbi's cell. Include a brief bulleted list (Logo\_Skull(Red).png) of her key previous roles (Boeing CU, Adidas, Fox, Burberry, Walmart) using Inter, Very Small, White. 
- TBD Placeholders: Clearly label as "TBD Independent Director", "TBD Financial Steward" using Inter font. 
- **Footer Logo:** Logo\_Skull(Red).png, bottom-left. 

**Slide 24: For the Culture - $SPARQ Token Experts** 

- **Objective:** Introduce the F.T.C. Labs team. (Note: Content file says Slide 24, Feedback doc says Slide 23 - Following content file. Feedback requests title change and no overlap). 
- **Content Source:** Pitch\_Deck\_Content.txt - Slide 24 
- **Layout:** Balanced grid (e.g., 3x2 or arrangement for 5 people). Ensure no overlap. 
- **Background:** Background suggesting tokens/Web3 (e.g., subtle blockchain pattern, network lines, Carbon to Cyber Teal gradient). 
- **Title:** "For the Culture - $SPARQ Token Experts" (Corrected from content file, aligning somewhat with feedback) - ADAM.CG PRO, Large, Uppercase, Grit Teal (#00A19C), centered across the top. Add F.T.C. Labs logo if available. 
- **Grid Cells (One for each person):** 
- Headshot: Use headshots (BrentonK\_Headshot.png, ShannonC\_Headshot.png, JosephM\_Headshot.png, AmyK\_Headshot.png, GeorgeD\_Headshot.png from Headshots\_Grid.pdf). Consistent size/style. 
- Name: ADAM.CG PRO or Neodex, Medium, White. 
- Title: Inter, Small-Medium, Grit Teal. 
- Bio/Affiliations: Inter, Small, White. Use bullet points (Logo\_Skull(Red).png) for key affiliations (Sappy Seals, Omnia, NSA, Deloitte, InfiniteWorld, Lockheed, Evolve, Midwest Investment). 
- Logos: Include relevant logos (Sappy Seals, Omnia, Deloitte, Wells Fargo, InfiniteWorld, Lockheed, Evolve, Midwest Investment Partners - use logos from Logos\_Grid2.pdf where available) subtly. 
- **Footer Logo:** Logo\_Skull(Red).png, bottom-left. 

**Slide 25: Fundraise** 

- **Objective:** Detail the SAFE and SAFT investment opportunities. (Note: Content file says Slide 25, Feedback doc says Slide 24). 
- **Content Source:** Pitch\_Deck\_Content.txt - Slide 25 
- **Layout:** Two distinct sections for SAFE and SAFT. Include redesigned Use of Funds chart. Ensure all content fits. 
- **Background:** Solid Carbon (#2B2842). 
- **Title:** "Fundraise" - ADAM.CG PRO, Large, Uppercase, Victory Gold (#FFD700), top-left. 
- **SAFE Offering Section:** 
- Heading: "Sparq Inc. (SAFE Offering)" - ADAM.CG PRO or Neodex, Medium, Grit Teal. 
- Bullet Points: Use Logo\_Skull(Red).png. List terms ($100M cap, 20% discount, $100k min, $10M limit). Inter, Small-Medium, White. Highlight key numbers. 
- **SAFT Offering Section:** 
- Heading: "$SPARQ Token (SAFT Offering)" - ADAM.CG PRO or Neodex, Medium, Grit Teal. 
- Bullet Points: Use Logo\_Skull(Red).png. List terms ($20M cap, $50k min, cliff, unvest, $1M limit, $525k raised, TGE target). Inter, Small-Medium, White. Highlight key numbers/dates. 
- **Use of Funds Chart:** 
- Redesign: Create a clean, professional pie or donut chart. 
- Data: Represent intended allocation (e.g., Development, Marketing, Operations, Legal - use reasonable placeholder % if not specified). 
- Labels: Clear percentage labels directly on segments. Use Inter, Small, White. 
- Colors: Use Sparq accent colors (Victory Gold, Cyber Teal, Rebel Pink, Grit Teal). 
- Legend: Include a clear legend. Inter, Small, White. 
- Placement: Position chart logically, perhaps centered between or below the SAFE/SAFT sections. 
- **Footer Logo:** Logo\_Skull(Red).png, bottom-left. 

**Slide 26: Quote 2** 

- **Objective:** Present the second inspirational quote. (Note: Content file says Slide 26, Feedback doc says Slide 25). 
- **Content Source:** Pitch\_Deck\_Content.txt - Slide 26 (Corrected Quote from Feedback: "Dream no small dreams for they have no power to move the hearts of men.") 
- **Layout:** Focused, impactful quote presentation. 
- **Background:** Evocative background suggesting ambition or vision. Could be an abstract gradient (Carbon to Victory Gold) or a subtle, relevant image (e.g., stadium lights, low opacity). 
- **Quote Text:** "Dream no small dreams for they have no power to move the hearts of men." 
  - Font: Neodex (for style) or a clean Serif, Large size (e.g., 36-48px), White or Victory Gold. Centered. 
  - Style: Use large, stylized quotation marks (e.g., in Grit Teal). 
- **Attribution:** "- Johann Wolfgang von Goethe" 
  - Font: Inter, Medium size, White or Grit Teal, centered below the quote. 
- **Visual Element:** Add Logo\_Skull(Red).png subtly as a watermark or small element in a corner. 
- **Footer Logo:** Logo\_Skull(Red).png, bottom-left. 

**Slide 27: Join the Future of Sports Gaming** 

- **Objective:** Call to action, provide contact information. (Note: Content file says Slide 27, Feedback doc says Slide 26). 
- **Content Source:** Pitch\_Deck\_Content.txt - Slide 27 
- **Layout:** Visually engaging call to action. Include character images and logo as per feedback. 
- **Background:** Dynamic background suggesting future/action. Use Background3.jpg (from Support\_Images\_Grid.pdf) with overlay, or a vibrant gradient (e.g., Outlaw Red to Grit Teal to Carbon). 
- **Title:** "Join the Future of Sports Gaming" - ADAM.CG PRO, Very Large, Uppercase, White or Victory Gold, centered. 
- **Text:** Place the descriptive paragraph below the title. Inter, Medium, White, centered. 
- **Character Images:** Incorporate two distinct character images (e.g., Hero3.png, Hero4.png from Character\_Images\_Grid.pdf) flanking the text or title, balanced composition. 
- **Contact Info:** 
- Present contact details clearly below the main text. 
- Names/Titles: ADAM.CG PRO or Neodex, Medium, White. 
- Email/Phone: Inter, Medium, Grit Teal (make emails clickable links mailto:). 
- **Logo:** Replace placeholder with Sparq\_Skull\_Wordmark\_Tagline(Red).png, centered at the bottom or top. 
- **Footer Logo:** Logo\_Skull(Red).png, bottom-left. 

**Slide 28: Disclaimer** 

- **Objective:** Provide legal disclaimer. (Note: Content file says Slide 28, Feedback doc says Slide 27). 
- **Content Source:** Pitch\_Deck\_Content.txt - Slide 28 
- **Layout:** Clean, readable text layout. Ensure all content fits. 
- **Background:** Solid Carbon (#2B2842) or a very light grey (#F0F0F0) for contrast. If light, use Carbon text. Assume dark background. 
- **Title:** "Disclaimer" - ADAM.CG PRO, Large, Uppercase, Grit Teal (#00A19C), top-left. 
- **Disclaimer Text:** 
- Font: Inter, Small (e.g., 12-14px), White (or light grey #D3D3D3). 
- Layout: Single or two-column layout to fit text comfortably. Justified or left-aligned. 
- Spacing: Ensure adequate line spacing for readability. 
- **Container:** Consider placing text within a thin Grit Teal bordered box. 
- **Footer Logo:** Logo\_Skull(Red).png, bottom-left. 

**Slide 29: Appendix Checkpoint / Why Web3 Matters** 

- **Objective:** Transition to Appendix / Explain Web3 importance. (Note: Content file has Slide 29 as Why Web3 Matters, Slide 28 as Disclaimer. Feedback doc has Slide 28 as Appendix Checkpoint, Slide 29 as Why Web3 Matters. *Decision: Follow Content File order, make Slide 29 "Why Web3 Matters". Create a visual break before it if desired.*) 
- **Content Source:** Pitch\_Deck\_Content.txt - Slide 30 (Note: Content file has this as Slide 30, but slide order implies it should be 29 based on v0 structure). *Adjusting to Slide 29.* 
- **Layout:** Similar to Slide 3 (Web3 Simplified), but potentially more detailed. Ensure all content fits. Use columns. 
- **Background:** Solid Carbon (#2B2842). 
- **Title:** "Why Web3 Matters" - ADAM.CG PRO, Large, Uppercase, Grit Teal (#00A19C), top-left. 
- **Content Sections:** 
- Web1/2/3 Recap: Briefly recap definitions using columns or list. Use Logo\_Skull(Red).png icons. Inter, Small-Medium, White. 
- "Imagine If You": Use bullet points (Logo\_Skull(Red).png). Inter, Small-Medium, White. 
- "The Value Creation Potential": Use bullet points (Logo\_Skull(Red).png). Highlight key terms (Digital Ownership Economy, Expanding Markets) using ADAM.CG PRO or bold Inter. Inter, Small-Medium, White. 
- **Visuals:** Add simple icons representing ownership, voting, content creation, data 

  privacy. 

- **Footer Logo:** Logo\_Skull(Red).png, bottom-left. 

**Slide 30: CROWN U™ The Ultimate NCAA Party Sports Game** 

- **Objective:** Introduce the Crown U game. (Note: Content file Slide 31, Feedback doc Slide 30. *Adjusting to Slide 30.*) 
- **Content Source:** Pitch\_Deck\_Content.txt - Slide 31 
- **Layout:** Game showcase layout. Combine text, logo, and game media. Ensure all content fits. 
- **Background:** Use Crown\_U\_Poster.png (from Support\_Images\_Grid.pdf) as a background with overlay, or a vibrant college sports/party game themed background. 
- **Title:** "CROWN U™ The Ultimate NCAA Party Sports Game" - ADAM.CG PRO, Large, Uppercase, Victory Gold (#FFD700) or White, top-center. 
- **Logo:** Include CROWN U\_wordmark + crown(tm).png (from Logos\_Grid2.pdf) prominently below the title. 
- **Game Description:** Main descriptive paragraph. Inter, Medium, White. 
- **Features:** 
- Layout: Use a grid or list for features (NCAA License, Cross-Sport Gameplay, Survive & Dominate, Customizable, Blockchain Rewards). 
- Bullet Points: Use CROWN U\_crown(ICON-rounded).png (from Logos\_Grid2.pdf) as bullet icons, small size. 
- Text: Feature title bold (ADAM.CG PRO or Inter Bold), description Inter, Small-Medium, White. 
- **Imagery:** Include Crown\_U\_Beta\_Characters.png or Gameplay1.png (from Support\_Images\_Grid.pdf) integrated into the layout, perhaps in a mock phone frame. 
- **Footer Logo:** Logo\_Skull(Red).png, bottom-left. 

**Slide 31: CROWN U ROLLOUT SCHEDULE** 

- **Objective:** Display the Crown U rollout schedule visually. (Note: Content file Slide 32, Feedback doc Slide 31. *Adjusting to Slide 31.* Feedback requests full slide image). 
- **Content Source:** Pitch\_Deck\_Content.txt - Slide 32 (Text description is context, image is key). 
- **Layout:** Full bleed image. 
- **Background:** None (Image is the background). 
- **Title:** None. 
- **Image:** Use Crown\_U\_Rollout.png (from Support\_Images\_Grid.pdf) to fill the 

  entire slide canvas. Ensure it's high resolution and text within the image is legible. Use 'Inter' for any text *within* the image if possible, otherwise use the font embedded in the image. 

- **Footer Logo:** Omit footer logo for full bleed image. 

**Slide 32: GAME SLATE** 

- **Objective:** Showcase the planned game slate (Campus Clash, Sports Trivia, Mascot Mayhem). (Note: Content file Slide 33, Feedback doc Slide 32. *Adjusting to Slide 32.*) 
- **Content Source:** Pitch\_Deck\_Content.txt - Slide 33 (Includes descriptions and references images). 
- **Layout:** Balanced 3-column layout. 
- **Background:** Solid Carbon (#2B2842) or a subtle game-themed background. 
- **Title:** "GAME SLATE" - ADAM.CG PRO, Large, Uppercase, Grit Teal (#00A19C), centered across the top. 
- **Columns (One for each game):** 
- Image: Place game cover image at the top (Campus\_Clash\_Cover - likely Slated\_Games (Crown\_U).png, Sports\_Trivia\_Cover - likely Slated\_Games(Sports\_Trivia).png, Mascot\_Mayhem\_Cover - likely Slated\_Games(Mascot\_Mayhem).png from Support\_Images\_Grid.pdf). Ensure consistent size/framing. 
- Game Title: Use the specific game logos/wordmarks if available within the images, otherwise use ADAM.CG PRO or Neodex, Medium-Large, White or Victory Gold, centered below image (e.g., "CROWN U™ CAMPUS CLASH™"). 
- Description: Inter, Small-Medium, White, below title. Ensure text fits within the column. 
- **Footer Logo:** Logo\_Skull(Red).png, bottom-left. 

**Slide 33: Appendix Title Slide (Implied)** 

- **Objective:** Visually signal the start of the appendix section. (Based on v0 structure and Feedback doc Slide 28). 
- **Content Source:** None explicitly from text file, design based on feedback. 
- **Layout:** Visually engaging, design-heavy slide. 
- **Background:** Vibrant Sparq color gradient (e.g., Outlaw Red to Grit Teal) or a dynamic composition using multiple character images (Character\_Images\_Grid.pdf) arranged playfully. 
- **Title:** "APPENDIX" - ADAM.CG PRO or Neodex, Very Large, Uppercase, White with Outlaw Red or Grit Teal outline/shadow for impact. Centered. 
- **Visual Elements:** Incorporate several character images or game asset visuals in a 

  dynamic, non-overlapping collage. 

- **Footer Logo:** Logo\_Skull(Red).png, bottom-left. 

**Final Checks for Replit Agent:** 

- Ensure the correct Sparq logos (Skull Mark, Wordmark, Tagline variations) are used as specified. 
- Verify all specified images (headshots, characters, support images, game covers) are used correctly. 
- Confirm ADAM.CG PRO (Titles), Inter (Body), and Neodex (Accents) fonts are applied as per the hierarchy. 
- Double-check that *all* text content from Pitch\_Deck\_Content.txt is included and readable, adjusting font sizes for 'Inter' as needed. 
- Ensure Sparq brand colors (#EB0028, #00A19C, #2B2842, #1E1E24, #FFFFFF, #FFD700, etc.) are used accurately. 
- Confirm layout instructions (columns, grids, alignment) are followed. 
- Verify bullet points consistently use the specified icons (Logo\_Skull(Red).png or Crown U icon). 
- Ensure the final output is static HTML/CSS. 
- Load 'Inter' font (e.g., from Google Fonts: <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=sw ap" rel="stylesheet">) and ensure the user-provided Neodex .woff file is correctly referenced in CSS (@font-face). 
