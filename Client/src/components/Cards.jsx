import Card from "./Card";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  
`;

export default function Cards({ characters, onClose }) {
  return (
    <Container>
      {characters.map((char) => (
        <Card key={char.id} char={char} onClose={onClose} />
      ))}
    </Container>
  );
}
