import { PulseLoader } from "react-spinners";
const Loader = ({ loading }) => {
  return (
    <div>
      <PulseLoader
        color="#f804e9"
        loading={loading}
        // cssOverride={override}
        size={15}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loader;
