import React from 'react';
import './PlatformNavigation.css';
import logoIcon from '../assets/icons/f3aae7a0dbf6f44dfd76bedd856fba2f84e12d8b.svg';
import unifiedAnalyticsIcon from '../assets/icons/8ea4e6f493a50f91f6a03c59a7009c5507635cb9.svg';
import publisherIcon from '../assets/icons/ca4d626fbd6e60685c0fbbfc60de1e45e205996e.svg';
import careIcon from '../assets/icons/190c0e9a7b5c7c206e85b9b6440f4f0a01459011.svg';
import contentIcon from '../assets/icons/bb41040efc634b86e2b4b31831d835c7d646f41d.svg';
import influencersIcon from '../assets/icons/75a92c0fee581bfc8c211a3d417a2fbc2f73b59f.svg';
import ratingReviewsIcon from '../assets/icons/c00ec6e3daaa1f0ac7446bca67e204d6545f0e9b.svg';
import botIcon from '../assets/icons/767ba94dd01f56ec8b2c2cec10ee50ff9a37004b.svg';
import agentIcon from '../assets/icons/6936d070646c7a25ec1ae9f4f2baca6979885e52.svg';
import plusIcon from '../assets/icons/41d639a135f60ef665aa9b1cdb9469e933f0680c.svg';
import helpIcon from '../assets/icons/3ed4e6a440f6d3cc2a93fcb8549323372f5a9f56.svg';
import settingsIcon from '../assets/icons/ff0ab7824fd27d7e26a9d6e96c8df957666da2c2.svg';
import avatarImage from '../assets/images/9ce1b58aecd4ef61664409fcdd66adf48254ccb2.png';

interface NavItem {
  id: string;
  label: string;
  icon: string;
  active?: boolean;
}

const navItems: NavItem[] = [
  { id: 'unified-analytics', label: 'Unified Analytics', icon: unifiedAnalyticsIcon, active: true },
  { id: 'publisher', label: 'Publisher', icon: publisherIcon },
  { id: 'care', label: 'CARE', icon: careIcon },
  { id: 'content', label: 'Content', icon: contentIcon },
  { id: 'influencers', label: 'Influencers', icon: influencersIcon },
  { id: 'rating-reviews', label: 'Rating & Reviews', icon: ratingReviewsIcon },
  { id: 'bot', label: 'Bot', icon: botIcon },
  { id: 'agent', label: 'Agent', icon: agentIcon },
];

// Note: Community and UCG icons were not available from Figma server

const PlatformNavigation: React.FC = () => {
  return (
    <div className="platform-navigation">
      <div className="platform-navigation__container">
        {/* Logo */}
        <div className="platform-navigation__logo">
          <img src={logoIcon} alt="Emplifi" />
        </div>

        {/* Divider */}
        <div className="platform-navigation__divider" />

        {/* Scrollable Apps Area */}
        <div className="platform-navigation__scroll-area">
          <div className="platform-navigation__apps">
            {navItems.map((item) => (
              <button
                key={item.id}
                className={`platform-navigation__app ${item.active ? 'platform-navigation__app--active' : ''}`}
                title={item.label}
              >
                <div className="platform-navigation__app-icon">
                  <img src={item.icon} alt={item.label} />
                </div>
                <span className="platform-navigation__app-label">{item.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="platform-navigation__bottom">
          {/* Add Data Source Button */}
          <button className="platform-navigation__add-button" title="Add data source">
            <img src={plusIcon} alt="Add" />
          </button>

          {/* Divider */}
          <div className="platform-navigation__divider" />

          {/* General Actions */}
          <div className="platform-navigation__general">
            <button className="platform-navigation__action" title="Help">
              <img src={helpIcon} alt="Help" />
              <span>Help</span>
            </button>
            <button className="platform-navigation__action" title="Settings">
              <img src={settingsIcon} alt="Settings" />
              <span>Settings</span>
            </button>
            <div className="platform-navigation__user">
              <div className="platform-navigation__avatar">
                <img src={avatarImage} alt="User" />
                <div className="platform-navigation__avatar-badge">12</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlatformNavigation;

