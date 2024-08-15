import { Box, Skeleton, SkeletonText } from "@chakra-ui/react";
import { FC } from "react";

const SkeletonCard: FC = () => {
  return (
    <Box
      p={5}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      backgroundColor="gray.100"
    >
      <Skeleton borderRadius={"md"} h={"400px"} w={"100%"} mb={4} />
      <SkeletonText mt="4" noOfLines={1} spacing="4" />
    </Box>
  );
};

export default SkeletonCard;
