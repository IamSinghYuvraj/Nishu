import type { CSSProperties, ReactNode } from "react"
import type { PostArtKind } from "@/lib/posts"
import { PostArtFrame } from "@/components/post-art-frame"

// Looping vector illustrations drawn in code, one per blog topic, used in place
// of a photo on post heroes and guide cards. Pure SVG animated by the `pa-*`
// CSS classes in app/globals.css, so it costs no image bytes and no JavaScript
// beyond the off-screen pause in PostArtFrame. With reduced motion the
// animations stop and each scene shows its resting frame.
//
// Social cards and structured data still use the post's photo (`post.image`):
// crawlers and chat apps need a raster image.

const CYAN = "#38b6e8"
const DEEP = "#0071a7"
const MAG = "#ff5ca8"
const LIME = "#c6d92e"
const LINE = "rgba(241,247,250,0.85)"
const FAINT = "rgba(241,247,250,0.14)"
const PANEL = "#0f3147"
const WATER = "rgba(56,182,232,0.35)"

export const POST_ART_LABELS: Record<PostArtKind, string> = {
  ro: "Animated diagram: feed water pumped through a reverse osmosis membrane, salts carried off to reject and clean permeate collected in a tank",
  dm: "Animated diagram: water flowing through cation and anion resin columns of a demineralisation plant",
  softener: "Animated diagram: a water softener vessel capturing hardness from incoming water, with a brine tank and soft water at the tap",
  hardwater: "Animated illustration: apartment towers with hard water dripping from a scaled tap",
  boiler: "Animated diagram: a fire-tube boiler with steam rising and a magnified tube showing a scale layer",
  bottling: "Animated illustration: bottles moving along a conveyor under a filling nozzle and UV lamp",
  checklist: "Animated illustration: two quotations compared line by line, with items ticked and crossed off",
  maintenance: "Animated illustration: an RO skid with turning gears and a calendar of scheduled service visits",
  diagnose: "Animated chart: permeate flow falling while pressure rises, beside a pressure gauge and a warning sign",
  lab: "Animated illustration: a water sample in a beaker beside a test report with readings",
}

/** CSS custom properties plus a phase offset, so copies of one animation run out of step. */
function s(vars: Record<string, string> = {}, phase = 0): CSSProperties {
  const style: Record<string, string> = {}
  for (const [k, val] of Object.entries(vars)) style[`--${k}`] = val
  if (phase) style.animationDelay = `${-phase}s`
  return style as CSSProperties
}

function Label({ x, y, children, anchor = "start" }: { x: number; y: number; children: ReactNode; anchor?: "start" | "middle" | "end" }) {
  return (
    <text x={x} y={y} fontSize="12" fill="rgba(241,247,250,0.62)" textAnchor={anchor}>
      {children}
    </text>
  )
}

/** A pipe: a faint casing with water dashes flowing along it. */
function Pipe({ d, color = CYAN, slow }: { d: string; color?: string; slow?: boolean }) {
  return (
    <>
      <path d={d} stroke={FAINT} strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d={d} className={slow ? "pa-flow-slow" : "pa-flow"} stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </>
  )
}

/** A dial gauge whose needle swings between two angles. */
function Gauge({ cx, cy, r, a0, a1, t = "2.6s", danger }: { cx: number; cy: number; r: number; a0: string; a1: string; t?: string; danger?: boolean }) {
  const ticks = Array.from({ length: 9 }, (_, i) => {
    const a = ((-120 + i * 30) * Math.PI) / 180
    return (
      <line
        key={i}
        x1={cx + Math.sin(a) * r * 0.78}
        y1={cy - Math.cos(a) * r * 0.78}
        x2={cx + Math.sin(a) * r * 0.92}
        y2={cy - Math.cos(a) * r * 0.92}
        stroke={LINE}
        strokeWidth="2"
        strokeLinecap="round"
      />
    )
  })
  const ax = (deg: number) => [cx + Math.sin((deg * Math.PI) / 180) * r * 0.85, cy - Math.cos((deg * Math.PI) / 180) * r * 0.85]
  const [dx0, dy0] = ax(60)
  const [dx1, dy1] = ax(120)
  return (
    <g>
      <circle cx={cx} cy={cy} r={r} fill={PANEL} stroke={LINE} strokeWidth="2.5" />
      {danger && <path d={`M${dx0} ${dy0} A${r * 0.85} ${r * 0.85} 0 0 1 ${dx1} ${dy1}`} stroke={MAG} strokeWidth="5" fill="none" />}
      {ticks}
      <polygon
        className="pa-swing"
        style={s({ a0, a1, t })}
        points={`${cx - 3},${cy} ${cx + 3},${cy} ${cx},${cy - r * 0.72}`}
        fill={danger ? MAG : LIME}
      />
      <circle cx={cx} cy={cy} r={4} fill={LINE} />
    </g>
  )
}

