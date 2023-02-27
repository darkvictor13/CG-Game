import { Box } from "@react-three/drei";

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
