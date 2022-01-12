import { Button, Flex } from '@chakra-ui/react';

import React from 'react';
import { BsGearFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export const ButtonConfig: React.FC = () => {
  return (
    <Flex>
      <Button colorScheme="tranparent" textColor="white" fontWeight="bold">
        <Link to="/MainConfig">
          <BsGearFill size={30} />
        </Link>
      </Button>
    </Flex>
  );
};
