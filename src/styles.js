import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

export const MapContainer = styled.div`  
  display: flex;
  width: 70vw;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
 
`;

export const Map = styled.div`
  margin: 1rem auto;
  width: 60%;
  height: 90%;
  
  svg {
    stroke: #fff;

    // All layers are just path elements
    path {
      fill: yellow;
      cursor: pointer;
      outline: none;

      // When a layer is hovered
      &:hover {
        fill: #07A614;
      }

      // When a layer is focused.
      &:focus {
        fill: #green;
      }

      // When a layer is 'checked' (via checkedLayers prop).
      &[aria-checked='true'] {
        fill: #4169E1;
      }

      // When a layer is 'selected' (via currentLayers prop).
      &[aria-current='true'] {
        fill: red;
      }

      // You can also highlight a specific layer via it's id
      &[id=""] {
        fill: rgba(56,43,168,0.6);
      }
    }
  }
`;