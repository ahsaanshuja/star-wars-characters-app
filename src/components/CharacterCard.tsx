import { Box, Image, Skeleton, Text } from "@chakra-ui/react";
import React, { useState } from "react";

interface CharacterCardProps {
  name: string;
  species: string;
  onClick: () => void;
}

const CharacterCard: React.FC<CharacterCardProps> = ({
  name,
  species,
  onClick,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <Box
      onClick={onClick}
      p={5}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      backgroundColor={species === "Human" ? "blue.100" : "green.100"}
      cursor="pointer"
      _hover={{ transform: "scale(1.05)", transition: "transform 0.2s" }}
    >
      {isLoading && (
        <Skeleton
          borderRadius={"md"}
          h={"400px"}
          w={"100%"}
          isLoaded={!isLoading}
        />
      )}
      <Image
        borderRadius={"md"}
        src={`https://picsum.photos/seed/${name}/400/400`}
        alt={name}
        mb={4}
        loading="lazy"
        onLoad={() => setIsLoading(false)}
      />
      <Text textAlign={"center"} fontSize="2xl" fontWeight="bold">
        {name}
      </Text>
    </Box>
  );
};

export default CharacterCard;