/** A spinning gear outline centred on (cx, cy). */
function Gear({ cx, cy, r, teeth, t, reverse, color = LINE }: { cx: number; cy: number; r: number; teeth: number; t: string; reverse?: boolean; color?: string }) {
  const pts: string[] = []
  const step = (Math.PI * 2) / teeth
  for (let i = 0; i < teeth; i++) {
    const a = i * step
    for (const [da, rr] of [[0, r], [step * 0.18, r + 10], [step * 0.48, r + 10], [step * 0.66, r]] as const) {
      pts.push(`${(cx + Math.cos(a + da) * rr).toFixed(1)},${(cy + Math.sin(a + da) * rr).toFixed(1)}`)
    }
  }
  return (
    <g className={reverse ? "pa-spin pa-reverse" : "pa-spin"} style={s({ t })}>
      <polygon points={pts.join(" ")} fill={PANEL} stroke={color} strokeWidth="2.5" strokeLinejoin="round" />
      <circle cx={cx} cy={cy} r={r * 0.35} fill="none" stroke={color} strokeWidth="2.5" />
    </g>
  )
}

/** Particles that drift by (dx, dy) and fade, each a step out of phase with the last. */
function Drift({ items, dx, dy, t, r = 4, color, label }: { items: [number, number][]; dx: number; dy: number; t: number; r?: number; color: string; label?: string }) {
  return (
    <>
      {items.map(([x, y], i) =>
        label ? (
          <text
            key={i}
            x={x}
            y={y}
            className="pa-move"
            style={s({ dx: `${dx}px`, dy: `${dy}px`, t: `${t}s` }, (i * t) / items.length)}
            fill={color}
            fontSize="20"
            fontWeight="700"
            textAnchor="middle"
          >
            {label}
          </text>
        ) : (
          <circle
            key={i}
            cx={x}
            cy={y}
            r={r}
            className="pa-move"
            style={s({ dx: `${dx}px`, dy: `${dy}px`, t: `${t}s` }, (i * t) / items.length)}
            fill={color}
          />
        ),
      )}
    </>
  )
}

/** Drops falling from (x, y) by `fall`, with a ripple where they land. */
function Drops({ x, y, fall, t = 1.6, count = 3, color = CYAN }: { x: number; y: number; fall: number; t?: number; count?: number; color?: string }) {
  return (
    <>
      {Array.from({ length: count }, (_, i) => (
        <path
          key={i}
          d={`M${x} ${y} q-6 10 0 14 q6 -4 0 -14z`}
          className="pa-move pa-ease-in"
          style={s({ dx: "0px", dy: `${fall}px`, t: `${t}s` }, (i * t) / count)}
          fill={color}
        />
      ))}
      {Array.from({ length: 2 }, (_, i) => (
        <ellipse
          key={i}
          cx={x}
          cy={y + fall + 12}
          rx="22"
          ry="5"
          className="pa-ripple"
          style={s({ t: `${t}s` }, (i * t) / 2)}
          fill="none"
          stroke={color}
          strokeWidth="2"
        />
      ))}
    </>
  )
}

/** A grid of resin beads that pulse in a wave from top to bottom. */
function Beads({ x, y, cols, rows, color, gap = 18 }: { x: number; y: number; cols: number; rows: number; color: string; gap?: number }) {
  const out: ReactNode[] = []
  for (let r = 0; r < rows; r++)
    for (let c = 0; c < cols; c++)
      out.push(
        <circle
          key={`${r}-${c}`}
          cx={x + c * gap + (r % 2 ? gap / 2 : 0)}
          cy={y + r * gap * 0.88}
          r={6.5}
          className="pa-pulse"
          style={s({ t: "2.4s" }, 2.4 - r * 0.22)}
          fill={color}
          fillOpacity="0.55"
        />,
      )
  return <>{out}</>
}

