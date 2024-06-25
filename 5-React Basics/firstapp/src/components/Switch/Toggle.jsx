import "./styles.css";
import { useTheme } from '../../UseContext';

const Toggle = (props) => {
  const { theme,toggleTheme } = useTheme();
  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={theme === "Light"}
        onChange={toggleTheme}
        onClick={props.toggle}
      />
      <span className="slider round" />
    </label>
  );
};

export default Toggle;
