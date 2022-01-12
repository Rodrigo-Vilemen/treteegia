import { Button, ButtonProps, Flex } from '@chakra-ui/react';

import React from 'react';
import { BsGearFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

type MenuButtonProps = ButtonProps & {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
  to: string;
};

export const MenuButton: React.FC<MenuButtonProps> = ({
  children,
  icon,
  to,
  onClick,
  background,
  color,
  transform,
}) => (
  <Button
    as={Link}
    to={to}
    mt={1}
    onClick={onClick}
    leftIcon={icon}
    background={background}
    color={color}
    transform={transform}
    iconSpacing="0"
    textColor="#665AE7"
    bg="white"
    boxShadow="lg"
    fontWeight="bold"
    borderRadius="full"
    size="50"
    fontSize="1.5rem"
    h="3rem "
    w="3rem"
  >
    {children}
  </Button>
);
