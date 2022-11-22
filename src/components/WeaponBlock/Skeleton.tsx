import React from "react"
import ContentLoader from "react-content-loader"

export const Skeleton = () => (
  <ContentLoader 
  className="weapon-block"
    speed={2}
    width={280}
    height={460}
    viewBox="0 0 280 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
      
    <rect x="0" y="10" rx="0" ry="0" width="250" height="198" /> 
    <rect x="0" y="237" rx="0" ry="0" width="250" height="33" /> 
    <rect x="3" y="284" rx="10" ry="10" width="250" height="88" /> 
    <rect x="6" y="394" rx="12" ry="12" width="95" height="30" /> 
    <rect x="127" y="387" rx="25" ry="25" width="122" height="45" />
  </ContentLoader>
);

