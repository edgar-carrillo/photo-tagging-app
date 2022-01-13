import styled from 'styled-components';

const CrosshairDot = styled.div`
  position: absolute;
  background-color: red;
  width: 5px;
  height: 5px;
  border-radius: 50%;
`;

const Crosshair = ({ className }) => {
  return (
    <div className={className}>
      <CrosshairDot />
    </div>
  );
};

const StyledCrosshair = styled(Crosshair)`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 5px solid white;
  box-sizing: border-box;
  background-color: rgba(255, 0, 0, 0.1);
  z-index: 1;

  ${({ isVisible, left, top }) => {
    if (isVisible) {
      return `
    opacity: 1;
    top: ${top - 50}px;
    left: ${left - 50}px;
    `;
    }
  }}
`;

export default StyledCrosshair;
