import { Box, Funnel, Heart } from 'lucide-react';

export default function SummaryItem({ summaryData }) {
  const icon =
    summaryData.icon === 'box' ? (
      <Box color="#2563EB" />
    ) : summaryData.icon === 'funnel' ? (
      <Funnel color="#10B981" />
    ) : summaryData.icon === 'heart' ? (
      <Heart color="#EF4444" />
    ) : (
      ''
    );

  switch (icon) {
  }

  return (
    <>
      <div className="summary-item">
        <div className="summary-img-container">{icon}</div>
        <div className="summary-information">
          <p className="summary-amount">{summaryData.productsLength}</p>
          <p className="summary-title">{summaryData.title}</p>
          <p className="summary-description">{summaryData.subtext}</p>
        </div>
      </div>
    </>
  );
}