/* ---------------------------------------------------------------- scenes */

function RO() {
  const salts: [number, number][] = [[250, 192], [250, 214], [250, 203], [250, 228], [250, 186], [250, 220]]
  const water: [number, number][] = [[280, 205], [340, 220], [400, 200], [460, 215], [520, 205], [310, 228], [430, 226], [560, 222], [370, 210], [490, 196]]
  const feed: [number, number][] = [[40, 250], [40, 246], [40, 254], [40, 250]]
  return (
    <>
      <Pipe d="M30 250 H232" />
      <Drift items={feed} dx={190} dy={0} t={1.8} r={3.5} color={MAG} />
      <circle cx="120" cy="250" r="32" fill={PANEL} stroke={LINE} strokeWidth="2.5" />
      <g className="pa-spin" style={s({ t: "1.4s" })}>
        <path d="M120 228 V272 M98 250 H142" stroke={CYAN} strokeWidth="5" strokeLinecap="round" />
      </g>
      <Label x={36} y={228}>Feed</Label>

      <Pipe d="M612 196 H690 V112 H770" color={MAG} />
      <Label x={700} y={100}>Reject</Label>
      <Pipe d="M612 294 H720 V340" />

      <rect x="232" y="168" width="380" height="154" rx="44" fill={PANEL} stroke={LINE} strokeWidth="2.5" />
      <rect x="250" y="241" width="344" height="10" fill={LIME} fillOpacity="0.35" />
      <path d="M250 246 H594" stroke={LIME} strokeWidth="2" strokeDasharray="3 5" />
      <Drift items={salts} dx={344} dy={0} t={3.6} r={4.5} color={MAG} />
      <Drift items={water} dx={26} dy={70} t={2.4} r={3.5} color={CYAN} />
      <path d="M262 290 H582" className="pa-flow" stroke={CYAN} strokeWidth="3" strokeLinecap="round" />
      <Label x={422} y={350} anchor="middle">RO membrane</Label>

      <path d="M420 168 V150" stroke={LINE} strokeWidth="3" />
      <Gauge cx={420} cy={124} r={28} a0="-30deg" a1="30deg" />

      <rect x="676" y="340" width="96" height="84" rx="8" fill={PANEL} stroke={LINE} strokeWidth="2.5" />
      <rect x="680" y="370" width="88" height="50" rx="4" className="pa-bob" style={s({ by: "-10px", t: "3s" })} fill={WATER} />
      <Label x={724} y={444} anchor="middle">Permeate</Label>
    </>
  )
}

function DM() {
  const cations: [number, number][] = [[290, 132], [320, 138], [345, 128], [305, 126]]
  const anions: [number, number][] = [[480, 132], [510, 138], [535, 128], [495, 126]]
  return (
    <>
      <Pipe d="M30 80 H315 V108" />
      <Label x={36} y={66}>Raw water</Label>
      <Pipe d="M315 362 V398 H412 V80 H505 V108" />
      <Pipe d="M505 362 V398 H770" />
      <Label x={764} y={384} anchor="end">DM water</Label>

      <rect x="262" y="108" width="106" height="254" rx="46" fill={PANEL} stroke={LINE} strokeWidth="2.5" />
      <rect x="452" y="108" width="106" height="254" rx="46" fill={PANEL} stroke={LINE} strokeWidth="2.5" />
      <Beads x={280} y={196} cols={4} rows={9} color={MAG} gap={22} />
      <Beads x={470} y={196} cols={4} rows={9} color={LIME} gap={22} />
      <Drift items={cations} dx={0} dy={70} t={2.2} color={MAG} label="+" />
      <Drift items={anions} dx={0} dy={70} t={2.2} color={LIME} label="−" />
      <Label x={315} y={432} anchor="middle">Cation</Label>
      <Label x={505} y={432} anchor="middle">Anion</Label>

      <rect x="616" y="140" width="150" height="170" rx="12" fill={PANEL} stroke={LINE} strokeWidth="2.5" />
      <Label x={632} y={166}>Conductivity</Label>
      {[0, 1, 2, 3, 4].map((i) => (
        <g key={i}>
          <rect x="632" y={184 + i * 22} width="118" height="10" rx="5" fill={FAINT} />
          <rect
            x="632"
            y={184 + i * 22}
            width="118"
            height="10"
            rx="5"
            className="pa-grow"
            style={s({ s0: `${0.9 - i * 0.18}`, s1: `${0.6 - i * 0.12}`, t: `${2 + i * 0.4}s` })}
            fill={i < 2 ? MAG : CYAN}
          />
        </g>
      ))}
      <Label x={632} y={298}>µS/cm</Label>
    </>
  )
}

