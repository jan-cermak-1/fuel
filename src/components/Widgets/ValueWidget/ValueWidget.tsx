import React from 'react';
import './ValueWidget.css';
import arrowUpIcon from '../../assets/icons/26ace46a7ee7233efdf204115c6a2e2dfa0e5940.svg';
import lineChartImage from '../../assets/charts/419a48d1deb4807bf24f90379c78b8358b1b63ac.svg';

interface ValueWidgetProps {
  title: string;
  period: string;
  badge: string;
  value: string;
  unit: string;
  change: string;
  changePositive: boolean;
}

const ValueWidget: React.FC<ValueWidgetProps> = ({
  title,
  period,
  badge,
  value,
  unit,
  change,
  changePositive,
}) => {
  return (
    <div className="value-widget">
      <div className="value-widget__header">
        <div className="value-widget__header-content">
          <p className="value-widget__title">{title}</p>
        </div>
        <div className="value-widget__additional-info">
          <div className="value-widget__aggregation">
            <span>{period}</span>
          </div>
          <div className="value-widget__badges">
            <div className="value-widget__badge">
              <span>{badge}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="value-widget__container">
        <div className="value-widget__value">
          <div className="value-widget__metric">
            <p className="value-widget__value-number">{value}</p>
            <p className="value-widget__value-unit">{unit}</p>
          </div>
          <div className="value-widget__relative-value">
            <div className={`value-widget__change ${changePositive ? 'value-widget__change--positive' : 'value-widget__change--negative'}`}>
              <img src={arrowUpIcon} alt={changePositive ? 'Increase' : 'Decrease'} />
              <span>{change}</span>
            </div>
            <span className="value-widget__change-text">vs previous period</span>
          </div>
        </div>
      </div>
      <div className="value-widget__chart">
        <div className="value-widget__chart-container">
          <div className="value-widget__chart-flip">
            <img src={lineChartImage} alt="Chart" className="value-widget__chart-image" />
          </div>
        </div>
        <div className="value-widget__chart-dates">
          <span>Jan 01</span>
          <span>Jan 31</span>
        </div>
      </div>
      <div className="value-widget__shadow" />
    </div>
  );
};

export default ValueWidget;

