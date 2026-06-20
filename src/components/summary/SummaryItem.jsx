export default function SummaryItem({}) {
  return (
    <>
      <div className="summary-item">
        <div className="summary-img-container">
          <img src="../../../public/box.png" alt="" />
        </div>
        <div className="summary-information">
          <p className="summary-title">Total Products</p>
          <p className="summary-amount">194</p>
          <p className="summary-description">All available products</p>
        </div>
      </div>
    </>
  );
}
