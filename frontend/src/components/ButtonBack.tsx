import { Button, Flex } from '@chakra-ui/react';
import React from 'react';
import { BsArrowReturnLeft } from 'react-icons/bs';
import { useHistory } from 'react-router-dom';

export const ButtonBack: React.FC = () => {
  const history = useHistory();

  return (
    <Flex>
      <Button
        // onClick={history.goBack}
        onClick={() => history.goBack()}
        colorScheme="tranparent"
        textColor="white"
        fontWeight="bold"
        marginLeft="2%"
        marginTop="2%"
      >
        <BsArrowReturnLeft size={30} />
      </Button>
    </Flex>
  );
};
