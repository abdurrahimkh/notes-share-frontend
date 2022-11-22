import Features from "./Features";
import StudentSays from "./StudentSays";
import Steps from "./Steps";
import HeroSection from "./HeroSection";
import Stats from "./Stats";
import { useRef } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import { useNavigate } from "react-router-dom";

const FrontPage = () => {
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  const executeScroll = () =>
    scrollRef.current.scrollIntoView({ behavior: "smooth" });

  const handlePressed = () => {
    navigate("/admin");
  };
  useHotkeys("ctrl+shift+End", handlePressed);
  return (
    <>
      <HeroSection executeScroll={executeScroll} />
      <Features scrollRef={scrollRef} />
      <Steps />
      <StudentSays />
      <Stats />
    </>
  );
};

export default FrontPage;
