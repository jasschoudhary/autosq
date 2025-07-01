// # Responsive "Shop by Vehicle" Component

// ## Design Requirements
// Create a responsive vehicle selector that transforms across screen sizes. Component must include:
// - Title: "SHOP BY VEHICLE"
// - Make dropdown
// - Model dropdown (initially hidden/disabled)
// - Year dropdown (initially hidden/disabled)
// - Search button

// ### Visual Details from Images
// 1. **Text Content**:
//    - Title: "SHOP BY VEHICLE" (all caps)
//    - Placeholders: "Select make...", "Select model...", "Select year..."
//    - Button: "Search"
//    - Sample Options:
//      - Makes: Acura, Audi, BMW, Buick, Cadillac, Ford
//      - Models: Aerostar, Bronco, Country Squire, E-150 Econoline
//      - Years: 1991, 2020-2024

// 2. **Component States**:
//    - Initial: Only make dropdown + search button visible
//    - Make selected: Model dropdown appears
//    - Model selected: Year dropdown appears
//    - All selected: Search button becomes active

// 3. **Visual Style**:
//    - Clean, modern dropdowns with down arrow icons
//    - Selected values replace placeholders (e.g., "Ford" instead of "Select make...")
//    - Search button with active/inactive states
//    - Consistent spacing and alignment

// ## Responsive Behavior

// ### Mobile (SM: <576px)
// ![Mobile Layout](mobile-states.jpg)
// - **Vertical stacking** of all elements
// - Full-width elements (100% container width)
// - Element order:
//   1. Title (centered)
//   2. Make dropdown
//   3. Model dropdown (appears after make selection)
//   4. Year dropdown (appears after model selection)
//   5. Search button (always visible)
// - Spacing: 12px vertical gap between elements
// - Button: Full-width with centered text

// ### Tablet (MD: 576-767px)
// - Two-column layout:

// - 8px horizontal gap between columns
// - Dropdowns: Full width in their columns
// - Button: Full height of row

// ### Desktop (LG: 768-991px)
// - Horizontal inline layout:

// - Equal width dropdowns (flexible)
// - 8px horizontal gap between elements
// - Button: Auto width (120px min-width)

// ### Large Desktop (XL: ≥992px)
// - Same as LG layout
// - Max-width container: 1200px
// - Larger font sizes

// ## Interaction States
// 1. **Dropdowns**:
//  - Default: Light border, down arrow
//  - Focus: Border accent color, subtle shadow
//  - Disabled: 50% opacity, grayed text
 
// 2. **Search Button**:
//  - Inactive: Gray background, 50% opacity
//  - Active: Primary color, full opacity
//  - Hover: 10% darker than active state
//  - Active state animation: slight scale (0.98)

// ## Implementation Requirements
// 1. **Progressive Display**:
//  - Model dropdown only appears after make selection
//  - Year dropdown only appears after model selection
//  - Search button always visible but disabled until all selections made

// 2. **Accessibility**:
//  - ARIA labels for all inputs
//  - Keyboard navigable
//  - Focus states visible
//  - Semantic HTML structure

// 3. **Performance**:
//  - Mobile-first CSS
//  - Fluid transitions between states
//  - Efficient reflow between breakpoints

// 4. **Visual Fidelity**:
//  - Match spacing and proportions from images
//  - Consistent font stack (sans-serif)
//  - Clean dropdown styling with custom arrow
//  - Smooth state transitions (300ms)

// ## Mobile-Specific Notes
// - Maintain vertical rhythm in stacked layout
// - Ensure touch targets ≥44px
// - Prevent horizontal scrolling
// - Optimize dropdown height for mobile
// - Use device-native select menus for better UX

import React, { useState } from "react";

// Sample data
const MAKES = ["Acura", "Audi", "BMW", "Buick", "Cadillac", "Ford"];
const MODELS: Record<string, string[]> = {
  Ford: ["Aerostar", "Bronco", "Country Squire", "E-150 Econoline"],
  Acura: ["ILX", "MDX", "RDX", "TLX"],
  Audi: ["A3", "A4", "Q5", "Q7"],
  BMW: ["3 Series", "5 Series", "X3", "X5"],
  Buick: ["Enclave", "Encore", "LaCrosse", "Regal"],
  Cadillac: ["ATS", "CT5", "Escalade", "XT5"],
};
const YEARS = ["1991", "2020", "2021", "2022", "2023", "2024"];

const PRIMARY_COLOR = "#2563eb";
const GRAY = "#e5e7eb";
const FONT = '"Inter", "Segoe UI", Arial, sans-serif';

