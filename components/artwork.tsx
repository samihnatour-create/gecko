"use client";
import { useId, useState } from "react";
import Image from "next/image";
import type { Project } from "@/lib/content";

export function GeckoHand({ className = "" }: { className?: string }) {
  return (
    <img
      className={`gecko-hand-art ${className}`}
      src="/gecko-hand-black.svg"
      alt=""
      aria-hidden="true"
    />
  );
}

export function CampaignArt({
  project,
  className = "",
}: {
  project: Project;
  className?: string;
}) {
  const id = useId().replaceAll(":", "");
  const [failedSource, setFailedSource] = useState("");
  if (project.image && failedSource !== project.image)
    return (
      <div className={`campaign-art ${className}`}>
        <Image
          width={1024}
          height={1280}
          sizes="(max-width: 600px) 100vw, (max-width: 1100px) 50vw, 620px"
          onLoad={(event) => {
            if (event.currentTarget.naturalWidth === 0)
              setFailedSource(project.image);
          }}
          src={project.image}
          alt={project.imageAlt}
          onError={() => setFailedSource(project.image)}
        />
      </div>
    );
  return (
    <div className={`campaign-art art-${project.art} ${className}`}>
      <svg
        viewBox="0 0 800 700"
        role="img"
        aria-label={project.imageAlt}
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id={`${id}b`} x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#eaffb0" />
            <stop offset=".4" stopColor="#c7ff43" />
            <stop offset="1" stopColor="#5bba29" />
          </linearGradient>
          <linearGradient id={`${id}h`} x2="0" y2="1">
            <stop stopColor="#bce9f1" />
            <stop offset="1" stopColor="#688c9d" />
          </linearGradient>
        </defs>
        {project.art === "morrow" && (
          <>
            <rect width="800" height="700" fill="#c9f05a" />
            <ellipse
              cx="400"
              cy="633"
              rx="290"
              ry="31"
              fill="#254e1b"
              opacity=".18"
            />
            <g transform="rotate(-12 300 380)">
              <rect
                x="175"
                y="141"
                width="216"
                height="443"
                rx="22"
                fill={`url(#${id}b)`}
              />
              <rect
                x="181"
                y="129"
                width="204"
                height="38"
                rx="9"
                fill="#213e27"
              />
              <path d="M194 173h178" stroke="#fcffd8" strokeWidth="4" />
              <text
                x="207"
                y="321"
                fontSize="59"
                fontWeight="900"
                fill="#17381f"
                transform="rotate(-90 207 321)"
              >
                morrow
              </text>
              <circle cx="281" cy="451" r="70" fill="#264626" />
              <path
                d="M240 469q40-110 80-40q-37 1-46 58"
                stroke="#dcff92"
                strokeWidth="11"
                fill="none"
              />
              <text
                x="208"
                y="548"
                fontSize="13"
                fontWeight="700"
                fill="#17381f"
              >
                A FRESH START. DAILY.
              </text>
            </g>
            <g transform="rotate(13 527 395)">
              <rect
                x="417"
                y="222"
                width="203"
                height="361"
                rx="20"
                fill="#eff5d1"
              />
              <rect
                x="423"
                y="211"
                width="191"
                height="34"
                rx="8"
                fill="#223f27"
              />
              <text
                x="440"
                y="305"
                fontSize="46"
                fontWeight="900"
                fill="#223f27"
              >
                morrow
              </text>
              <circle cx="518" cy="414" r="58" fill="#bfe852" />
              <path
                d="M477 422q37-78 76-8M510 471v-97"
                fill="none"
                stroke="#223f27"
                strokeWidth="8"
              />
              <text x="447" y="550" fontSize="12" fill="#223f27">
                THE GOOD EVERYDAY.
              </text>
            </g>
            <text
              x="38"
              y="50"
              fontSize="12"
              fontFamily="monospace"
              fill="#264626"
            >
              DAILY RITUALS / REIMAGINED
            </text>
          </>
        )}
        {project.art === "sumi" && (
          <>
            <rect width="800" height="700" fill="#ff743e" />
            <circle cx="690" cy="50" r="210" fill="#ffcf64" />
            <circle cx="170" cy="650" r="195" fill="#f04722" />
            <text
              x="80"
              y="365"
              fontSize="255"
              fontWeight="900"
              letterSpacing="-23"
              fill="#69270e"
              transform="rotate(-8 400 350)"
            >
              sumi
            </text>
            <g fill="#ffdf83" transform="translate(520 480) rotate(18)">
              <ellipse rx="150" ry="81" />
              <ellipse rx="118" ry="53" fill="#ef5a2f" />
              <path
                d="M-90 0h180M0-40v80M-70-33l140 66M-70 33l140-66"
                stroke="#ffdf83"
                strokeWidth="7"
              />
            </g>
            <text x="60" y="570" fontSize="28" fontWeight="700" fill="#69270e">
              GOOD MOOD.
            </text>
            <text x="60" y="605" fontSize="28" fontWeight="700" fill="#69270e">
              GREAT FOOD.
            </text>
            <text x="55" y="65" fontSize="13" fill="#69270e">
              FRESH THINKING. FRESHER BITES.
            </text>
          </>
        )}
        {project.art === "form" && (
          <>
            <rect width="800" height="700" fill="#e9e8e2" />
            <text
              x="30"
              y="145"
              fontSize="155"
              fontWeight="900"
              letterSpacing="-12"
            >
              FORM
            </text>
            <g
              transform="translate(420 423) rotate(-32)"
              fill="none"
              stroke="#242522"
              strokeWidth="43"
            >
              {[0, 1, 2, 3, 4].map((n) => (
                <ellipse
                  key={n}
                  rx={190 - n * 27}
                  ry={117 - n * 13}
                  transform={`rotate(${n * 27})`}
                />
              ))}
            </g>
            <text x="38" y="656" fontSize="16" letterSpacing="6">
              MOVE TO YOUR OWN FREQUENCY.
            </text>
          </>
        )}
        {project.art === "rove" && (
          <>
            <rect width="800" height="700" fill="#24d7d6" />
            <circle cx="630" cy="180" r="125" fill="#f0ff38" />
            <path
              d="M-100 660Q250 150 850 550"
              stroke="#164b44"
              strokeWidth="125"
              fill="none"
            />
            <path
              d="M-100 660Q250 150 850 550"
              stroke="#eeffd2"
              strokeWidth="3"
              strokeDasharray="26 23"
              fill="none"
            />
            <text
              x="47"
              y="250"
              fontSize="172"
              fontWeight="900"
              letterSpacing="-12"
              fill="#123e35"
            >
              rove®
            </text>
            <text x="48" y="303" fontSize="19" letterSpacing="5" fill="#123e35">
              TAKE THE LONG WAY.
            </text>
            <text x="470" y="660" fontSize="14" fill="#eaffd9">
              SOMEWHERE NEW IS CALLING ↗
            </text>
          </>
        )}
        {project.art === "mono" && (
          <>
            <rect width="800" height="700" fill="#edff38" />
            {[0, 1, 2].map((n) => (
              <text
                key={n}
                x="-18"
                y={205 + n * 204}
                fontSize="240"
                fontWeight="900"
                letterSpacing="-19"
                fill={n === 1 ? "none" : "#191b17"}
                stroke="#191b17"
                strokeWidth="3"
                transform={`rotate(-8 400 ${205 + n * 204})`}
              >
                MONO
              </text>
            ))}
          </>
        )}
        {project.art === "hush" && (
          <>
            <rect width="800" height="700" fill={`url(#${id}h)`} />
            {[0, 1, 2, 3, 4, 5].map((n) => (
              <path
                key={n}
                d={`M-90 ${270 + n * 74}Q270 ${-20 + n * 100} 880 ${370 + n * 48}`}
                fill="none"
                stroke="#d4eff0"
                strokeWidth="30"
                opacity={0.2 + n * 0.1}
              />
            ))}
            <text
              x="210"
              y="372"
              fontSize="165"
              fontFamily="Georgia,serif"
              fontStyle="italic"
              fill="#183b47"
            >
              hush.
            </text>
            <text
              x="243"
              y="425"
              fontSize="13"
              letterSpacing="5"
              fill="#183b47"
            >
              LESS NOISE. MORE FEELING.
            </text>
          </>
        )}
      </svg>
    </div>
  );
}
