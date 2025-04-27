"use client";

import { useState } from "react";
import Link from "next/link";
import "./styles/footer.css";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function Footer() {
  const [openSection, setOpenSection] = useState(null);
  const toggleSection = (section) => {
    if (openSection === section) {
      setOpenSection(null);
    } else {
      setOpenSection(section);
    }
  };

  return (
    <footer className="footer">
      <div className="container footer-container">
        {/* Top Section */}
        <div className="footer-top">
          {/* Newsletter Section */}
          <div className="newsletter-section">
            <h3 className="section-title">BE THE FIRST TO KNOW</h3>
            <p className="section-text">Sign up for updates from mettā muse.</p>
            <div className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your e-mail..."
                className="newsletter-input"
              />
              <button className="newsletter-button">SUBSCRIBE</button>
            </div>
          </div>

          {/* Contact Section - Hidden on mobile, visible on desktop */}
          <div>
            <div className="contact-section">
              <h3 className="section-title">CONTACT US</h3>
              <p className="section-text">+44 221 133 5360</p>
              <p className="section-text">customercare@mettamuse.com</p>
            </div>

            {/* Currency Section */}
            <div className="currency-section">
              <h3 className="section-title">CURRENCY</h3>
              <div className="currency-option">
                <Image
                  src="/images/USflag.svg"
                  alt="us flag"
                  width={20}
                  height={20}
                  loading="lazy"
                />

                <span className="section-text">• USD</span>
              </div>
              <p className="currency-note">
                Transactions will be completed in Euros and a currency reference
                is available on hover.
              </p>
            </div>
          </div>
          {/* Mobile Contact Section - Visible on mobile only */}
          <div className="mobile-contact">
            <h3 className="section-title">CALL US</h3>
            <p className="section-text">
              +44 221 133 5360 • customercare@mettamuse.com
            </p>
          </div>
        </div>

        {/* Middle Section */}
        <div className="footer-middle">
          {/* Brand Section */}
          <div className="footer-section">
            <div
              className="section-header"
              onClick={() => toggleSection("brand")}
            >
              <h3 className="brand-title">mettā muse</h3>
              <ChevronDown
                style={{
                  rotate: openSection === "brand" ? "180deg" : "0deg",
                }}
                className="arrow"
              />
            </div>
            <div
              className={`section-content ${
                openSection === "brand" ? "open" : ""
              }`}
            >
              <Link href="#" className="footer-link">
                About Us
              </Link>
              <Link href="#" className="footer-link">
                Stories
              </Link>
              <Link href="#" className="footer-link">
                Artisans
              </Link>
              <Link href="#" className="footer-link">
                Boutiques
              </Link>
              <Link href="#" className="footer-link">
                Contact Us
              </Link>
              <Link href="#" className="footer-link">
                EU Compliances Docs
              </Link>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="footer-section">
            <div
              className="section-header"
              onClick={() => toggleSection("quickLinks")}
            >
              <h3 className="section-title">QUICK LINKS</h3>
              <ChevronDown
                style={{
                  rotate: openSection === "quickLinks" ? "180deg" : "0deg",
                }}
                className="arrow"
              />
            </div>
            <div
              className={`section-content ${
                openSection === "quickLinks" ? "open" : ""
              }`}
            >
              <Link href="#" className="footer-link">
                Orders & Shipping
              </Link>
              <Link href="#" className="footer-link">
                Join/Login as a Seller
              </Link>
              <Link href="#" className="footer-link">
                Payment & Pricing
              </Link>
              <Link href="#" className="footer-link">
                Return & Refunds
              </Link>
              <Link href="#" className="footer-link">
                FAQs
              </Link>
              <Link href="#" className="footer-link">
                Privacy Policy
              </Link>
              <Link href="#" className="footer-link">
                Terms & Conditions
              </Link>
            </div>
          </div>

          {/* Follow Us and Payment Methods Section */}
          <div>
            <div className="footer-section">
              <div
                className="section-header"
                onClick={() => toggleSection("followUs")}
              >
                <h3 className="section-title">FOLLOW US</h3>
                <ChevronDown
                  style={{
                    rotate: openSection === "followUs" ? "180deg" : "0deg",
                  }}
                  className="arrow"
                />
              </div>
              <div
                className={`section-content ${
                  openSection === "followUs" ? "open" : ""
                }`}
              >
                <div className="social-icons">
                  <Link href="#" className="social-icon">
                    <span className="sr-only">Instagram</span>
                    <Image
                      src="/images/Insta.svg"
                      alt="instagram"
                      width={45}
                      height={45}
                      loading="lazy"
                    />
                  </Link>
                  <Link href="#" className="social-icon">
                    <span className="sr-only">LinkedIn</span>
                    <Image
                      src="/images/linkedin.svg"
                      alt="linkedIn"
                      width={45}
                      height={45}
                      loading="lazy"
                    />
                  </Link>
                </div>
              </div>
            </div>

            <div className="footer-section">
              <div className="section-header">
                <h3 className="section-title">mettā muse ACCEPTS</h3>
              </div>
              <div className="payment-methods">
                <div className="payment-icon">
                  <Image
                    src="/images/gPay.svg"
                    alt="Google Pay (GPay)"
                    width={50}
                    height={50}
                    loading="lazy"
                  />
                </div>
                <div className="payment-icon">
                  <Image
                    src="/images/masterCard.svg"
                    alt="Mastercard"
                    width={50}
                    height={50}
                    loading="lazy"
                  />
                </div>
                <div className="payment-icon">
                  <Image
                    src="/images/paypal.svg"
                    alt="PayPal"
                    width={50}
                    height={50}
                    loading="lazy"
                  />
                </div>
                <div className="payment-icon">
                  <Image
                    src="/images/amex.svg"
                    alt="American Express (Amex)"
                    width={50}
                    height={50}
                    loading="lazy"
                  />
                </div>
                <div className="payment-icon">
                  <Image
                    src="/images/ipay.svg"
                    alt="Apple Pay"
                    width={50}
                    height={50}
                    loading="lazy"
                  />
                </div>
                <div className="payment-icon">
                  <Image
                    src="/images/pay.svg"
                    alt="Shop Pay"
                    width={50}
                    height={50}
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="copyright">
          Copyright © 2023 mettamuse. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
