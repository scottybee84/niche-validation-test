import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const LawyerContent = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handlePreOrder = () => {
    if (window.gtag) {
      window.gtag("event", "click_preorder", {
        event_category: "engagement",
        event_label: "lawyercontent_preorder",
        value: 49,
      });
    }
    // Redirect to Gumroad payment
    window.location.href = "https://fineline8.gumroad.com/l/lawyercontent";
  };

  const handleWaitlist = (e) => {
    e.preventDefault();
    if (window.gtag) {
      window.gtag("event", "generate_lead", {
        event_category: "engagement",
        event_label: "lawyercontent_waitlist",
      });
    }

    // Send email via EmailJS
    const templateParams = {
      niche: "LawyerContent",
      user_email: email,
      signup_date: new Date().toLocaleString(),
      page_url: window.location.href,
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        console.log("Waitlist signup sent:", email);
        setSubmitted(true);
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        alert("Error signing up. Please try again.");
      });
  };

  return (
    <div
      className="landing-container"
      style={{
        background: "linear-gradient(135deg, #1C4E80 0%, #0a2540 100%)",
      }}
    >
      <div className="landing-content">
        <div className="logo" style={{ color: "#1C4E80" }}>
          LawyerContent
        </div>

        <h1 className="tagline">
          Get 5-10 Quality Leads Per Month Without Sacrificing Billable Hours
        </h1>

        <p className="subtitle">
          Our AI system builds your authority and brings clients to you—100%
          bar-ethics compliant.
        </p>

        <div className="features">
          <div className="feature">
            <span className="feature-icon">✅</span>
            <span>
              <strong>2 SEO-optimized blog posts per day</strong> - Legal
              education articles, case law updates, practice area guides with
              deep keyword research. Every post links back to your website.
            </span>
          </div>
          <div className="feature">
            <span className="feature-icon">✅</span>
            <span>
              <strong>5-10 targeted LinkedIn/Twitter posts per day</strong> -
              Thought leadership content positioning you as the local expert
              using keyword targeting for legal terms in your practice areas
            </span>
          </div>
          <div className="feature">
            <span className="feature-icon">✅</span>
            <span>
              <strong>Smart Twitter engagement</strong> - Monitors keywords like
              "[practice area] attorney needed", "need lawyer for [issue]",
              "legal advice [city]" and provides helpful information (not
              solicitation)
            </span>
          </div>
          <div className="feature">
            <span className="feature-icon">✅</span>
            <span>
              <strong>Automatic Google submission</strong> - Every article
              instantly submitted to Google Search Console for maximum
              visibility
            </span>
          </div>
          <div className="feature">
            <span className="feature-icon">✅</span>
            <span>
              <strong>Niche-specific keyword targeting</strong> - Tracks legal
              hashtags and discussions to position you as the go-to expert while
              staying bar-ethics compliant
            </span>
          </div>
          <div className="feature">
            <span className="feature-icon">✅</span>
            <span>
              <strong>Zero time investment</strong> - Runs 24/7 while you focus
              on billable work
            </span>
          </div>
        </div>

        <div className="pricing">
          <div className="price">$299/month</div>
          <div className="launch-special">
            🎉 Founder's Special: First 50 attorneys get $199/month FOREVER
          </div>

          <button
            className="cta-button"
            onClick={handlePreOrder}
            style={{
              background: "linear-gradient(135deg, #1C4E80 0%, #0a2540 100%)",
            }}
          >
            Pre-Order Now: Pay $49, Lock in $199/Month Forever
          </button>

          <div className="urgency">Only 38 founder spots remaining!</div>
        </div>

        {!submitted ? (
          <form onSubmit={handleWaitlist} style={{ marginTop: "2rem" }}>
            <input
              type="email"
              placeholder="Enter your email for updates"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                padding: "1rem",
                fontSize: "1rem",
                borderRadius: "10px",
                border: "2px solid #ddd",
                width: "100%",
                maxWidth: "400px",
                marginBottom: "1rem",
              }}
            />
            <button
              type="submit"
              className="cta-button secondary"
              style={{ color: "#1C4E80", borderColor: "#1C4E80" }}
            >
              Join Waitlist (Free)
            </button>
          </form>
        ) : (
          <div
            style={{
              marginTop: "2rem",
              padding: "1rem",
              background: "#d4edda",
              borderRadius: "10px",
              color: "#155724",
            }}
          >
            ✅ Thanks! We'll email you when LawyerContent launches!
          </div>
        )}

        <div className="social-proof">
          "I was worried about bar compliance, but this is 100% educational
          content. My Google rankings shot up and I'm getting 3-5 qualified
          leads per week. Best $199/month I spend."
          <br />— Michael R., Personal Injury Attorney, Chicago
        </div>

        <div style={{ marginTop: "2rem", color: "#666", fontSize: "0.9rem" }}>
          <p>
            Trusted by attorneys at solo practices & mid-size firms nationwide
          </p>
        </div>
      </div>
    </div>
  );
};

export default LawyerContent;
