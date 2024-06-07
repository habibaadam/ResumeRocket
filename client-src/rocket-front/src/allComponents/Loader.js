import { RotatingSquare } from "react-loader-spinner";

export default function LoadingIndicator() {
  return (
        <RotatingSquare
          visible={true}
          width="500"
          height="500"
          color="#a54e85"
          ariaLabel="rotating-square-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      );
}