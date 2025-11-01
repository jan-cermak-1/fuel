import React from 'react';
import './Notifications.css';
import notificationIcon from '../assets/icons/51016e237f4d2f26741154a5f2b78826b3ac164e.svg';
import checkmarkIcon from '../assets/icons/bcf67655703346aae1eae65d54e4f9f50c9a4441.svg';
import savedSearchesIcon from '../assets/icons/9e813ad9f7b7fad106075afac6b35dea61ce7b99.svg';
import notificationImage from '../assets/images/1939ea4533bf3e507bfe41f4087c826088619571.png';
import caretDownIcon from '../assets/icons/8fcbf4c301bea55740b2db958bb3149a9053f820.svg';

interface Notification {
  id: string;
  headline: string;
  message: string;
  time: string;
  image?: boolean;
  read?: boolean;
}

const notifications: Notification[] = [
  {
    id: '1',
    headline: 'Say Hello to New Emplifi platform!',
    message: 'We worked hard during this past two week to bring this amazing change of your UI. Take a time and enjoy this prototype, this is the future of our new platform.',
    time: '1 day ago',
    image: true,
    read: false,
  },
  {
    id: '2',
    headline: 'Best performing post to focus on',
    message: 'Best performing post to schedule',
    time: '1 day ago',
    read: false,
  },
  {
    id: '3',
    headline: 'Case Time to assign has been breached!',
    message: 'Case #1342',
    time: '1 day ago',
    read: false,
  },
  {
    id: '4',
    headline: 'Case Time to assign has been breached!',
    message: 'Case #1342',
    time: '1 day ago',
    read: false,
  },
  {
    id: '5',
    headline: 'Case Time to assign has been breached!',
    message: 'Case #1342',
    time: '1 day ago',
    read: false,
  },
  {
    id: '6',
    headline: 'Case Time to assign has been breached!',
    message: 'Case #1342',
    time: '1 day ago',
    read: false,
  },
  {
    id: '7',
    headline: 'Say Hello to Paid Analytics, a Brand New Module in Suite!',
    message: 'Paid Analytics is a new module for ads analysis and reporting. It allows you to connect your ads accounts and analyze your paid campaigns performance.',
    time: '1 day ago',
    read: false,
  },
];

const Notifications: React.FC = () => {
  return (
    <div className="notifications">
      <div className="notifications__header">
        <div className="notifications__header-left">
          <h2 className="notifications__title">Notifications</h2>
          <div className="notifications__divider" />
          <div className="notifications__select">
            <span>Unread</span>
            <img src={caretDownIcon} alt="Dropdown" />
          </div>
        </div>
        <div className="notifications__header-right">
          <button className="notifications__action-button" title="Saved Searches">
            <img src={savedSearchesIcon} alt="Saved Searches" />
          </button>
          <button className="notifications__action-button" title="Saved Searches">
            <img src={checkmarkIcon} alt="Mark all as read" />
          </button>
        </div>
      </div>
      <div className="notifications__list">
        {notifications.map((notification) => (
          <div key={notification.id} className={`notification ${notification.read ? 'notification--read' : ''}`}>
            <div className="notification__icon">
              <img src={notificationIcon} alt="Notification" />
            </div>
            <div className="notification__content">
              <div className="notification__header-row">
                <h3 className="notification__headline">{notification.headline}</h3>
                <div className="notification__time-row">
                  <span className="notification__time">{notification.time}</span>
                  <button className="notification__mark-read" title="Mark as read">
                    <img src={checkmarkIcon} alt="Mark as read" />
                  </button>
                </div>
              </div>
              <div className="notification__message-area">
                {notification.image && (
                  <div className="notification__image">
                    <img src={notificationImage} alt="Notification" />
                  </div>
                )}
                <p className="notification__message">{notification.message}</p>
              </div>
            </div>
          </div>
        ))}
        <div className="notifications__scrollbar">
          <div className="notifications__scrollbar-track">
            <div className="notifications__scrollbar-thumb" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;

