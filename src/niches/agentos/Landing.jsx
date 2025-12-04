import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const AgentOS = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handlePreOrder = () => {
    // Track conversion
    if (window.gtag) {
      window.gtag('event', 'click_preorder', {
        'event_category': 'engagement',
        'event_label': 'agentos_preorder',
        'value': 49
      });
    }
    
    // Redirect to Gumroad payment
    window.location.href = 'https://fineline8.gumroad.com/l/agentos-founder';
  };

  const handleWaitlist = (e) => {
    e.preventDefault();
    
    // Track conversion
    if (window.gtag) {
      window.gtag('event', 'generate_lead', {
        'event_category': 'engagement',
        'event_label': 'agentos_waitlist',
      });
    }
    
    // Send email via EmailJS
    const templateParams = {
      niche: 'AgentOS',
      user_email: email,
      signup_date: new Date().toLocaleString(),
      page_url: window.location.href
    };

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      templateParams,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    ).then(() => {
      console.log('Waitlist signup sent:', email);
      setSubmitted(true);
    }).catch((error) => {
      console.error('EmailJS error:', error);
      alert('Error signing up. Please try again.');
    });
  };

  return (
    <div className="landing-container" style={{background: 'linear-gradient(135deg, #2B5CE6 0%, #1e40af 100%)'}}>
      <div className="landing-content">
        <div className="logo">AgentOS</div>
        
        <h1 className="tagline">
          Get 3-15 Extra Listings Per Month While You Sleep
        </h1>
        
        <p className="subtitle">
          Our AI system runs 24/7 generating content, engaging buyers, and building your local authority.
        </p>

        <div className="features">
          <div className="feature">
            <span className="feature-icon">✅</span>
            <span><strong>2 SEO-optimized blog posts per day</strong> - Neighborhood guides, market analysis, buyer tips with deep keyword research. Every post links back to your website.</span>
          </div>
          <div className="feature">
            <span className="feature-icon">✅</span>
            <span><strong>5-10 targeted tweets per day</strong> - Local market updates, property highlights, and buyer education using keyword targeting for real estate terms in your area</span>
          </div>
          <div className="feature">
            <span className="feature-icon">✅</span>
            <span><strong>Smart Twitter engagement</strong> - Monitors keywords like "looking for realtor in [your city]", "buying home in [area]", "need real estate agent" and responds professionally</span>
          </div>
          <div className="feature">
            <span className="feature-icon">✅</span>
            <span><strong>Automatic Google submission</strong> - Every blog post submitted to Google Search Console for instant indexing</span>
          </div>
          <div className="feature">
            <span className="feature-icon">✅</span>
            <span><strong>Niche-specific keyword targeting</strong> - Tracks real estate hashtags and local market discussions to engage with qualified buyers</span>
          </div>
          <div className="feature">
            <span className="feature-icon">✅</span>
            <span><strong>100% hands-off</strong> - Set your location once, system runs forever</span>
          </div>
        </div>

        <div className="pricing">
          <div className="price">$149/month</div>
          <div className="launch-special">
            🎉 Founder's Special: First 100 customers get $99/month FOREVER
          </div>
          
          <button className="cta-button" onClick={handlePreOrder}>
            Pre-Order Now: Pay $49, Lock in $99/Month Forever
          </button>
          
          <div className="urgency">
            Only 73 founder spots remaining!
          </div>
        </div>

        {!submitted ? (
          <form onSubmit={handleWaitlist} style={{marginTop: '2rem'}}>
            <input
              type="email"
              placeholder="Enter your email for updates"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                padding: '1rem',
                fontSize: '1rem',
                borderRadius: '10px',
                border: '2px solid #ddd',
                width: '100%',
                maxWidth: '400px',
                marginBottom: '1rem'
              }}
            />
            <button type="submit" className="cta-button secondary">
              Join Waitlist (Free)
            </button>
          </form>
        ) : (
          <div style={{marginTop: '2rem', padding: '1rem', background: '#d4edda', borderRadius: '10px', color: '#155724'}}>
            ✅ Thanks! We'll email you when AgentOS launches!
          </div>
        )}

        <div className="social-proof">
          "I was spending 10+ hours per week on blog posts and social media. Now it's completely automated and my Google rankings are climbing. Already got 2 new listings from people who found my blog!" 
          <br />— Sarah M., Real Estate Agent, Austin TX
        </div>

        <div style={{marginTop: '2rem', color: '#666', fontSize: '0.9rem'}}>
          <p>Used by agents at: Keller Williams • RE/MAX • Coldwell Banker • eXp Realty</p>
        </div>
      </div>
    </div>
  );
};

export default AgentOS;