function Softener() {
  const hard: [number, number][] = [[330, 126], [360, 132], [395, 124], [345, 140], [380, 130]]
  return (
    <>
      <Pipe d="M30 92 H330" />
      <Label x={36} y={76}>Hard water in</Label>
      <Drift items={[[40, 92], [40, 88], [40, 96]]} dx={280} dy={0} t={2.4} r={4} color={LIME} />

      <rect x="300" y="104" width="130" height="266" rx="58" fill={PANEL} stroke={LINE} strokeWidth="2.5" />
      <rect x="330" y="62" width="70" height="40" rx="8" fill={PANEL} stroke={LINE} strokeWidth="2.5" />
      <Gear cx={365} cy={82} r={10} teeth={8} t="4s" color={LIME} />
      <Beads x={322} y={214} cols={5} rows={7} color={CYAN} gap={20} />
      <Drift items={hard} dx={0} dy={90} t={2.4} r={5} color={LIME} />
      <Label x={365} y={398} anchor="end">Resin</Label>

      <Pipe d="M400 82 H520 V222" slow />
      <rect x="470" y="222" width="100" height="148" rx="10" fill={PANEL} stroke={LINE} strokeWidth="2.5" />
      <rect x="474" y="282" width="92" height="84" rx="6" fill={WATER} />
      {[[490, 320], [512, 340], [534, 316], [550, 345], [500, 352]].map(([x, y], i) => (
        // The bob goes on a wrapper: a CSS transform would replace the rect's own rotate attribute.
        <g key={i} className="pa-bob" style={s({ by: "-6px", t: "3.2s" }, i * 0.6)}>
          <rect x={x} y={y} width="12" height="12" transform={`rotate(20 ${x + 6} ${y + 6})`} fill={LINE} fillOpacity="0.8" />
        </g>
      ))}
      <Label x={520} y={398} anchor="middle">Brine</Label>

      <Pipe d="M365 370 V418 H690 V236 H648" />
      <path d="M640 228 h24 v20 h-8 v14 h-8 v-14 h-8z" fill={LINE} />
      <Drops x={652} y={270} fall={78} />
      <path d="M618 336 L626 420 H678 L686 336" stroke={LINE} strokeWidth="2.5" fill="none" />
      <rect x="624" y="372" width="56" height="44" className="pa-bob" style={s({ by: "-5px", t: "3s" })} fill={WATER} />
      <Label x={770} y={440} anchor="end">Soft water</Label>
    </>
  )
}

