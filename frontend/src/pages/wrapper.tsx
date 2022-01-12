import { Box, Flex, Text } from '@chakra-ui/react';

import React from 'react';
import TopHeader from '../SVG/topDesign.svg';
import { WhiteBox } from '../Components/WhiteBox';
import { ButtonBack } from '../Components/ButtonBack';
import { ButtonConfig } from '../Components/ButtonConfig';
import useWindowDimensions from '../utils/useWindowDimensions';

type props = {
  BoxContent?: React.ReactNode;
  name?: string;
  back?: boolean;
  conf?: boolean;
  blur?: string;
};
export const Wrapper: React.FC<props> = ({
  children,
  BoxContent,
  name,
  back = true,
  conf = true,
  blur,
}) => {
  const { height } = useWindowDimensions();

  return (
    <Flex
      width="100vw"
      overflowX="hidden"
      height={height}
      flexDirection="column"
      filter={blur}
      transition="0.35s"
    >
      <Flex flexDir="column" position="fixed" zIndex="2" w="100%" height="70px">
        <Flex
          width="100%"
          justifyContent="flex-end"
          padding="0.3rem 0.2rem 0.1rem 0.2rem"
        >
          {back && (
            <Flex className="ButtonBack" width="100%">
              <ButtonBack>{ButtonBack || ''}</ButtonBack>
            </Flex>
          )}
          {conf && (
            <Flex
              className="ButtonConfig"
              width="100%"
              justifyContent="flex-end"
            >
              <ButtonConfig>{ButtonConfig || ''}</ButtonConfig>
            </Flex>
          )}
        </Flex>

        <Flex
          width="100%"
          padding="0 2rem 0.2rem 2rem"
          color="white"
          fontSize="xl"
          fontWeight="bold"
          alignSelf="flex-start"
        >
          <Text className="foi" textTransform="capitalize">
            {name || ''}
          </Text>
        </Flex>
      </Flex>

      <Flex
        minHeight="265px"
        position="relative"
        w="100%"
        padding="4.9rem 0 0"
        backgroundImage={TopHeader}
        backgroundSize="100%"
        backgroundRepeat="no-repeat"
        backgroundPosition="center top"
      >
        <Flex
          position="absolute"
          w="100%"
          padding="0 1.5rem"
          display="flex"
          alignItems="center"
          alignContent="stretch"
          flex-wrap="nowrap"
          flexDirection="column"
          textColor="white"
          fontSize="xl"
          fontWeight="bold"
        >
          <WhiteBox>{BoxContent || ''}</WhiteBox>
        </Flex>
      </Flex>
      <Box h="100%">{children}</Box>
    </Flex>
  );
};
