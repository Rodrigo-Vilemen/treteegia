import { Flex } from '@chakra-ui/react';
import React from 'react';

export const WhiteBox: React.FC = ({ children }) => {
  return (
    <Flex
      className="shadow-wrapper"
      flexDir="column"
      zIndex={1}
      justifyContent="space-between"
      bg="white"
      borderRadius="xl"
      w="100%"
      padding="0.8rem 0.8rem 0rem"
      textColor="#2654C5"
      boxShadow="2xl"
    >
      {children}
    </Flex>
  );
};
