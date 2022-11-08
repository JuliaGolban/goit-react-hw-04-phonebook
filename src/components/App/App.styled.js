import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  width: 400px;
  margin: 32px auto;

  border-radius: 5px;
  box-shadow: 5px 5px 10px -2px rgba(132, 132, 132, 0.5);
`;
const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  padding: 30px;
`;

const Title = styled.h1`
  margin-bottom: 20px;
  font-size: 32px;
  font-weight: 700;
  color: rgb(0, 0, 0);
`;

export { Container, Section, Title };
