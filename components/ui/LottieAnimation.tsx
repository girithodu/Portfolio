import Lottie, { Options } from "react-lottie";

const lottieOptions: Options = {
  loop: false,
  autoplay: true,
  animationData: require("../../data/confetti.json"),
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const LottieAnimation: React.FC = () => <Lottie options={lottieOptions} />;

export default LottieAnimation;