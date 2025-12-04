import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const ClinicGrow = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handlePreOrder = () => {
    if (window.gtag) {
      window.gtag('event', 'click_preorder', {
        'event_category': 'engagement',
        'event_label': 'clinicgrow_preorder',
        'value': 49
      });
    }
    // Redirect to Gumroad payment
    window.location.href = 'https://fineline8.gumroad.com/l/clinicgrow';
  };

  const handleWaitlist = (e) => {
    e.preventDefault();
    if (window.gtag) {
      window.gtag('event', 'generate_lead', {
        'event_category': 'engagement',
        'event_label': 'clinicgrow_waitlist',
      });
    }
    
    // Send email via EmailJS
    const templateParams = {
      niche: 'ClinicGrow',
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
    <div className="landing-container" style={{background: 'linear-gradient(135deg, #00A896 0%, #028090 100%)'}}>
      <div className="landing-content">
        <div className="logo" style={{color: '#00A896'}}>ClinicGrow</div>
        
        <h1 className="tagline">
          Get 15-25 New Patients Per Month While Focusing on Care
        </h1>
        
        <p className="subtitle">
          Our HIPAA-compliant AI system builds your local authority and fills your schedule—automatically.
        </p>

        <div className="features">
          <div className="feature">
            <span className="feature-icon">✅</span>
            <span><strong>2 SEO-optimized blog posts per day</strong> - Patient education, treatment guides, wellness tips with deep local keyword research. Every post links back to your website.</span>
          </div>
          <div className="feature">
            <span className="feature-icon">✅</span>
            <span><strong>5-10 targeted Twitter posts per day</strong> - Health education content for your local community using keyword targeting for healthcare terms in your area</span>
          </div>
          <div className="feature">
            <span className="feature-icon">✅</span>
            <span><strong>Smart Twitter engagement</strong> - Monitors keywords like "need dentist [city]", "looking for chiropractor", "[treatment] near me" and provides educational responses</span>
          </div>
          <div className="feature">
            <span className="feature-icon">✅</span>
            <span><strong>Automatic Google submission</strong> - Every article instantly indexed for maximum local visibility</span>
          </div>
          <div className="feature">
            <span className="feature-icon">✅</span>
            <span><strong>Niche-specific keyword targeting</strong> - Tracks healthcare hashtags and local health discussions to position you as the trusted local provider</span>
          </div>
          <div className="feature">
            <span className="feature-icon">✅</span>
            <span><strong>HIPAA-compliant & hands-free</strong> - Educational content only, no patient data. Set your practice info once, runs 24/7 while you see patients</span>
          </div>
        </div>

        <div className="pricing">
          <div className="price">$249/month</div>
          <div className="launch-special">
            🎉 Founder's Special: First 100 providers get $179/month FOREVER
          </div>
          
          <button className="cta-button" onClick={handlePreOrder} style={{background: 'linear-gradient(135deg, #00A896 0%, #028090 100%)'}}>
            Pre-Order Now: Pay $49, Lock in $179/Month Forever
          </button>
          
          <div className="urgency">
            Only 67 founder spots remaining!
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
            <button type="submit" className="cta-button secondary" style={{color: '#00A896', borderColor: '#00A896'}}>
              Join Waitlist (Free)
            </button>
          </form>
        ) : (
          <div style={{marginTop: '2rem', padding: '1rem', background: '#d4edda', borderRadius: '10px', color: '#155724'}}>
            ✅ Thanks! We'll email you when ClinicGrow launches!
          </div>
        )}

        <div className="social-proof">
          "We went from page 3 to page 1 on Google for 'dentist Phoenix' in 8 weeks. Now getting 20+ new patient calls per month from people finding our blog. Worth every penny." 
          <br />— Dr. Jennifer K., Family Dentist, Phoenix AZ
        </div>

        <div style={{marginTop: '2rem', color: '#666', fontSize: '0.9rem'}}>
          <p>Perfect for: Dentists • Chiropractors • Med Spas • Physical Therapy • Optometry</p>
        </div>
      </div>
    </div>
  );
};

export default ClinicGrow;


