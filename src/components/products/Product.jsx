import { Info } from 'lucide-react';

export default function Product({ product, setShowProduct }) {
  return (
    <>
      <div className="overlay" onClick={() => setShowProduct(false)}>
        <div className="product-item">
          <div className="product-item-content product-item-block">
            <div className="product-item-image-container">
              <img src={product.images[0]} alt={product.title} />
            </div>
            <div className="product-item-content-information">
              <p className="product-category">{product.category}</p>
              <h3>{product.title}</h3>
              <p>
                Stars <span className="product-rating">{product.rating}</span>
                <span className="product-reviews-amount">({product.reviews.length} reviews)</span>
              </p>
              <p className="product-price">
                R{product.price}{' '}
                <span className="stock-indicator">{product.availabilityStatus}</span>
              </p>
              <p className="product-description">{product.description}</p>
            </div>
          </div>
          <div className="product-item-about product-item-block">
            <div className="about-header-section">
              <Info />
              <h3>About this product</h3>
            </div>
            <table>
              <tr>
                <td className="info-title">Brand</td>
                <td className="info-detail">{product.brand}</td>
              </tr>
              <tr>
                <td className="info-title">Stock</td>
                <td className="info-detail">{product.stock}</td>
              </tr>
              <tr>
                <td className="info-title">Tags</td>
                <td className="info-detail">
                  {product.tags.map((tag) => (
                    <span className="info-detail-tag" key={tag}>
                      {tag}
                    </span>
                  ))}

                  {/* <span className="info-detail-tag">Mascara</span> */}
                </td>
              </tr>
              <tr>
                <td className="info-title">SKU</td>
                <td className="info-detail">{product.sku}</td>
              </tr>
              <tr>
                <td className="info-title">Weight</td>
                <td className="info-detail">{product.weight}</td>
              </tr>
              <tr>
                <td className="info-title">Width</td>
                <td className="info-detail">{product.dimensions.width}cm</td>
              </tr>
              <tr>
                <td className="info-title">Height</td>
                <td className="info-detail">{product.dimensions.height}cm</td>
              </tr>
              <tr>
                <td className="info-title">Depth</td>
                <td className="info-detail">{product.dimensions.depth}cm</td>
              </tr>
              <tr>
                <td className="info-title">Warrenty</td>
                <td className="info-detail">{product.warrantyInformation}</td>
              </tr>
              <tr>
                <td className="info-title">Shipping information</td>
                <td className="info-detail">{product.shippingInformation}</td>
              </tr>
              <tr>
                <td className="info-title">Return policy</td>
                <td className="info-detail">{product.returnPolicy}</td>
              </tr>
            </table>
          </div>
          {/* <div className="product-item-reviews"></div> */}
        </div>
      </div>
    </>
  );
}
