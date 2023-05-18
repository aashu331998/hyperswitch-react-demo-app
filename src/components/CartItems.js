import demoApp from "../utils/icons/demoApp.svg";
// import image1 from "../utils/icons/mac.svg";
// import image2 from "../utils/icons/pad.svg";
// import image3 from "../utils/icons/iphone.svg";
// import line from "../utils/icons/line.svg";

// const CartList = ({ img, qnt, name, color, amount }) => {
//   return (
//     <div
//       style={{
//         overflow: "hidden",
//         gap: 10,
//         display: "flex",
//         flexDirection: "column",
//       }}
//     >
//       <div
//         style={{
//           padding: 20,
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "space-between",
//           fontFamily: "revert-layer",
//           fontStyle: "normal",
//           fontWeight: 500,
//           fontSize: "20px",
//           lineHeight: "35px",
//           color: "rgba(249, 249, 249, 0.8)",
//           opacity: 0.78,
//         }}
//       >
//         <div
//           style={{
//             display: "flex",
//             alignItems: "center",
//             gap: 40,
//           }}
//         >
//           <img style={{ height: 100 }} src={img} />
//           <div>
//             <div>{name}</div>
//             <div>
//               Color :<span style={{ marginRight: 25 }}> {color} </span>
//               Qty :<span> {qnt} </span>
//             </div>
//           </div>
//         </div>

//         <div style={{ fontSize: 22 }}> {amount}</div>
//       </div>
//       <img style={{ height: 2 }} src={line} />
//     </div>
//   );
// };

// function Cart() {
//   return (
//     <div style={{ width: 80 + "%", maxWidth: 900 }}>
//       <div style={{ fontSize: 26.25, marginBottom: 40 }}>Order Summary </div>
//       <CartList
//         img={image3}
//         qnt="1"
//         name="Apple iPhone 14 (128 GB) - Midnight"
//         color="Blue"
//         amount="$999.99"
//       />
//       <CartList
//         img={image1}
//         qnt="1"
//         name="Apple 2023 MacBook Pro Laptop M2 "
//         color="Silver"
//         amount="$1799.99"
//       />
//       <CartList
//         img={image2}
//         qnt="1"
//         name="Apple iPad Air Blue Black"
//         color="Blue"
//         amount="$899.99"
//       />

//       <div
//         style={{
//           backgroundColor: "hsla(0,0%,73%,.08)",
//           padding: 50,
//           borderRadius: 8,
//           marginTop: 40,
//           fontWeight: 200,
//           color: "#00000080",
//         }}
//       >
//         This is a sample transaction that uses test credentials and does not
//         involve real money.
//       </div>
//     </div>
//   );
// }

const CartWithImage = () => {
  return (
    <div style={{ width: 80 + "%", maxWidth: 800, background: "#ffffff03" }}>
      <img style={{ height: 100 + "%", width: 100 + "%" }} src={demoApp} />
    </div>
  );
};
export default CartWithImage;
