// Presentation settings are separate from editable content.
export const motionSettings = {
  desktop: "(min-width: 900px) and (prefers-reduced-motion: no-preference)",
  active: "(prefers-reduced-motion: no-preference)",
  // The scroll vine needs side margin; below this width it would cover content.
  vine: "(min-width: 1100px)",
  revealDuration: 0.85,
};
