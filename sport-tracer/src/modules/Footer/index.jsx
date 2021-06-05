import "./index.css";

import facebookIcon from "../../images/icon-facebook.svg";
import youtubeIcon from "../../images/icon-youtube.svg";
import twitterIcon from "../../images/icon-twitter.png";
import mailIcon from "../../images/icon-mail.svg";
import { CustomLink } from "../../components/CustomLink";
import { MobileResponsive } from "../../components/MobileResponsive";

function FooterResponsive({ isMobile }) {
  return !isMobile ? (
    <div className="footer">
      <div className="footer-col-1">
        <div className="app-title">SportTracer</div>
        <div className="follow-icons">
          <img src={facebookIcon} alt="facebookIcon" />
          <img src={youtubeIcon} alt="youtubeIcon" />
          <img src={twitterIcon} alt="twitterIcon" />
        </div>
      </div>
      <div className="footer-col-2">
        <div className="column-title">Support</div>
        <CustomLink
          className="footer-link"
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          text="Contact Us"
        />
        <CustomLink
          className="footer-link"
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          text="FAQ"
        />
        <CustomLink
          className="footer-link"
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          text="Downloads"
        />
      </div>
      <div className="footer-col-3">
        <div className="column-title">SporTracer</div>
        <CustomLink
          className="footer-link"
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          text="About SportTracer"
        />
        <CustomLink
          className="footer-link"
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          text="Design"
        />
        <CustomLink
          className="footer-link"
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          text="Newsroom"
        />
      </div>
      <div className="footer-col-4">
        <div className="newsletter-title">
          <img src={mailIcon} alt="mailIcon" />
          <div>Stay up to date on the latest from SportTracer</div>
        </div>
        <input placeholder="Enter your e-mail address" />
        <button>Sign Up</button>
      </div>
    </div>
  ) : (
    <div className="footer footer-m">
      <div className="title-m">SportTracer</div>
      <div className="follow-icons follow-icons-m">
        <img src={facebookIcon} alt="facebookIcon" />
        <img src={youtubeIcon} alt="youtubeIcon" />
        <img src={twitterIcon} alt="twitterIcon" />
      </div>
      <CustomLink
        className="footer-link-m"
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        text="Contact Us"
      />
      <CustomLink
        className="footer-link-m"
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        text="FAQ"
      />
      <CustomLink
        className="footer-link-m"
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        text="Downloads"
      />
    </div>
  );
}

export const Footer = MobileResponsive(FooterResponsive);
