import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import sahanaImg from "../assets/sahana.png" 

const testimonials = [
  {
    id: 1,
    text: "I lost my medical reports just to find this amazing application I guess ;). Keep your amazing work up...",
    name: "Sahana R",
    since: "User since 2025",
    image: sahanaImg
  },
  {
    id: 2,
    text: "This app saved me so much time! I can’t imagine managing my docs without it now.",
    name: "Srujana",
    since: "User since 2024",
    image: sahanaImg
  },
  {
    id: 3,
    text: "Finally an app that keeps my important records safe and accessible.",
    name: "Krishna",
    since: "User since 2025",
    image: sahanaImg
  }
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 9000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      width: "500px",
      margin: "auto",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={testimonials[currentIndex].id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          style={{
            background: "white",
            borderRadius: "12px",
            padding: "20px",
            boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
            width: "100%",
            minHeight: "150px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"
          }}
        >
          {/* Text */}
          <p style={{ fontSize: "16px", lineHeight: "1.4" }}>
            {testimonials[currentIndex].text}
          </p>

          {/* Footer */}
          <div style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            marginTop: "15px"
          }}>
            <div style={{ textAlign: "right", marginRight: "10px" }}>
              <strong>{testimonials[currentIndex].name}</strong>
              <br />
              <span style={{ fontSize: "12px", color: "gray" }}>
                {testimonials[currentIndex].since}
              </span>
            </div>
            <img
              src={testimonials[currentIndex].image}
              alt={testimonials[currentIndex].name}
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                objectFit: "cover"
              }}
            />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