function HardWater() {
  const towers = [
    { x: 50, w: 96, h: 250 },
    { x: 162, w: 76, h: 320 },
    { x: 254, w: 104, h: 210 },
  ]
  return (
    <>
      {towers.map((t, ti) => {
        const top = 410 - t.h
        const windows: ReactNode[] = []
        for (let r = 0; top + 24 + r * 30 < 390; r++)
          for (let c = 0; 12 + c * 22 < t.w - 12; c++)
            windows.push(
              <rect
                key={`${r}-${c}`}
                x={t.x + 12 + c * 22}
                y={top + 24 + r * 30}
                width="12"
                height="14"
                rx="2"
                className="pa-blink"
                style={s({ t: `${3 + ((r * 7 + c * 3 + ti * 5) % 6)}s` }, (r * 1.3 + c * 0.7 + ti) % 5)}
                fill={(r + c + ti) % 3 ? CYAN : LIME}
              />,
            )
        return (
          <g key={ti}>
            <rect x={t.x} y={top} width={t.w} height={t.h} rx="4" fill={PANEL} stroke={LINE} strokeWidth="2" />
            {windows}
          </g>
        )
      })}
      <rect x="176" y="62" width="48" height="26" rx="4" fill={DEEP} stroke={LINE} strokeWidth="2" />
      <Pipe d="M224 76 H400 V180 H560" />
      <line x1="30" y1="410" x2="770" y2="410" stroke={LINE} strokeWidth="2" />

      <rect x="540" y="160" width="60" height="44" rx="10" fill={LINE} />
      <path d="M600 176 H660 Q680 176 680 196 V226 H652 V204 H600z" fill={LINE} />
      <rect x="556" y="140" width="28" height="22" rx="4" fill={MAG} />
      {[[654, 228, 7], [668, 231, 6], [678, 227, 5], [660, 234, 4]].map(([x, y, r], i) => (
        <circle key={i} cx={x} cy={y} r={r} className="pa-pulse" style={s({ t: "3s" }, i * 0.7)} fill="#ffffff" />
      ))}
      <Label x={694} y={236}>Scale</Label>
      <Drops x={666} y={246} fall={108} t={1.4} count={3} />
      <path d="M600 360 Q666 420 732 360" stroke={LINE} strokeWidth="2.5" fill="none" />
      {[[620, 350], [700, 356], [650, 362], [720, 346]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={7} className="pa-move" style={s({ dx: "0px", dy: "-80px", t: "4s" }, i)} fill="none" stroke={LINE} strokeWidth="1.5" />
      ))}
    </>
  )
}

function Boiler() {
  const steam: [number, number][] = [[515, 60], [522, 60], [508, 60], [516, 60]]
  return (
    <>
      <Pipe d="M30 245 H182" />
      <Label x={36} y={226}>Feed water</Label>
      <Drift items={[[40, 245], [40, 241], [40, 249]]} dx={130} dy={0} t={2} r={4} color={LIME} />

      <rect x="498" y="68" width="34" height="104" fill={PANEL} stroke={LINE} strokeWidth="2.5" />
      {steam.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="16" className="pa-puff" style={s({}, i)} fill={LINE} fillOpacity="0.5" />
      ))}

      <rect x="182" y="170" width="380" height="150" rx="70" fill={PANEL} stroke={LINE} strokeWidth="2.5" />
      {[214, 245, 276].map((y, i) => (
        <g key={y}>
          <path d={`M232 ${y} H512`} stroke={FAINT} strokeWidth="14" strokeLinecap="round" />
          <path d={`M232 ${y} H512`} className="pa-flow" style={s({}, i * 0.3)} stroke={i === 1 ? MAG : LIME} strokeWidth="3" strokeLinecap="round" />
        </g>
      ))}

      {[270, 320, 370, 420, 470].map((x, i) => (
        <g key={x}>
          <path d={`M${x} 372 q-20 -22 0 -48 q20 26 0 48z`} className="pa-flicker" style={s({ t: `${0.5 + (i % 3) * 0.12}s` }, i * 0.2)} fill={MAG} />
          <path d={`M${x} 372 q-10 -12 0 -26 q10 14 0 26z`} className="pa-flicker" style={s({ t: `${0.4 + (i % 2) * 0.1}s` }, i * 0.15)} fill={LIME} />
        </g>
      ))}
      <line x1="230" y1="376" x2="510" y2="376" stroke={LINE} strokeWidth="2" />

      <path d="M512 245 L606 245" stroke={LINE} strokeWidth="1.5" strokeDasharray="4 5" />
      <circle cx="676" cy="245" r="72" fill={PANEL} stroke={LINE} strokeWidth="2.5" />
      <circle cx="676" cy="245" r="52" fill="none" stroke={LINE} strokeWidth="8" />
      <circle cx="676" cy="245" r="42" fill="none" stroke={MAG} strokeWidth="12" className="pa-pulse" style={s({ t: "2.8s" })} />
      <circle cx="676" cy="245" r="30" fill={WATER} />
      <Label x={676} y={344} anchor="middle">Scale on tube</Label>

      <rect x="96" y="300" width="18" height="120" rx="9" fill={PANEL} stroke={LINE} strokeWidth="2" />
      <rect x="100" y="330" width="10" height="86" rx="5" className="pa-grow-y" style={s({ s0: "0.4", s1: "1", t: "3s" })} fill={MAG} />
    </>
  )
}

