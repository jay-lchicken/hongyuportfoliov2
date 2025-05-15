import * as motion from "motion/react-client"

export const  ScrollTriggered = () => {
  return (
    <div style={container}>
      {languages.map(([lang,hueA, hueB], i) => (
        <Card i={i} language={lang} hueA={hueA} hueB={hueB} key={lang} />
      ))}
    </div>
  )
}

function Card({ language, hueA, hueB, i }) {
  const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`

  return (
    <motion.div
      className={`card-container-${i}`}
      style={cardContainer}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.8 }}
    >
      <div style={{ ...splash, background }} />
      <motion.div style={card} variants={cardVariants} className="card">
        <img src={language}/>
      </motion.div>
    </motion.div>
  )
}

const cardVariants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
}

const hue = (h) => `hsl(${h}, 100%, 50%)`

/**
 * ==============   Styles   ================
 */

const container = {
  margin: "100px auto",
  maxWidth: 500,
  paddingBottom: 100,
  width: "100%",
}

const cardContainer = {
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  paddingTop: 20,
  marginBottom: -120,
}

const splash = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  clipPath: `path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")`,
}

const card = {
  width: 300,
  height: 430,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 20,
  background: "white",
  boxShadow:
    "0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 2px hsl(0deg 0% 0% / 0.075), 0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 8px hsl(0deg 0% 0% / 0.075), 0 0 16px hsl(0deg 0% 0% / 0.075)",
  transformOrigin: "10% 60%",
  padding: "20px",
  boxSizing: "border-box",
}

const languageText = {
  fontSize: 36,
  fontWeight: "bold",
  textAlign: "center",
  color: "#111",
}

/**
 * ==============   Data   ================
 */

const languages = [
  ["/logos/next.webp", 45, 60], // Yellow/Gold
  ["/logos/pythoned.png", 200, 240], // Blue/Green
  ["/logos/swift-96x96_2x.png", 25, 35], // Orange/Brown
  ["/logos/Kotlin_(programming_language)-Logo.wine.png", 190, 210], // Blue
  ["/logos/ISO_C++_Logo.svg.png", 210, 230], // Blue
  ["/logos/HTML5_logo_and_wordmark.svg.png", 15, 25], // Orange
]
