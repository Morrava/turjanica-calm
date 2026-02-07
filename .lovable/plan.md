
# Redesign "What We Offer" Section with Horizontal Scroll

## Overview
Transform the current large grid layout (16 items) into a compact horizontal scroll carousel, matching the design pattern used in the Photo Gallery section. This will significantly reduce the vertical space while maintaining all content.

## Current Issues
- 16 cards displayed in a full grid takes up too much vertical space
- Not consistent with other sections that use horizontal scrolling
- Activities and facilities shown the same way despite different content types

## Proposed Design

### Layout Structure
- Horizontal scrollable container with snap-scroll behavior
- Navigation arrows (left/right) that appear when scrolling is possible
- Cards sized appropriately for the content (smaller than gallery images)

### Card Design (Compact)
- Width: ~200-240px per card
- Icon + title prominently displayed
- Description shown on hover or as subtle text below
- Consistent styling with existing card designs (rounded corners, subtle border, hover effects)

### Visual Grouping
- Activities (with descriptions) first in the scroll
- Facilities (icon + title only) displayed more compactly at the end
- Subtle visual distinction: facilities could have slightly smaller cards or a different subtle background

## Technical Implementation

### Step 1: Add scroll state and refs
Add React state and refs similar to PhotoGallery:
- `scrollRef` for the container
- `canScrollLeft` / `canScrollRight` states
- `checkScrollability` function
- `scrollByCard` function for arrow navigation

### Step 2: Update the layout
Replace the grid with a horizontal flex container:
- `flex gap-4 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory`
- Each card becomes `flex-shrink-0 snap-start`
- Card width: `w-[220px] sm:w-[260px]`

### Step 3: Add navigation arrows
Copy the arrow pattern from PhotoGallery:
- Left arrow: appears when `canScrollLeft` is true
- Right arrow: appears when `canScrollRight` is true
- Same styling: rounded, white background, subtle shadow

### Step 4: Adjust card styling
- Make cards more compact (reduced padding)
- Keep icon + title prominent
- Show descriptions in smaller text
- Facilities cards (no description) can be even more compact

## Files to Modify
- `src/components/camping/OffersSection.tsx` - Complete redesign with horizontal scroll

## Expected Result
- Section height reduced by ~60-70%
- Consistent horizontal scroll experience matching Photo Gallery
- All 16 items still accessible via scrolling
- Mobile-friendly touch scrolling with snap points
- Arrow navigation for desktop users
