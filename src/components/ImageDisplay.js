import React, { Component } from "react"

const ImageDisplay = ({ images }) =>
  <ul>
    {images.map(image =>
      <li key={image.id}>
        <img src={image.img_src} alt="{image.earth_data}" />
      </li>
    )}
  </ul>

export default ImageDisplay
