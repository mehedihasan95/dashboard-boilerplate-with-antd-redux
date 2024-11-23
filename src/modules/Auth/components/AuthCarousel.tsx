import React from "react";
import { auth_slider } from "../../../utilities/image.collection";
import useAuthCarousel from "../hooks/useAuthCarousel";

const AuthCarousel: React.FC = () => {
  const { active, setActive } = useAuthCarousel();

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {auth_slider.map((image, index) => (
        <div
          key={index}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            opacity: active === index ? 1 : 0,
            transition: "opacity 0.8s ease-in-out, transform 0.8s ease-in-out",
            transform: active === index ? "scale(1)" : "scale(1.1)",
            zIndex: active === index ? 2 : 1,
          }}
        >
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
              filter: active === index ? "brightness(100%)" : "brightness(70%)",
              transition: "filter 0.8s ease-in-out",
            }}
          />

          {/* Overlay Content */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              padding: "2rem",
              background:
                "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
              color: "#fff",
              zIndex: 10,
              opacity: active === index ? 1 : 0,
              transform:
                active === index ? "translateY(0)" : "translateY(20px)",
              transition:
                "opacity 0.8s ease-in-out, transform 0.8s ease-in-out",
            }}
          >
            <h2
              style={{
                transform:
                  active === index ? "translateX(0)" : "translateX(-20px)",
                opacity: active === index ? 1 : 0,
                transition:
                  "transform 0.8s ease-in-out, opacity 0.8s ease-in-out",
              }}
            >
              Discover Our Platform
            </h2>
            <p
              style={{
                transform:
                  active === index ? "translateX(0)" : "translateX(20px)",
                opacity: active === index ? 1 : 0,
                transition:
                  "transform 0.8s ease-in-out, opacity 0.8s ease-in-out",
                transitionDelay: "0.2s",
              }}
            >
              Innovative solutions for your business needs
            </p>
          </div>
        </div>
      ))}

      {/* Pagination Dots */}
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          zIndex: 20,
        }}
      >
        {auth_slider.map((_, index) => (
          <div
            key={index}
            style={{
              width: active === index ? "24px" : "14px",
              height: "2px",
              backgroundColor:
                active === index
                  ? "rgba(255,255,255,1)"
                  : "rgba(255,255,255,0.5)",
              margin: "0 5px",
              cursor: "pointer",
              transition: "all 0.3s ease",
              transformOrigin: "center",
            }}
            onClick={() => setActive(index)}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.8)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor =
                active === index
                  ? "rgba(255,255,255,1)"
                  : "rgba(255,255,255,0.5)";
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default AuthCarousel;
