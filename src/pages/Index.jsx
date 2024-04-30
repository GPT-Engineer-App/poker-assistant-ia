// Importações necessárias do Chakra UI e ícones
import { Box, Container, Heading, Text, Button, Image, VStack, Link } from "@chakra-ui/react";
import { FaRobot, FaBook, FaPlay } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={5}>
      <VStack spacing={8} align="center">
        <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxBSSUyMHJvYm90fGVufDB8fHx8MTcxNDUyMDk4Nnww&ixlib=rb-4.0.3&q=80&w=1080" alt="AI Poker Helper" />
        <Heading as="h1" size="2xl" textAlign="center">
          AI Poker Assistant
        </Heading>
        <Text fontSize="xl" textAlign="center">
          A sua ferramenta definitiva para melhorar no poker com a ajuda de inteligência artificial.
        </Text>
        <Image src="https://images.unsplash.com/photo-1560963689-b5682b6440f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwb2tlciUyMGhhbmRzfGVufDB8fHx8MTcxNDUyMDk4Nnww&ixlib=rb-4.0.3&q=80&w=1080" alt="Poker Hands" boxSize="300px" m={4} />
        <Image src="https://images.unsplash.com/photo-1582334202311-6c7ad84f8bfa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwb2tlciUyMHBsYXllcnN8ZW58MHx8fHwxNzE0NTIwOTg2fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="People Playing Poker" boxSize="300px" m={4} />
        <Box d="flex" gap={4}>
          <Button leftIcon={<FaRobot />} colorScheme="teal" variant="solid">
            Comece Agora
          </Button>
          <Button leftIcon={<FaBook />} colorScheme="gray" variant="outline">
            Aprenda Mais
          </Button>
          <Button leftIcon={<FaPlay />} colorScheme="red" variant="ghost">
            Demonstração
          </Button>
        </Box>
        <Text fontSize="md">Desenvolvido por especialistas em tecnologia e profissionais de poker, nosso assistente de IA utiliza algoritmos avançados para analisar seu estilo de jogo e fornecer recomendações personalizadas.</Text>
        <Link href="https://www.example.com" isExternal color="teal.500">
          Visite nosso site oficial para mais informações
        </Link>
      </VStack>
    </Container>
  );
};

export default Index;
