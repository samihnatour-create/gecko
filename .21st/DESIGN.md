# Gecko Media design direction

Playful editorial, approved September 24, 2026. White-led sections, expressive sans-serif/italic serif typography, asymmetric concept campaigns, and dark service section. The supplied official logo is preserved as public/gecko-logo.png. Lime, yellow and cyan derive from its visual identity. Campaign artwork has its own secondary colors.

21st source: Scroll-Triggered Video Hero by daiwiikharihar, catalog id 9701, registry slug daiwiikharihar/scroll-triggered-video-hero. Source inspected through the authenticated CLI before implementation. Chapter crossfades, pinned media and progress were adapted using GSAP; no demo footage is reused.

All content is provisional and centrally editable in lib/content.ts. Each section is independently replaceable. No publication is part of this task.

Motion: native scrolling, desktop-only short pins, text masks, SVG stroke drawing and restrained parallax. At less than 900px there is no pinning. Reduced-motion mode disables all scroll/loop motion and leaves content visible. No extra animation library was needed.

21st review: color findings are intentional brand/art tokens. The dialog autofocus finding is intentional accessible modal focus placement after a user's click.
