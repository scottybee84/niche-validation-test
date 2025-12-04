import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const DealerBoost = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handlePreOrder = () => {
    if (window.gtag) {
      window.gtag('event', 'click_preorder', {
        'event_category': 'engagement',
        'event_label': 'dealerboost_preorder',
        'value': 49
      });
    }
    // Redirect to Gumroad payment
    window.location.href = 'https://fineline8.gumroad.com/l/dealerboost';
  };

  const handleWaitlist = (e) => {
    e.preventDefault();
    if (window.gtag) {
      window.gtag('event', 'generate_lead', {
        'event_category': 'engagement',
        'event_label': 'dealerboost_waitlist',
      });
    }
    
    // Send email via EmailJS
    const templateParams = {
      niche: 'DealerBoost',
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
    <div className="landing-container" style={{background: 'linear-gradient(135deg, #D62828 0%, #9d0208 100%)'}}>
      <div className="landing-content">
        <div className="logo" style={{color: '#D62828'}}>DealerBoost</div>
        
        <h1 className="tagline">
          Sell 10-20 More Cars Per Month Through Content Marketing
        </h1>
        
        <p className="subtitle">
          Our AI system turns your inventory into buyer-attracting content—automatically driving qualified leads to your lot.
        </p>

        <div className="features">
          <div className="feature">
            <span className="feature-icon">✅</span>
            <span><strong>2 SEO-optimized blog posts per day</strong> - Model reviews, buying guides, comparison articles with deep local keyword research. Every post links back to your website.</span>
          </div>
          <div className="feature">
            <span className="feature-icon">✅</span>
            <span><strong>5-10 targeted Twitter posts per day</strong> - Content highlighting inventory, deals, and automotive tips using keyword targeting for car shopping terms in your area</span>
          </div>
          <div className="feature">
            <span className="feature-icon">✅</span>
            <span><strong>Smart Twitter engagement</strong> - Monitors keywords like "looking for [make/model] in [city]", "best price [car]", "need car dealer near me" and responds with helpful information</span>
          </div>
          <div className="feature">
            <span className="feature-icon">✅</span>
            <span><strong>Automatic Google submission</strong> - Every blog post instantly indexed to capture local search traffic</span>
          </div>
          <div className="feature">
            <span className="feature-icon">✅</span>
            <span><strong>Niche-specific keyword targeting</strong> - Tracks automotive hashtags and car shopping discussions to connect with qualified buyers in your market</span>
          </div>
          <div className="feature">
            <span className="feature-icon">✅</span>
            <span><strong>DMS integration ready</strong> - Can pull inventory data from your existing systems (optional)</span>
          </div>
        </div>

        <div className="pricing">
          <div className="price">$299/month</div>
          <div className="launch-special">
            🎉 Founder's Special: First 50 dealerships get $199/month FOREVER
          </div>
          
          <button className="cta-button" onClick={handlePreOrder} style={{background: 'linear-gradient(135deg, #D62828 0%, #9d0208 100%)'}}>
            Pre-Order Now: Pay $49, Lock in $199/Month Forever
          </button>
          
          <div className="urgency">
            Only 41 founder spots remaining!
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
            <button type="submit" className="cta-button secondary" style={{color: '#D62828', borderColor: '#D62828'}}>
              Join Waitlist (Free)
            </button>
          </form>
        ) : (
          <div style={{marginTop: '2rem', padding: '1rem', background: '#d4edda', borderRadius: '10px', color: '#155724'}}>
            ✅ Thanks! We'll email you when DealerBoost launches!
          </div>
        )}

        <div className="social-proof">
          "We were spending $8K/month on Facebook ads. This system costs $199/month and brings us 40+ qualified leads. Sold 12 extra cars last month directly from blog traffic. Best investment we've made." 
          <br />— Tom R., Honda Dealer, Dallas TX
        </div>

        <div style={{marginTop: '2rem', color: '#666', fontSize: '0.9rem'}}>
          <p>Works with all brands: Honda • Toyota • Ford • Chevy • Tesla • Mercedes</p>
        </div>
      </div>
    </div>
  );
};

export default DealerBoost;


