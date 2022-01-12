import { Button, Flex } from '@chakra-ui/react';
import React from 'react';
import { WhiteBox } from '../Components/WhiteBox';
import { BsArrowReturnLeft } from 'react-icons/bs';

type props = {
  funcaoIcon?: () => void;
};
export const WrapperBG: React.FC<props> = ({ children, funcaoIcon }) => {
  return (
    <Flex width="100%" h="100vh" flexDirection="column" height="100vh">
      <Flex
        className="background"
        h="100%"
        background="linear-gradient(0deg, rgba(38,84,197,1) 0%, rgba(5,42,133,1) 35%, rgba(38,84,197,1) 100%);"
      >
        {funcaoIcon && (
          <Button
            onClick={funcaoIcon}
            zIndex={3}
            margin-right="auto"
            colorScheme="tranparent"
            textColor="white"
            fontWeight="bold"
            marginLeft="2%"
            marginTop="2%"
            position="fixed"
          >
            <BsArrowReturnLeft size={30} />
          </Button>
        )}

        <Flex
          w="100%"
          padding="3rem 1rem 1rem"
          display="flex"
          alignItems="center"
          justifyContent="space-around"
          alignContent="stretch"
          flex-wrap="nowrap"
          flexDirection="column"
          textColor="white"
          fontSize="xl"
          fontWeight="bold"
        >
          <WhiteBox>{children || ''}</WhiteBox>
        </Flex>
      </Flex>
    </Flex>
  );
};