function Bottling() {
  const bottle = "M-8 -100 h16 v12 q14 8 14 24 v58 q0 6 -6 6 h-28 q-6 0 -6 -6 v-58 q0 -16 14 -24z"
  return (
    <>
      <rect x="340" y="40" width="120" height="70" rx="12" fill={PANEL} stroke={LINE} strokeWidth="2.5" />
      <rect x="346" y="70" width="108" height="36" rx="6" className="pa-bob" style={s({ by: "-6px", t: "2.4s" })} fill={WATER} />
      <rect x="390" y="110" width="20" height="78" fill={PANEL} stroke={LINE} strokeWidth="2.5" />
      <path d="M400 192 V226" className="pa-flow" stroke={CYAN} strokeWidth="5" strokeLinecap="round" />
      <Label x={472} y={84}>Filler</Label>

      <rect x="110" y="96" width="150" height="20" rx="10" fill={MAG} className="pa-pulse" style={s({ t: "1.6s" })} />
      {[130, 160, 190, 220, 250].map((x, i) => (
        <path key={x} d={`M${x - 6} 126 L${x - 14} 176`} stroke={MAG} strokeWidth="2.5" strokeLinecap="round" className="pa-pulse" style={s({ t: "1.6s" }, i * 0.2)} />
      ))}
      <Label x={110} y={84}>UV</Label>

      <g className="pa-slide" style={s({ dx: "120px", t: "2.4s" })}>
        {Array.from({ length: 8 }, (_, i) => (
          <g key={i} transform={`translate(${-80 + i * 120} 330)`}>
            <path d={bottle} fill="rgba(56,182,232,0.12)" stroke={CYAN} strokeWidth="2.5" strokeLinejoin="round" />
            <rect x="-13" y="-52" width="26" height="46" rx="3" fill={WATER} />
            <rect x="-9" y="-108" width="18" height="9" rx="2" fill={LIME} />
          </g>
        ))}
      </g>
      <rect x="20" y="334" width="760" height="16" rx="8" fill={PANEL} stroke={LINE} strokeWidth="2" />
      <path d="M32 342 H768" className="pa-flow-slow" stroke={LINE} strokeWidth="2" />
      {[80, 200, 320, 440, 560, 680].map((x) => (
        <Gear key={x} cx={x} cy={378} r={12} teeth={6} t="1.2s" color={FAINT} />
      ))}
    </>
  )
}

function Checklist() {
  const docs = [
    { x: 140, title: "Quote A", marks: [1, 1, 1, 1, 1, 1] },
    { x: 440, title: "Quote B", marks: [1, 0, 1, 0, 1, 0] },
  ]
  return (
    <>
      {docs.map((d) => (
        <g key={d.title}>
          <rect x={d.x} y="60" width="220" height="330" rx="14" fill={PANEL} stroke={LINE} strokeWidth="2.5" />
          <text x={d.x + 20} y="96" fontSize="15" fill={LINE}>{d.title}</text>
          <line x1={d.x + 20} y1="112" x2={d.x + 200} y2="112" stroke={FAINT} strokeWidth="2" />
          {d.marks.map((ok, i) => {
            const y = 140 + i * 40
            const cyc = 6
            const phase = cyc - i * 0.7
            return (
              <g key={i}>
                <rect x={d.x + 20} y={y} width="20" height="20" rx="4" fill="none" stroke={LINE} strokeWidth="2" />
                <rect x={d.x + 54} y={y + 4} width={90 + ((i * 37) % 50)} height="6" rx="3" fill={FAINT} />
                <rect x={d.x + 54} y={y + 14} width={50 + ((i * 23) % 40)} height="4" rx="2" fill={FAINT} />
                {ok ? (
                  <path d={`M${d.x + 24} ${y + 10} l5 6 l10 -12`} pathLength={1} className="pa-draw" style={s({ t: `${cyc}s` }, phase)} stroke={LIME} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                ) : (
                  <path d={`M${d.x + 25} ${y + 5} l10 10 M${d.x + 35} ${y + 5} l-10 10`} pathLength={1} className="pa-draw" style={s({ t: `${cyc}s` }, phase)} stroke={MAG} strokeWidth="3.5" strokeLinecap="round" fill="none" />
                )}
              </g>
            )
          })}
        </g>
      ))}
      <rect x="130" y="132" width="540" height="36" rx="8" className="pa-scan" style={s({ dy: "200px", t: "6s" })} fill={CYAN} fillOpacity="0.14" stroke={CYAN} strokeOpacity="0.5" />
      <g className="pa-bob" style={s({ by: "-14px", t: "2.6s" })}>
        <circle cx="700" cy="110" r="30" fill="rgba(56,182,232,0.15)" stroke={LINE} strokeWidth="5" />
        <path d="M721 131 L752 162" stroke={LINE} strokeWidth="9" strokeLinecap="round" />
      </g>
    </>
  )
}

