import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from '@chakra-ui/react';
import React, { createContext, useContext, useEffect } from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

interface IAlertContext {
  setUnexpectedError: (error: unknown) => void;
  setAlert: (alert: IAlert) => void;
}

const AlertContext = createContext({} as IAlertContext);

interface IAlert {
  data: string;
  onBack?: () => void;
}

/**
 *
 * Precisa ser colocado dentro de um Router
 * @returns
 */
export const AlertProvider: React.FC = ({ children }) => {
  const [error, setError] = useState<unknown>();
  const [alert, setAlert] = useState<IAlert>();
  const history = useHistory();

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  function handleOnBack() {
    const backFunction = alert?.onBack || history.goBack;
    setAlert(undefined);
    backFunction();
  }

  function tryAgain() {
    setAlert(undefined);
    location.reload();
  }

  const data = {
    setUnexpectedError: setError,
    setAlert,
  };

  const ModalData = alert ? (
    <Modal
      closeOnOverlayClick={false}
      isOpen={!!alert}
      onClose={handleOnBack}
      isCentered
    >
      <ModalOverlay />
      <ModalContent maxW="90vw">
        <ModalHeader>Oops!</ModalHeader>
        <ModalBody pb={6}>{alert?.data}</ModalBody>
        <ModalFooter justifyContent="space-between">
          <Button onClick={handleOnBack}>Voltar</Button>
          <Button onClick={tryAgain} colorScheme="blue" mr={3}>
            Tentar Novamente
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  ) : (
    React.Fragment
  );

  return (
    <AlertContext.Provider value={data}>
      {children}
      {ModalData}
    </AlertContext.Provider>
  );
};

export const useAlert = () => {
  const context = useContext(AlertContext);
  return context;
};

export { AlertContext };
