import { Typewriter } from "react-simple-typewriter";

function MyTypewriter({words, color}) {
  return (  
    <span className={`${color || 'text-purple-600'}`}>
      <Typewriter words={words} loop={false} cursor={true}  />
    </span>
  );
}

export default MyTypewriter;