function Maintenance() {
  return (
    <>
      <rect x="70" y="140" width="400" height="230" rx="10" fill="none" stroke={LINE} strokeWidth="2.5" />
      <line x1="70" y1="390" x2="70" y2="370" stroke={LINE} strokeWidth="4" />
      <line x1="470" y1="390" x2="470" y2="370" stroke={LINE} strokeWidth="4" />
      {[176, 236].map((y, i) => (
        <g key={y}>
          <rect x="96" y={y} width="348" height="40" rx="20" fill={PANEL} stroke={LINE} strokeWidth="2.5" />
          <path d={`M118 ${y + 20} H422`} className="pa-flow" style={s({}, i * 0.4)} stroke={CYAN} strokeWidth="3" strokeLinecap="round" />
        </g>
      ))}
      <Gauge cx={150} cy={330} r={26} a0="-40deg" a1="20deg" />
      <Gauge cx={230} cy={330} r={26} a0="-10deg" a1="40deg" t="3.4s" />
      <rect x="300" y="310" width="140" height="40" rx="6" fill={PANEL} stroke={LINE} strokeWidth="2" />
      <circle cx="322" cy="330" r="7" className="pa-pulse" style={s({ t: "1.2s" })} fill={LIME} />
      <Label x={340} y={335}>Running</Label>

      <Gear cx={590} cy={140} r={46} teeth={12} t="9s" />
      <Gear cx={658} cy={196} r={30} teeth={8} t="6s" reverse color={LIME} />

      <rect x="540" y="270" width="220" height="140" rx="12" fill={PANEL} stroke={LINE} strokeWidth="2.5" />
      <rect x="540" y="270" width="220" height="30" rx="12" fill={DEEP} />
      <Label x={556} y={290}>Service visits</Label>
      {Array.from({ length: 12 }, (_, i) => {
        const x = 556 + (i % 6) * 32
        const y = 312 + Math.floor(i / 6) * 44
        const visit = i % 3 === 0
        return (
          <rect
            key={i}
            x={x}
            y={y}
            width="24"
            height="32"
            rx="4"
            className={visit ? "pa-pulse" : undefined}
            style={visit ? s({ t: "3s" }, 3 - (i / 3) * 0.75) : undefined}
            fill={visit ? LIME : FAINT}
          />
        )
      })}
    </>
  )
}

function Diagnose() {
  return (
    <>
      <rect x="60" y="60" width="470" height="330" rx="14" fill={PANEL} stroke={LINE} strokeWidth="2.5" />
      {[120, 180, 240, 300].map((y) => (
        <line key={y} x1="100" y1={y} x2="500" y2={y} stroke={FAINT} strokeWidth="1.5" />
      ))}
      <path d="M100 100 V350 H500" stroke={LINE} strokeWidth="2.5" fill="none" />
      <path d="M100 130 C160 126 200 140 240 150 S320 190 360 220 S440 290 500 310" pathLength={1} className="pa-draw" style={s({ t: "6s" })} stroke={CYAN} strokeWidth="4" fill="none" strokeLinecap="round" />
      <path d="M100 310 C160 306 210 300 250 286 S330 240 370 210 S450 150 500 130" pathLength={1} className="pa-draw" style={s({ t: "6s" })} stroke={MAG} strokeWidth="4" fill="none" strokeLinecap="round" />
      <circle cx="500" cy="310" r="7" className="pa-pulse" style={s({ t: "1.4s" })} fill={CYAN} />
      <circle cx="500" cy="130" r="7" className="pa-pulse" style={s({ t: "1.4s" })} fill={MAG} />
      <Label x={110} y={378}>Weeks →</Label>
      <rect x="116" y="74" width="12" height="4" fill={CYAN} />
      <Label x={134} y={80}>Permeate flow</Label>
      <rect x="276" y="74" width="12" height="4" fill={MAG} />
      <Label x={294} y={80}>Pressure drop</Label>

      <Gauge cx={660} cy={180} r={78} a0="-50deg" a1="75deg" t="3.6s" danger />
      <g className="pa-pulse" style={s({ t: "1.6s" })}>
        <path d="M660 300 L706 380 H614z" fill="none" stroke={LIME} strokeWidth="5" strokeLinejoin="round" />
        <path d="M660 330 V352" stroke={LIME} strokeWidth="5" strokeLinecap="round" />
        <circle cx="660" cy="366" r="3.5" fill={LIME} />
      </g>
    </>
  )
}