const ShopByVehicle: React.FC = () => {
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [focused, setFocused] = useState<string | null>(null);

  // Progressive display
  const showModel = !!make;
  const showYear = !!model;
  const isActive = !!(make && model && year);

  // Accessibility
  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "Enter" && isActive) {
      handleSearch();
    }
  };

  const handleSearch = () => {
    // Replace with your search logic
    alert(`Searching for ${make} ${model} ${year}`);
  };

  // Styles (CSS-in-JS)
  const styles = {
    container: {
      fontFamily: FONT,
      maxWidth: 1200,
      margin: "0 auto",
      padding: "16px 8px",
    } as React.CSSProperties,
    title: {
      textAlign: "center" as const,
      fontWeight: 700,
      fontSize: 24,
      letterSpacing: 2,
      marginBottom: 16,
      textTransform: "uppercase" as const,
    },
    form: {
      display: "flex",
      flexDirection: "column" as const,
      gap: 12,
    },
    row: {
      display: "flex",
      flexDirection: "row" as const,
      gap: 8,
      width: "100%",
    },
    select: (disabled: boolean, isFocused: boolean) => ({
      width: "100%",
      padding: "12px 40px 12px 16px",
      fontSize: 16,
      border: `1.5px solid ${isFocused ? PRIMARY_COLOR : GRAY}`,
      borderRadius: 8,
      background: disabled ? GRAY : "#fff",
      color: disabled ? "#888" : "#222",
      opacity: disabled ? 0.5 : 1,
      outline: isFocused ? `2px solid ${PRIMARY_COLOR}` : "none",
      appearance: "none" as const,
      position: "relative" as const,
      transition: "border 0.3s, box-shadow 0.3s, opacity 0.3s",
      boxShadow: isFocused ? `0 0 0 2px ${PRIMARY_COLOR}22` : "none",
      cursor: disabled ? "not-allowed" : "pointer",
      backgroundImage:
        "url('data:image/svg+xml;utf8,<svg fill=\'none\' stroke=\'%23333\' stroke-width=\'2\' viewBox=\'0 0 24 24\' xmlns=\'http://www.w3.org/2000/svg\'><path stroke-linecap=\'round\' stroke-linejoin=\'round\' d=\'M19 9l-7 7-7-7\'></path></svg>')",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "right 12px center",
      backgroundSize: 20,
    }),
    button: (active: boolean) => ({
      width: "100%",
      minWidth: 120,
      padding: "14px 0",
      fontSize: 18,
      fontWeight: 600,
      borderRadius: 8,
      border: "none",
      background: active ? PRIMARY_COLOR : GRAY,
      color: active ? "#fff" : "#888",
      opacity: active ? 1 : 0.5,
      cursor: active ? "pointer" : "not-allowed",
      transition: "background 0.3s, transform 0.1s",
      outline: "none",
      boxShadow: active ? `0 2px 8px ${PRIMARY_COLOR}22` : "none",
    }),
  };

  // Responsive breakpoints
  // Mobile: column, Tablet: 2-col, Desktop: row
  // We'll use CSS media queries for layout

  return (
    <div style={styles.container}>
      <style>{`
        @media (min-width: 576px) {
          .sbv-form { flex-direction: row; gap: 8px; }
          .sbv-col { flex: 1; }
          .sbv-btn { min-width: 120px; width: auto; }
        }
        @media (min-width: 992px) {
          .sbv-title { font-size: 2rem; }
          .sbv-form { max-width: 1200px; margin: 0 auto; }
        }
      `}</style>
      <div className="sbv-title" style={styles.title} id="shop-by-vehicle-title">
        SHOP BY VEHICLE
      </div>
      <form
        className="sbv-form"
        style={styles.form}
        aria-labelledby="shop-by-vehicle-title"
        onSubmit={e => {
          e.preventDefault();
          if (isActive) handleSearch();
        }}
      >
        {/* Make Dropdown */}
        <div className="sbv-col" style={{ width: "100%" }}>
          <label htmlFor="make-select" className="sr-only">
            Select make
          </label>
          <select
            id="make-select"
            aria-label="Select make"
            style={styles.select(false, focused === "make")}
            value={make}
            onChange={e => {
              setMake(e.target.value);
              setModel("");
              setYear("");
            }}
            onFocus={() => setFocused("make")}
            onBlur={() => setFocused(null)}
          >
            <option value="" disabled>
              Select make...
            </option>
            {MAKES.map(m => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
        </div>
        {/* Model Dropdown */}
        {showModel && (
          <div className="sbv-col" style={{ width: "100%" }}>
            <label htmlFor="model-select" className="sr-only">
              Select model
            </label>
            <select
              id="model-select"
              aria-label="Select model"
              style={styles.select(false, focused === "model")}
              value={model}
              onChange={e => {
                setModel(e.target.value);
                setYear("");
              }}
              onFocus={() => setFocused("model")}
              onBlur={() => setFocused(null)}
            >
              <option value="" disabled>
                Select model...
              </option>
              {(MODELS[make] || []).map(mo => (
                <option key={mo} value={mo}>
                  {mo}
                </option>
              ))}
            </select>
          </div>
        )}
        {/* Year Dropdown */}
        {showYear && (
          <div className="sbv-col" style={{ width: "100%" }}>
            <label htmlFor="year-select" className="sr-only">
              Select year
            </label>
            <select
              id="year-select"
              aria-label="Select year"
              style={styles.select(false, focused === "year")}
              value={year}
              onChange={e => setYear(e.target.value)}
              onFocus={() => setFocused("year")}
              onBlur={() => setFocused(null)}
            >
              <option value="" disabled>
                Select year...
              </option>
              {YEARS.map(y => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </select>
          </div>
        )}
        {/* Search Button */}
        <div className="sbv-col" style={{ width: "100%" }}>
          <button
            type="submit"
            className="sbv-btn"
            style={styles.button(isActive)}
            aria-label="Search vehicles"
            disabled={!isActive}
            tabIndex={0}
            onKeyDown={handleKeyDown}
            onMouseDown={e => {
              if (isActive) e.currentTarget.style.transform = "scale(0.98)";
            }}
            onMouseUp={e => {
              e.currentTarget.style.transform = "scale(1)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            Search
          </button>
        </div>
      </form>
      {/* Visually hidden class for screen readers */}
      <style>{`
        .sr-only {
          position: absolute !important;
          width: 1px !important;
          height: 1px !important;
          padding: 0 !important;
          margin: -1px !important;
          overflow: hidden !important;
          clip: rect(0,0,0,0) !important;
          border: 0 !important;
        }
      `}</style>
    </div>
  );
};

export default ShopByVehicle;