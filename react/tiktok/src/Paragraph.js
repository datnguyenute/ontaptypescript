import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Paragraph = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <p className={theme}>
      The context object itself does not hold any information. It represents which context other components read or
      provide. Typically, you will use SomeContext in components above to specify the context value, and call
      useContext(SomeContext) in components below to read it. The context object has a few properties:
    </p>
  );
};

export default Paragraph;