function Lab() {
  const rows = [
    { name: "TDS", c: CYAN, s0: "0.55", s1: "0.85" },
    { name: "Hardness", c: LIME, s0: "0.7", s1: "0.95" },
    { name: "Iron", c: MAG, s0: "0.2", s1: "0.45" },
    { name: "Chloride", c: CYAN, s0: "0.4", s1: "0.65" },
    { name: "pH", c: LIME, s0: "0.5", s1: "0.6" },
  ]
  const bubbles: [number, number][] = [[170, 368], [205, 372], [240, 366], [190, 370], [255, 372]]
  return (
    <>
      <path d="M210 30 V120 l-7 18 h14 l-7 -18" stroke={LINE} strokeWidth="2.5" fill={PANEL} strokeLinejoin="round" />
      <rect x="198" y="26" width="24" height="30" rx="6" fill={MAG} />
      <Drops x={210} y={142} fall={118} t={1.8} count={2} />

      <rect x="146" y="270" width="128" height="106" className="pa-bob" style={s({ by: "-6px", t: "3s" })} fill={WATER} />
      <Drift items={bubbles} dx={0} dy={-90} t={3} r={4} color="rgba(241,247,250,0.7)" />
      <path d="M130 170 H290 M142 170 V372 Q142 382 152 382 H268 Q278 382 278 372 V170" stroke={LINE} strokeWidth="3" fill="none" strokeLinejoin="round" />
      {[230, 270, 310, 350].map((y) => (
        <line key={y} x1="142" y1={y} x2="160" y2={y} stroke={LINE} strokeWidth="2" />
      ))}

      <rect x="370" y="70" width="370" height="320" rx="14" fill={PANEL} stroke={LINE} strokeWidth="2.5" />
      <text x="394" y="108" fontSize="15" fill={LINE}>Water analysis</text>
      <line x1="394" y1="124" x2="716" y2="124" stroke={FAINT} strokeWidth="2" />
      {rows.map((r, i) => {
        const y = 156 + i * 44
        return (
          <g key={r.name}>
            <Label x={394} y={y + 9}>{r.name}</Label>
            <rect x="500" y={y} width="210" height="12" rx="6" fill={FAINT} />
            <rect x="500" y={y} width="210" height="12" rx="6" className="pa-grow" style={s({ s0: r.s0, s1: r.s1, t: `${2.2 + i * 0.5}s` })} fill={r.c} />
          </g>
        )
      })}
    </>
  )
}

const SCENES: Record<PostArtKind, () => ReactNode> = {
  ro: RO,
  dm: DM,
  softener: Softener,
  hardwater: HardWater,
  boiler: Boiler,
  bottling: Bottling,
  checklist: Checklist,
  maintenance: Maintenance,
  diagnose: Diagnose,
  lab: Lab,
}

/**
 * Fills its positioned parent (give the parent `relative` and an aspect ratio).
 * `compact` hides the small labels, which are unreadable at card size.
 */
export function PostArt({ kind, compact, className }: { kind: PostArtKind; compact?: boolean; className?: string }) {
  const Scene = SCENES[kind]
  return (
    <PostArtFrame label={POST_ART_LABELS[kind]} compact={compact} className={className}>
      <svg viewBox="0 0 800 450" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <Scene />
      </svg>
    </PostArtFrame>
  )
}
