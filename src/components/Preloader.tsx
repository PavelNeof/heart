import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import 'twin.macro';
import loader from '../assets/preloader.gif';

type ModalComponentProps = {
  loading: boolean;
};

const Preloader = React.memo(({ loading }: ModalComponentProps) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  React.useEffect(() => {
    setIsOpen(loading);
  }, [loading]);
  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Portal>
        <Dialog.Overlay tw="fixed inset-0 bg-black/20 z-40" />
        <Dialog.Content tw="fixed left-1/2 top-1/2 z-50 w-full rounded min-w-1 max-w-md">
          <Dialog.Description tw="">
            <img src={loader} alt="Анимация" />
          </Dialog.Description>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
});

export default Preloader;
