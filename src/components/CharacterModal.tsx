import {
  Box,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Skeleton,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useCharacterHomeWorldDetails } from "../hooks/useCharacterHomeWorldDetails";
import { Character } from "../types/types";

interface CharacterModalProps {
  isOpen: boolean;
  onClose: () => void;
  character: Character | null;
}

const CharacterModal: React.FC<CharacterModalProps> = ({
  isOpen,
  onClose,
  character,
}) => {
  const {
    data: homeWorldData,
    isLoading,
    isError,
  } = useCharacterHomeWorldDetails(character?.homeworld || null);

  if (!character) return null;

  return (
    <Modal size="2xl" isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader fontSize="4xl">{character.name}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>
            <strong>Height:</strong> {parseFloat(character.height) / 100} m
          </Text>
          <Text>
            <strong>Mass:</strong> {character.mass} kg
          </Text>
          <Text>
            <strong>Birth Year:</strong> {character.birth_year}
          </Text>
          <Text>
            <strong> Date Added:</strong>{" "}
            {new Date(character.created).toLocaleDateString("en-GB")}
          </Text>
          <Text>
            <strong>Films:</strong> {character.films.length}
          </Text>

          {isLoading ? (
            <Box mt={4}>
              <Skeleton height="20px" mb={2} />
              <Skeleton height="20px" mb={2} />
              <Skeleton height="20px" mb={2} />
              <Skeleton height="20px" mb={2} />
            </Box>
          ) : isError ? (
            <Box mt={4} color="red.500" textAlign="center">
              Failed to load home world details. Please try again.
            </Box>
          ) : (
            homeWorldData && (
              <Box mt={4}>
                <Text fontWeight="bold" fontSize="lg" mt={2}>
                  Home world Details:
                </Text>
                <Text>
                  <strong>Name:</strong> {homeWorldData.name}
                </Text>
                <Text>
                  <strong>Terrain:</strong> {homeWorldData.terrain}
                </Text>
                <Text>
                  <strong>Climate:</strong> {homeWorldData.climate}
                </Text>
                <Text>
                  <strong>Population:</strong> {homeWorldData.population}
                </Text>
              </Box>
            )
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default CharacterModal;
