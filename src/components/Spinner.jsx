import { PulseLoader } from "react-spinners";

const Spinner = ({ loading }) => {
  return (
    <PulseLoader
        color="#3b82f6" 
        size={10} 
        cssOverride={{ margin: "48px", textAlign: "center" }} 
        loading={loading}
    />
  );
};

export default Spinner;