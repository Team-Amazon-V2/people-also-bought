import React from "react";
import { Rating } from "react-simple-star-rating";

class RelatedProducts extends React.Component {
   state = {
      loading: true,
      products: null,
      loadingMsg: "loading related products...",
      transform: "translateX(0)",
      count: 0,
   };

   componentDidMount() {
      fetch("http://localhost:3506/")
         .then((res) => res.json())
         .then((data) => {
            console.log(data);
            this.setState({ loading: false, products: data });
         });
   }

   render() {
      const starSettings = {
         allowHover: false,
         size: "18px",
         readonly: true,
         allowHalfIcon: false,
         fillColor: "#FF9900",
      };

      const moveRight = (e) => {
         if (this.state.count > -1400) {
            this.state.count += -400;
         }
         this.setState({ transform: `translateX(${this.state.count}px)` });
      };

      const moveLeft = (e) => {
         if (this.state.count < 0) {
            this.state.count += 400;
         }
         this.setState({ transform: `translateX(${this.state.count}px)` });
      };

      if (this.state.loading) {
         return <h1>{this.state.loadingMsg}</h1>;
      }
      return (
         <div className="people-also-bought">
            <h2>Products customers also bought</h2>
            <div className="carousel">
               <button id="prevBtn" onClick={moveLeft}>
                  &lt;
               </button>
               <div className="slider">
                  <div className="innerSlider" style={{ transform: `${this.state.transform}` }}>
                     {this.state.products.map((product) => {
                        return (
                           <div className="productCard" key={product.id}>
                              <img id="pic" src={product.picture} />
                              <a id="name" href="#">
                                 {product.product_name}
                              </a>
                              <div>
                                 <Rating initialValue={Number(product.rating)} {...starSettings} />
                                 <u id="revNum">{product.reviews}</u>
                              </div>
                              <div id="price">${product.price}</div>
                              <div id="shipping">Prime FREE Delivery</div>
                           </div>
                        );
                     })}
                  </div>
               </div>
               <button id="nextBtn" onClick={moveRight}>
                  &gt;
               </button>
            </div>
         </div>
      );
   }
}

export default RelatedProducts;
