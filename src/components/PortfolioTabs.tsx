import { useState } from 'react';
import { labs } from '../data/labs';
import { works } from '../data/works';
import { WorkList } from './WorkList';

const tabs = [
  { id: 'works', label: 'My Works', items: works },
  { id: 'laboratory', label: 'Laboratory', items: labs },
] as const;

type TabId = (typeof tabs)[number]['id'];

export function PortfolioTabs() {
  const [activeTab, setActiveTab] = useState<TabId>('works');
  const activeItems = tabs.find((tab) => tab.id === activeTab)?.items ?? works;

  return (
    <section className="portfolio">
      <div className="portfolio-tabs-shell">
        <div className="portfolio-tabs" role="tablist" aria-label="Portfolio sections">
          {tabs.map((tab) => {
            const isActive = tab.id === activeTab;

            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                id={`tab-${tab.id}`}
                aria-selected={isActive}
                aria-controls={`panel-${tab.id}`}
                className={`portfolio-tabs__tab${isActive ? ' portfolio-tabs__tab--active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        <div
          className="portfolio-tabs__panel"
          role="tabpanel"
          id={`panel-${activeTab}`}
          aria-labelledby={`tab-${activeTab}`}
        >
          <WorkList items={activeItems} />
        </div>
      </div>
    </section>
  );
}
