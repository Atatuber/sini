import styled from "styled-components";

const SocialButton = ({ label, icon, gradient, link }) => {
  return (
    <StyledWrapper gradient={gradient}>
      <a href={link} className="Btn text-center font-sans">
        <span className="icon">{icon}</span>
        <span className="text">{label}</span>
      </a>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .Btn {
    border: none;
    border-radius: 50%;
    width: 45px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.4s ease;
    cursor: pointer;
    position: relative;
    background: ${({ gradient }) => gradient || "#000"};
    overflow: hidden;
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    transition: opacity 0.3s ease;
  }

  .icon svg path {
    fill: white;
  }

  .text {
    position: absolute;
    color: white;
    width: 120px;
    font-weight: 600;
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  .Btn:hover {
    width: 110px;
    border-radius: 30px;
  }

  .Btn:hover .text {
    opacity: 1;
  }

  .Btn:hover .icon {
    opacity: 0;
  }
`;

export default SocialButton;
