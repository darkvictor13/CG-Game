import { Box, Line } from "@react-three/drei";
import { ThreeElements } from "@react-three/fiber";

//const TABLE_SIZE = 10;
//const TABLE_HEIGHT = 0.1;

export default function Table(props: {
  tableSize: number;
  tableHeight: number;
}) {
  const { tableSize, tableHeight } = props;
  return (
    <mesh position={[0, 0, 0]}>
      <Box args={[tableSize, tableHeight, tableSize]} material-color="green" />
    </mesh>
  );
}
