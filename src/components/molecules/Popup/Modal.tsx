import { useEffect } from 'react';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  status: 'idle' | 'loading' | 'success' | 'error';
  message: string;
}

const Modal = ({ isOpen, onClose, status, message }: ModalProps) => {
  useEffect(() => {
    if (isOpen && (status === 'success' || status === 'error')) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, status, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-neutral-50/10 dark:bg-neutral-950/10 overflow-y-auto h-full w-full z-50 flex items-center justify-center">
      <div className="relative w-96 shadow-lg rounded-2xl mx-4 max-w-[150vw] modal-enter-active overflow-hidden">
        <div className="text-center">
          <div className='bg-neutral-100 dark:bg-neutral-900 p-8'>
            {status === 'loading' && (
              <div className="flex justify-center mb-4">
                <div className="spinner border-4 border-gray-200 dark:border-gray-700 border-t-orange-500 rounded-full w-50 h-50 animate-spin"></div>
              </div>
            )}

            {status === 'success' && (
              <div className="flex justify-center mb-4">
                <div className="success-icon icon-bounce">
                  <img src="./img/icon-message-success.png" alt="Success" />
                </div>
              </div>
            )}

            {status === 'error' && (
              <div className="flex justify-center mb-4">
                <div className="error-icon icon-bounce">
                  <img src="./img/icon-message-failed.png" alt="Error" />
                </div>
              </div>
            )}
          </div>
          <div className='bg-white dark:bg-black p-8'>

            <p className="text-gray-900 dark:text-white text-lg font-semibold mb-4 ">
              {status === 'loading' ? 'Processing...' : status === 'success' ? 'Message Received!' : 'Oops! Something went wrong.'}
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-6">{message}</p>

            {(status === 'success' || status === 'error') && (
              <button
                onClick={onClose}
                className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
              >
                {status === 'success' ? (
                  <a href="/">Back to Home</a>
                ) : 'Try Again'}
              </button>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Modal;
