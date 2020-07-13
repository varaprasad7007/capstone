import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    const openMenu = () => {
        document.querySelector(".sidebar").classList.add("open");
      }
      const closeMenu = () => {
        document.querySelector(".sidebar").classList.remove("open")
      }

    return (
        <div className="grid-container">
          <header className="header">
            <div className="brand">
              <button onClick={openMenu}>
                &#9776;
            </button>
              <a href="index.html">amazona</a>
            </div>
            <div className="header-links">
              <a href="cart.html">Cart</a>
              <a href="signin.html">Sign In</a>
            </div>
          </header>
          <aside className="sidebar">
            <h3>Shopping Categories</h3>
            <button className="sidebar-close-button" onClick={closeMenu}>x</button>
            <ul>
              <li>
                <a href="index.html">Pants</a>
              </li>
    
              <li>
                <a href="index.html">Shirts</a>
              </li>
    
            </ul>
          </aside>
          <main className="main">
            <div className="content">
              <ul className="products">
                <li>
                  <div className="product">
                    <img className="product-image" src="/images/d1.jpg" alt="product" />
                    <div className="product-name">
                      <a href="product.html">Slim Shirt</a>
                    </div>
                    <div className="product-brand">Nike</div>
                    <div className="product-price">$60</div>
                    <div className="product-rating">4.5 Stars (10 Reviews)</div>
                  </div>
                </li>
                <li>
                  <div className="product">
                    <img className="product-image" src="/images/d1.jpg" alt="product" />
                    <div className="product-name">
                      <a href="product.html">Slim Shirt</a>
                    </div>
                    <div className="product-brand">Nike</div>
                    <div className="product-price">$60</div>
                    <div className="product-rating">4.5 Stars (10 Reviews)</div>
                  </div>
                </li>
                <li>
                  <div className="product">
                    <img className="product-image" src="/images/d1.jpg" alt="product" />
                    <div className="product-name">
                      <a href="product.html">Slim Shirt</a>
                    </div>
                    <div className="product-brand">Nike</div>
                    <div className="product-price">$60</div>
                    <div className="product-rating">4.5 Stars (10 Reviews)</div>
                  </div>
                </li>
                <li>
                  <div className="product">
                    <img className="product-image" src="/images/d1.jpg" alt="product" />
                    <div className="product-name">
                      <a href="product.html">Slim Shirt</a>
                    </div>
                    <div className="product-brand">Nike</div>
                    <div className="product-price">$60</div>
                    <div className="product-rating">4.5 Stars (10 Reviews)</div>
                  </div>
                </li>
                <li>
                  <div className="product">
                    <img className="product-image" src="/images/d1.jpg" alt="product" />
                    <div className="product-name">
                      <a href="product.html">Slim Shirt</a>
                    </div>
                    <div className="product-brand">Nike</div>
                    <div className="product-price">$60</div>
                    <div className="product-rating">4.5 Stars (10 Reviews)</div>
                  </div>
                </li>
                <li>
                  <div className="product">
                    <img className="product-image" src="/images/d1.jpg" alt="product" />
                    <div className="product-name">
                      <a href="product.html">Slim Shirt</a>
                    </div>
                    <div className="product-brand">Nike</div>
                    <div className="product-price">$60</div>
                    <div className="product-rating">4.5 Stars (10 Reviews)</div>
                  </div>
                </li>
    
              </ul>
            </div>
    
          </main>
          <footer className="footer">
            All right reserved.
        </footer>
        </div>
      );
    }
    
    export default App;



//   return (
//     <div classNameNameName="grid-container">
//         <header classNameName="header">
//           <div classNameName="brand">
//               <button onclick="openMenu()">
//                   &#9776;
//               </button>
//               <a href="index.html">amazona</a>
//           </div>
//           <div classNameName="header-links">
//               <a href="cart.html">Cart</a>
//               <a href="signin.html">sign In</a>
//           </div>
//         </header>
//         <aside classNameName="sidebar">
//             <h3>Shopping Categories</h3>
//             <button classNameName="sidebar-close-button" onclick="closeMenu()">X
//              </button>
//             <ul>
//                 <li>
//                     <a href="index.html">pants</a>
//                 </li>
//                 <li>
//                     <a href="index.html">Shirts</a>
//                 </li>
//             </ul>
//         </aside>
//  <main classNameName="main">
//      <div classNameName="content">
//          <ul classNameName="products">
//              <li>
//                  <div classNameName="product">
//                      <img classNameName="product-image" src="images/d1.jpg" alt="products">
//                      <div classNameName="product-name">
//                          <a href="product.html">Slim shirt</a>
//                          </div>
//                      <div classNameName="product-brand">Nike</div>
//                      <div classNameName="product-price">$60</div>
//                      <div classNameName="product-rating">4.5 stars (10 reviews)</div>
//                  </div>
//              </li>
//              <li>
//                 <div classNameName="product">
//                     <img classNameName="product-image" src="images/d1.jpg" alt="products">
//                     <div classNameName="product-name">
//                         <a href="product.html">Slim shirt</a>
//                         </div>
//                     <div classNameName="product-brand">Nike</div>
//                     <div classNameName="product-price">$60</div>
//                     <div classNameName="product-rating">4.5 stars (10 reviews)</div>
//                 </div>
//             </li>
//             <li>
//                 <div classNameName="product">
//                     <img classNameName="product-image" src="images/d1.jpg" alt="products">
//                     <div classNameName="product-name">
//                         <a href="product.html">Slim shirt</a>
//                         </div>
//                     <div classNameName="product-brand">Nike</div>
//                     <div classNameName="product-price">$60</div>
//                     <div classNameName="product-rating">4.5 stars (10 reviews)</div>
//                 </div>
//             </li>
//             <li>
//                 <div classNameName="product">
//                     <img classNameName="product-image" src="images/d1.jpg" alt="products">
//                     <div classNameName="product-name">
//                         <a href="product.html">Slim shirt</a>
//                         </div>
//                     <div classNameName="product-brand">Nike</div>
//                     <div classNameName="product-price">$60</div>
//                     <div classNameName="product-rating">4.5 stars (10 reviews)</div>
//                 </div>
//             </li>
//             <li>
//                 <div classNameName="product">
//                     <img classNameName="product-image" src="images/d1.jpg" alt="products">
//                     <div classNameName="product-name">
//                         <a href="product.html">Slim shirt</a>
//                         </div>
//                     <div classNameName="product-brand">Nike</div>
//                     <div classNameName="product-price">$60</div>
//                     <div classNameName="product-rating">4.5 stars (10 reviews)</div>
//                 </div>
//             </li>
//             <li>
//                 <div classNameName="product">
//                     <img classNameName="product-image" src="images/d1.jpg" alt="products">
//                     <div classNameName="product-name">
//                         <a href="product.html">Slim shirt</a>
//                         </div>
//                     <div classNameName="product-brand">Nike</div>
//                     <div classNameName="product-price">$60</div>
//                     <div classNameName="product-rating">4.5 stars (10 reviews)</div>
//                 </div>
//             </li>
//          </ul>
//      </div>

// </main>
//  <footer classNameName= "footer">
//      All right reserved
//  </footer>
 
//   );
// }

// export default App;
