import { Input, InputProps } from '@chakra-ui/react';
// import { BorderShadow } from 'react-native-shadow'
import React from 'react';

export const InputFieldP = React.forwardRef<HTMLInputElement, InputProps>(
  ({ ...props }, ref) => (
    <Input
      {...props}
      isInvalid
      ref={ref}
      errorBorderColor="#665AE7"
      textColor="#665AE7"
      colorScheme="#665AE7"
      borderColor="#665AE7"
      focusBorderColor="#665AE7"
      borderWidth="bold"
      bg="white"
      h="3rem"
      fontSize="lg"
      borderRadius="full"
    />
  )
);
