import {
  Box,
  Button,
  Container,
  SimpleGrid,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import CharacterCard from "./components/CharacterCard";
import CharacterModal from "./components/CharacterModal";
import SkeletonCard from "./components/SkeletonCard";
import { useStarWarsCharacters } from "./hooks/useStarWarsCharacters";
import { Character } from "./types/types";

const App: FC = () => {
  const [page, setPage] = useState(1);
  const [characters, setCharacters] = useState<Character[]>([]);
  const { data, isLoading, isError, isFetching } = useStarWarsCharacters(page);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(
    null
  );

  useEffect(() => {
    if (data) {
      setCharacters((prev) => [...prev, ...data.results]);
    }
  }, [data]);

  const handleCardClick = (character: Character) => {
    setSelectedCharacter(character);
    onOpen();
  };

  return (
    <Container maxW="container.xl" py={10}>
      <Text fontWeight={"bold"} textAlign={"center"} fontSize={"4xl"} mb={5}>
        Star Wars character
      </Text>
      {isError ? (
        <Box color="red.500" textAlign="center">
          Error loading characters...
        </Box>
      ) : (
        <>
          <SimpleGrid columns={[1, 2, 3]} spacing={10}>
            {characters.map((character) => (
              <CharacterCard
                key={character.name}
                name={character.name}
                species={character.species[0] || "Unknown"}
                onClick={() => handleCardClick(character)}
              />
            ))}
            {isLoading &&
              [...Array(10)].map((_, index) => <SkeletonCard key={index} />)}
          </SimpleGrid>

          {data?.next && (
            <Button
              mt={5}
              onClick={() => setPage((prevPage) => prevPage + 1)}
              isLoading={isFetching}
            >
              Load More
            </Button>
          )}
        </>
      )}

      <CharacterModal
        isOpen={isOpen}
        onClose={onClose}
        character={selectedCharacter}
      />
    </Container>
  );
};

export default App;
