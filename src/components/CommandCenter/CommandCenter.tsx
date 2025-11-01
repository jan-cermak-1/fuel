import React from 'react';
import './CommandCenter.css';
import Header from '../Header/Header';
import ValueWidget from '../Widgets/ValueWidget/ValueWidget';
import TrendingWidget from '../Widgets/TrendingWidget/TrendingWidget';

const CommandCenter: React.FC = () => {
  return (
    <div className="command-center">
      <div className="command-center__area">
        <Header teamName="(TEAM NAME)" />
        <div className="command-center__content">
          <div className="command-center__page-wrap">
            {/* Upper Row - Metric Cards */}
            <div className="command-center__upper-row">
              <div className="command-center__metric-column">
                <ValueWidget
                  title="Number of engagements evolution"
                  period="Last 30 Days"
                  badge="POST LEVEL"
                  value="931"
                  unit="Engagements"
                  change="+26%"
                  changePositive={true}
                />
                <ValueWidget
                  title="Cross platform followers evolution"
                  period="Last 30 Days"
                  badge="PROFILE LEVEL"
                  value="138.04 M"
                  unit="Followers"
                  change="+26%"
                  changePositive={true}
                />
              </div>
              <div className="command-center__metric-column">
                <ValueWidget
                  title="Number of impressions evolution"
                  period="Last 30 Days"
                  badge="POST LEVEL"
                  value="40 734"
                  unit="Content impressions"
                  change="+26%"
                  changePositive={true}
                />
                <ValueWidget
                  title="Number of content evolution"
                  period="Last 30 Days"
                  badge="POST LEVEL"
                  value="203"
                  unit="Content pieces"
                  change="+26%"
                  changePositive={true}
                />
              </div>
              <div className="command-center__trending-column">
                <TrendingWidget />
              </div>
            </div>

            {/* Objectives Section */}
            <div className="command-center__objectives-section">
              <div className="command-center__objectives-header">
                <h2 className="command-center__objectives-title">Objectives</h2>
                <a href="#" className="command-center__link">Start with new objective</a>
                <div className="command-center__divider" />
                <a href="#" className="command-center__link">
                  Go to the board
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M6 3L12 9L6 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
              <div className="command-center__objectives-grid">
                {/* Performance Measurement Cards */}
                <div className="command-center__performance-card">
                  <div className="command-center__performance-header">
                    <h3 className="command-center__performance-title">Performance Measurement & ROI Optimization</h3>
                    <button className="command-center__performance-action">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M1 7H13M7 1V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </button>
                  </div>
                  <div className="command-center__performance-info">
                    <span>Last 30 Days</span>
                    <div className="command-center__badge command-center__badge--success">
                      <span>ON TRACK</span>
                    </div>
                  </div>
                  <div className="command-center__performance-content">
                    <div className="command-center__performance-value">
                      <span className="command-center__performance-number">48.3</span>
                      <span className="command-center__performance-change command-center__performance-change--positive">↑ +21%</span>
                    </div>
                    <p className="command-center__performance-metric">Customer Acquisition Efficiency Index (CAEI)</p>
                    <div className="command-center__performance-goal">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5"/>
                        <path d="M8 4V8L10 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                      <span>Below 50 CAEI</span>
                    </div>
                  </div>
                </div>
                
                <div className="command-center__performance-card">
                  <div className="command-center__performance-header">
                    <h3 className="command-center__performance-title">Performance Measurement & ROI Optimization</h3>
                    <button className="command-center__performance-action">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M1 7H13M7 1V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </button>
                  </div>
                  <div className="command-center__performance-info">
                    <span>Last 30 Days</span>
                    <div className="command-center__badge command-center__badge--danger">
                      <span>OFF TRACK</span>
                    </div>
                  </div>
                  <div className="command-center__performance-content">
                    <div className="command-center__performance-value">
                      <span className="command-center__performance-number">12.2</span>
                      <span className="command-center__performance-change command-center__performance-change--negative">↓ -74%</span>
                    </div>
                    <p className="command-center__performance-metric">Customer Acquisition Efficiency Index (CAEI)</p>
                    <div className="command-center__performance-goal">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5"/>
                        <path d="M8 4V8L10 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                      <span>Below 50 CAEI</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommandCenter;

