import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";

const Tech = () => {
  return (
    <div ><p className={styles.sectionHeadText}>Skills.</p>
    <div className="flex flex-row flex-wrap justify-center mt-20 gap-10">
      {technologies.map((technology) => (
        <div title={technology.name} className={`w-28 h-28 key=${technology.name}`}>
          <BallCanvas icon={technology.icon}/>
        </div>
      ))}
    </div>
    </div>
  )
}

export default SectionWrapper(Tech, "");