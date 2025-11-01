import React from 'react';
import './TrendingWidget.css';
import xIcon from '../../assets/icons/70fecfca464d6fc970583ef64be077c8f75998ed.svg';
import caretDownIcon from '../../assets/icons/8fcbf4c301bea55740b2db958bb3149a9053f820.svg';
import dividerStroke from '../../assets/icons/82fa2b7526a7dd60c706b14a63dc57fdca7870d0.svg';

interface TrendItem {
  title: string;
  description: string;
  keywords: string;
}

const trendItems: TrendItem[] = [
  {
    title: 'Memorial day',
    description: 'Memorial Day honors fallen service members with parades, concerts, and tributes across the nation. Social conversations highlight unity, gratitude, and freedom, as users share patriotic visuals and remembrance messages celebrating courage and togetherness.',
    keywords: 'Remembrance, Valor, Togetherness, Festivities, Tribute',
  },
  {
    title: 'Sports Therapy',
    description: 'Sports therapy plays a crucial role in helping athletes recover from injuries and enhance their performance. By combining physical rehabilitation with specialized training techniques, sports therapists ensure that individuals can safely return to their favorite activities while minimizing the risk of future injuries.',
    keywords: 'Recovery, Enhancement, Prevention, Rehabilitation, Return',
  },
  {
    title: 'Cultural Beats',
    description: 'Cultural Beats during Memorial Day weekend brought communities together through vibrant parades, lively parties, and heartfelt family gatherings. It was a time to celebrate freedom while honoring the courageous individuals who sacrificed for it.',
    keywords: 'Unity, Valor, Reunion, Festivities, Joy',
  },
  {
    title: 'Film Scores',
    description: 'Film scores play a crucial role in shaping the emotional landscape of movies. They enhance storytelling by evoking feelings and setting the tone, whether it\'s the suspense of a thriller or the joy of a romantic comedy. Iconic composers like Hans Zimmer and John Williams have created unforgettable melodies that resonate with audiences long after the credits roll.',
    keywords: 'Emotion, Heroes, Gatherings, Celebration, Joy',
  },
];

const TrendingWidget: React.FC = () => {
  return (
    <div className="trending-widget">
      <div className="trending-widget__header">
        <img src={xIcon} alt="Close" className="trending-widget__close" />
        <div className="trending-widget__title-wrapper">
          <span className="trending-widget__title-text">Trending in</span>
          <div className="trending-widget__select">
            <span>Germany</span>
            <img src={caretDownIcon} alt="Dropdown" />
          </div>
        </div>
      </div>
      <div className="trending-widget__content">
        {trendItems.map((item, index) => (
          <div key={index} className="trend-item">
            <div className="trend-item__content">
              <h3 className="trend-item__title">{item.title}</h3>
              <p className="trend-item__description">{item.description}</p>
            </div>
            <p className="trend-item__keywords">
              <strong>Keywords:</strong> {item.keywords}
            </p>
            {index < trendItems.length - 1 && (
              <div className="trend-item__divider">
                <img src={dividerStroke} alt="Divider" />
              </div>
            )}
          </div>
        ))}
        <div className="trending-widget__scrollbar">
          <div className="trending-widget__scrollbar-track">
            <div className="trending-widget__scrollbar-thumb" />
          </div>
        </div>
      </div>
      <div className="trending-widget__shadow" />
    </div>
  );
};

export default TrendingWidget;

